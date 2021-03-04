<template>
  <div>
    <h1>{{ beliefData.name }}</h1>
    <belief-node></belief-node>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as uuid from 'uuid'
import * as d3 from 'd3'
import BeliefNode from '~/components/BeliefNode.vue'

// interface Node {
//   id: string,
//   data: {},
//   parent: Node,
//   depth: number,
//   children: Array<Node>,
// }

// interface Link {
//   source: Node,
//   target: Node,
// }

export default Vue.extend({
  name: 'BeliefTree',
  components: {
    BeliefNode,
  },
  data() {
    return {
      beliefData: null as any,
      currentNode: null as any,
      duration: 0,
      index: 0,
      links: [] as any[],
      newNode: null as unknown,
      nodeObj: null as unknown,
      nodes: [] as any[],
      root: null as any,
      svg: null as any,
      treeMap: null as any,
    }
  },
  computed: {
    tree() {
      return d3.tree()
    }
  },
  methods: {
    addNode(name: string) {
      // TODO Open node creation widget
      const id = uuid.v4()
      const parent = this.currentNode
      const child = {
        id,
        data: {
          name,
        },
        parent,
        depth: parent.depth + 1,
        children: [],
      }

      if (parent.children) parent.children.push(child)
      else parent.children = [child]

      this.nodes.push(child)
      this.links.push({
        source: parent,
        target: child,
      })

      this.update(parent)
    },
    deleteNode() {
      let self = this // TODO necessary?

      if (this.currentNode.parent && this.currentNode.parent.children.length > 0) {
        this.currentNode.parent.children.filter((node: any, index: number) => {
          if (node.id && (node.id == self.currentNode.id)) {
            self.currentNode.parent.children.splice(index, 1)
            if (self.currentNode.parent.children.length === 0) {
              delete self.currentNode.parent.children
            }
            self.update(self.currentNode)
          }
        })
      }
    },
    updateNode() {
      // this.currentNode.data.name = this.newNode.name
      // this.update(this.currentNode.parent as Node)
    },
    update(source: any) {
      const self = this
      const treeMapData = this.treeMap(this.root)

      this.nodes = treeMapData.descendants()
      this.links = treeMapData.descendants().slice(1)

      this.nodes.forEach((node) => { node.y = node.depth * 180 });

      const node = this.svg.selectAll('g.node')
        .data(
          self.nodes, 
          (node: any) => {
            return node.id || (node.id = ++self.index)
          }
        )

      // Animate the nodes
      const nodeEntry = node.enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', () => {
          // return 'translate(' + source.y0 + ',' + source.x0 + ')'
          return `translate(${source.y0},${source.x0})`
        })
        .on('click', self.onClick)

      // Add circles
      nodeEntry.append('circle')
        .attr('class', 'node')
        .attr('r', 1e-6)
        .style('fill', (node: any) => {
          return node._children ? '#fcfcfc' : '#fff'
        })

      // Add text
      nodeEntry.append('text')
        .attr('dy', '.35em')
        .attr('x', (node: any) => {
          return node.children || node._children ? -13 : 13
        })
        .attr('text-anchor', (node: any) => {
          return node.children || node._children ? 'end' : 'start'
        })
        .text((node: any) => {
          return node.data.name
        })

      const nodeUpdate = nodeEntry.merge(node)

      node.select('text')
        .attr('dy', '.35em')
        .attr('x', (node: any) =>  {
          return node.children || node._children ? -13 : 13
        })
        .attr('text-anchor', (node: any) =>  {
          return node.children || node._children ? 'end' : 'start'
        })
        .text((node: any) =>  { return node.data.name })

      // Transition to the proper position for the node
      nodeUpdate.transition()
        .duration(self.duration)
        .attr('transform', (node: any) =>  {
          return `translate(${node.y},${node.x})`
        })

      // Update the node attributes and style
      nodeUpdate.select('circle.node')
        .attr('r', 10)
        .style('fill', (node: any) =>  {
          return node._children ? 'lightsteelblue' : '#fff'
        })
        .attr('cursor', 'pointer')

      // Remove any exiting nodes
      const nodeExit = node.exit()
        .transition()
        .duration(self.duration)
        .attr('transform', function () {
          return `translate(${source.y},${source.x})`
        })
        .remove()

      // On exit reduce the node circles size to 0
      nodeExit.select('circle')
        .attr('r', 1e-6)

      // On exit reduce the opacity of text labels
      nodeExit.select('text')
        .style('fill-opacity', 1e-6)
      
      // Update the links...
      const link = this.svg.selectAll('path.link')
        .data(self.links, (node: any) => { return node.id })

      // Enter any new links at the parent's previous position.
      const linkEnter = link.enter().insert('path', 'g')
        .attr('class', 'link')
        .attr('d', function () {
          var o = { x: source.x0, y: source.y0 }
          return self.diagonal(o, o)
        })

      // UPDATE
      const  linkUpdate = linkEnter.merge(link)

      // Transition back to the parent element position
      linkUpdate.transition()
        .duration(self.duration)
        .attr('d', (node: any) => { return self.diagonal(node, node.parent) })

      // Remove any exiting links
      link.exit().transition()
        .duration(self.duration)
        .attr('d', () => {
          const o = { x: source.x, y: source.y }
          return self.diagonal(o, o)
        })
        .remove()

      // Store the old positions for transition.
      this.nodes.forEach((node: any) => {
        node.x0 = node.x
        node.y0 = node.y
      })
    },
    diagonal(source: any, node: any) {
        let path = `M ${source.y} ${source.x}
            C ${(source.y + node.y) / 2} ${source.x},
              ${(source.y + node.y) / 2} ${node.x},
              ${node.y} ${node.x}`
        return path
      },
    onClick(node: any) {
      this.currentNode = node
      if (node.children) {
        node._children = node.children
        node.children = null
      } else {
        node.children = node._children
        node._children = null
      }
      this.update(node)
    },
  },
  created() {
    this.beliefData = require('~/assets/data/belief_map.json')
  },
  mounted() {
    const margin = { top: -200, right: 90, bottom: 30, left: 90 }
    const width = 960 - margin.left - margin.right
    const height = 500 - margin.top - margin.bottom
    
    this.svg = d3.select('#belief-map')
      .attr('viewBox', `-10, -10, ${width}, ${height}`)
      .append('g')
      .attr('transform', 'translate(' +
        margin.left + ',' + margin.top + ')'
      )

    this.nodeObj = d3.hierarchy.prototype.constructor

    this.index = 0

    this.duration = 250

    this.treeMap = d3.tree().size([height, width])

    this.root = d3.hierarchy(this.beliefData.children, (node: any) =>  { return node.children })
    this.root.x0 = height / 2
    this.root.y0 = 0
    this.update(this.root)
  }
})
</script>

<style lang="scss" scoped>
  #belief-map {
    circle {
      fill: #fff;
      stroke: steelblue;
      stroke-width: 3px;
    }
    .link {
      fill: none;
      stroke: #ccc;
      stroke-width: 2px;
    }
    .node {
      text {
        font: 12px sans-serif;
      }
    }
  }
</style>
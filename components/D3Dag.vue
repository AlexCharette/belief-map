<template>
  <div id="dag-container" ref="container">
    <svg id="belief-map" :style="initialTransformStyle"></svg>
    <div id="node-container" :style="initialTransformStyle">
      <belief-node
        v-for="(node, index) of nodes"
        :key="node.id"
        :index="index"
        :node="node.data"
        :shapeData="{ x: node.x, y: node.y, size: nodeWidth }"
        class="node"
        :style="nodeStyle(node)"
      ></belief-node>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import * as d3 from 'd3'
import * as d3 from 'd3-dag'
import * as uuid from 'uuid'
// import { useDrag, useMove } from 'vue-use-gesture'
import { Coords, getNodeCoords, Node } from '~/belief-map.types'
import BeliefNode from '~/components/BeliefNode.vue'
import { hierarchy } from 'd3-hierarchy'

const NODE_WIDTH = 75
const NODE_HEIGHT = 75
const HEIGHT_LEVEL = 225

export default Vue.extend({
  name: 'D3Dag',
  components: {
    BeliefNode,
  },
  data() {
    return {
      currentNode: null as any,
      duration: 250, 
      initTransformData: {
        x: 0 as number,
        y: 0 as number,
      } as any,
      links: [] as any[],
      newNode: null as unknown,
      nodes: [] as any[],
      nodeWidth: NODE_WIDTH as number,
      nodeHeight: NODE_HEIGHT as number,
      root: null as any,
      svg: null as any,
      unsubscribe: null as any,
    }
  },
  computed: {
    dataset(): any {
      return this.$store.state.data.tree
    },
  },
  methods: {
    buildTree(root: any) {
      // const treeBuilder = d3.tree().nodeSize([NODE_WIDTH * 2, HEIGHT_LEVEL])
      const create = hierarchy
      const dag = create(root)
      return [dag.descendants(), dag.links()]
    },
    formatDimension(dimension: any) {
      if (typeof dimension === 'number') return `${dimension}px`
      return (dimension.indexOf('px') !== -1) ? dimension : `${dimension}px`
    },
    nodeStyle(node: any) : any {
      return node.data.isRoot
        ? {
            left: this.formatDimension(node.x + this.nodeWidth / 2),
            top: this.formatDimension(node.y + this.nodeHeight / 2),
            width: this.formatDimension(this.nodeWidth),
            height: this.formatDimension(this.nodeHeight),
          }
        : {
            left: this.formatDimension(this.nodeWidth / 2),
            top: this.formatDimension(this.nodeHeight / 2),
            width: this.formatDimension(this.nodeWidth),
            height: this.formatDimension(this.nodeHeight),
          }
    },
    deleteNode() {
      console.log('D3Dag.deleteNode() -- Deleting node')

      let self = this

      if (
        this.currentNode.parent &&
        this.currentNode.parent.children.length > 0
      ) {
        this.currentNode.parent.children.filter((node: any, index: number) => {
          if (node.id && node.id == self.currentNode.id) {
            self.currentNode.parent.children.splice(index, 1)
            if (self.currentNode.parent.children.length === 0) {
              delete self.currentNode.parent.children
            }
            self.update(self.currentNode)
          }
        })
      }
    },
    render(nodes: Node[]) {
        nodes.forEach((node: Node) {
            // Generate coords
            const childCoords = node.data.coords
            // Iterate through parents
            node.parents.forEach((parentId: string) {
                const parentCoords = getNodeCoords(parentId, nodes)
                links.push(Link(parentCoords, childCoords))
            }
        })
    },
    update(source: any) {
      console.log("D3Tree.update() -- Updating the tree")

      const self = this

      const [nodes, links] = this.buildTree(source)

      // Update all IDs - VERY IMPORTANT for proper re-rendering
      nodes.forEach((node: any) => node.id = uuid.v4())

      this.links = links

      this.svg = d3.select('#belief-map')

      const linkObjects = this.svg.selectAll('.link').data(
        links, (d: any) => `${d.source.data.id}-${d.target.data.id}`
      )

      // Enter any new links at the parent's previous position.
      linkObjects
        .enter()
        .append('path')
        .style('opacity', 0)
        .transition()
        .duration(this.duration)
        .ease(d3.easeCubicInOut)
        .style('opacity', 1)
        .attr('class', 'link')
        .attr('d', (d: any) => self.diagonal(d))
      // Transition back to the parent element position
      linkObjects
        .transition()
        .duration(self.duration)
        .ease(d3.easeCubicInOut)
        .attr('d', (d: any) => self.diagonal(d))
      // Remove any exiting links
      linkObjects
        .exit()
        .transition()
        .duration(self.duration)
        .ease(d3.easeCubicInOut)
        .style('opacity', 0)
        .remove()

      this.nodes = nodes
    },
  }
})
</script>
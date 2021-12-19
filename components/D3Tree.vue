<template>
  <div id="tree-container" ref="container">
    <svg id="belief-map" :style="initialTransformStyle"></svg>
    <div id="node-container" :style="initialTransformStyle">
      <!-- <transition-group name="tree-node" tag="div" class="annoying"> -->
      <belief-node
        v-for="(node, index) of nodes"
        :key="node.id"
        :index="index"
        :node="node.data"
        :shapeData="{ x: node.x, y: node.y, size: nodeWidth }"
        class="node"
        :style="nodeStyle(node)"
      ></belief-node>
      <!-- </transition-group> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as d3 from 'd3'
import * as uuid from 'uuid'
import BeliefNode from '~/components/BeliefNode.vue'

const NODE_WIDTH = 75
const NODE_HEIGHT = 75
const HEIGHT_LEVEL = 225

export default Vue.extend({
  name: 'D3Tree',
  components: {
    BeliefNode,
  },
  data() {
    return {
      nodeWidth: NODE_WIDTH as number,
      nodeHeight: NODE_HEIGHT as number,
      heightLevel: HEIGHT_LEVEL as number,
      links: [] as any[],
      nodes: [] as any[],
      currentNode: null as any, // OLD
      duration: 250,
      newNode: null as unknown, // OLD
      root: null as any,
      svg: null as any,
      initTransformData: {
        x: 0 as number,
        y: 0 as number,
      } as any,
      unsubscribe: null as any,
    }
  },
  computed: {
    dataset(): any {
      return this.$store.state.data.tree
    },
    initialTransformStyle(): Object {
      return {
        transform: `scale(1) translate(${this.initTransformData.x}px, ${this.initTransformData.y}px)`,
        transformOrigin: 'center',
      }
    },
  },
  methods: {
    nodeStyle(node: any) {
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
      console.log('D3Tree.deleteNode() -- Deleting node')

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
    formatDimension(dimension: any) {
      if (typeof dimension === 'number') return `${dimension}px`
      return (dimension.indexOf('px') !== -1) ? dimension : `${dimension}px`
    },
    initTransform() {
      const containerWidth = (this.$refs.container as any).offsetWidth
      const containerHeight = (this.$refs.container as any).offsetHeight
      this.initTransformData.x = Math.floor(containerWidth / 2)
      this.initTransformData.y = Math.floor(NODE_HEIGHT)
    },
    buildTree(root: any) {
      const treeBuilder = d3.tree().nodeSize([NODE_WIDTH * 2, HEIGHT_LEVEL]) // TODO [nodeWidth, levelHeight]
      const tree = treeBuilder(d3.hierarchy(root))
      return [tree.descendants(), tree.links()]
    },
    update(source: any) {
      console.log("D3Tree.update() -- Updating the tree")

      const self = this

      const [nodes, links] = this.buildTree(source)

      // Update all IDs
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
    diagonal(d: any) {
      const linkPath = d3.linkVertical()
      // let source = { x: d.source.x, y: d.source.y };
      // let target = { x: d.target.x, y: d.target.y };
      linkPath
        .x((d: any) => {
          return d.x
        })
        .y((d: any) => {
          return d.y
        })
        .source((d: any) => {
          return d.source
        })
        .target((d: any) => {
          return d.target
        })
      return linkPath(d)
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
  watch: {
    dataset(newData: any, oldData: any) {
      // this.$store.commit('data/addUniqueKey')
      this.root = this.dataset

      this.update(this.root)
      this.initTransform()
    },
  },
  created() {
    const self = this

    this.unsubscribe = this.$store.subscribe((mutation: any, state: any) => {
      if (mutation.type === 'data/deleteNode' || mutation.type === 'data/addNode') {
        self.update(state.data.tree)
      }
    })
  },
  mounted() {
    this.duration = 250

    this.root = this.dataset

    this.update(this.root)
    this.initTransform()
  },
  beforeDestroy() {
    this.unsubscribe()
  },
})
</script>

<style lang="scss">
#tree-container {
  position: relative;
  // overflow: hidden;
  #belief-map {
    position: relative;
    .link {
      stroke-width: 2px !important;
      fill: transparent !important;
      stroke: #757575 !important;
    }
  }

  #node-container {
    z-index: 1;
  }

  #belief-map,
  #node-container,
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    overflow: visible;
    transform-origin: 0 50%;
  }

  .node {
    position: absolute;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    transition: all 0.8s;
    transition-timing-function: ease-in-out;
  }
}
</style>
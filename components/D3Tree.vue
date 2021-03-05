<template>
  <div>
    <svg id="belief-map"></svg>
    <div>
      <!-- <transition-group name="tree-node" tag="div" class="annoying"> -->
          <belief-node 
            v-for="(node, index) of nodes"
            :index="index" 
            :node="node" 
            :children="node.children"
            :key="node.data.id"
            :style="{
                left: formatDimension(node.x),
                top: formatDimension(node.y),
                width: formatDimension(320),
                height: formatDimension(320)
              }"
          ></belief-node>
      <!-- </transition-group> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as uuid from "uuid";
import * as d3 from "d3";
import BeliefNode from "~/components/BeliefNode.vue";
import { BeliefType, BezierData, Node } from "~/belief-map.types";

export default Vue.extend({
  name: "D3Tree",
  components: {
    BeliefNode,
  },
  props: ["dataSet"],
  data() {
    return {
      links: [] as any[],
      nodes: [] as any[],
      currentNode: null as any, // OLD
      duration: 0, // OLD
      index: 0, // OLD
      newNode: null as unknown, // OLD
      nodeObj: null as unknown, // OLD
      root: null as any, // OLD
      svg: null as any, // OLD
      treeMap: null as any, // OLD
    };
  },
  methods: {
    addNode(name: string) {
      // TODO Open node creation widget
      const id = uuid.v4();
      const parent = this.currentNode;
      const child = {
          id,
          name: 'Some name',
          notes: '',
          type: BeliefType.ScientificEvidence,
          references: [],
          isRoot: false,
        children: [],
      };

      if (parent.children) parent.children.push(child);
      else parent.children = [child];

      this.nodes.push(child);
      this.links.push({
        source: parent,
        target: child,
      });

      this.update(parent);
    },
    deleteNode() {
      let self = this; // TODO necessary?

      if (
        this.currentNode.parent &&
        this.currentNode.parent.children.length > 0
      ) {
        this.currentNode.parent.children.filter((node: any, index: number) => {
          if (node.id && node.id == self.currentNode.id) {
            self.currentNode.parent.children.splice(index, 1);
            if (self.currentNode.parent.children.length === 0) {
              delete self.currentNode.parent.children;
            }
            self.update(self.currentNode);
          }
        });
      }
    },
    formatDimension(dimension: any) {
      if (typeof dimension === 'number') return `${dimension}px`
      if (dimension.indexOf('px') !== -1) {
        return dimension
      } else {
        return `${dimension}px`
      }
    },
    addUniqueKey(root: any) {
      const queue = [root]
      while (queue.length !== 0) {
        const node = queue.pop()
        node.id = uuid.v4()
        if (node.children) {
          queue.push(...node.children)
        }
      }
      return root
    },
    buildTree(root: any) {
      const treeBuilder = d3.tree().nodeSize([100, 100]); // TODO [nodeWidth, levelHeight]
      const tree = treeBuilder(d3.hierarchy(root));
      return [tree.descendants(), tree.links()];
    },
    update(source: any) {
      const self = this;

      const margin = { top: -200, right: 90, bottom: 30, left: 90 };
      const width = 960 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;

      this.svg = d3
        .select("#belief-map")
        .attr("viewBox", `0, 0, ${1000}, ${800}`)
        .append("g")
        // .attr("transform", `translate(${margin.left}, ${margin.top})`);

      const [nodes, links] = this.buildTree(source);
      this.links = links;

      const linkObjects = this.svg
        .selectAll(".link")
        .data(links, (d: any) => {
          return `${d.source.data.id}-${d.target.data.id}`;
        });

      // Enter any new links at the parent's previous position.
      linkObjects
        .enter()
        .insert("path", "g")
        .attr("class", "link")
        .attr("d", (d: any) => {
          return self.diagonal(d);
        });
      // Transition back to the parent element position
      linkObjects
        .transition()
        .duration(self.duration)
        .attr("d", (d: any) => {
          return self.diagonal(d);
        });
      // Remove any exiting links
      linkObjects
        .exit()
        .transition()
        .duration(self.duration)
        .attr("d", (d: any) => {
          return self.diagonal(d);
        })
        .remove();

      this.nodes = nodes;
    },
    diagonal(d: any) {
      const self = this
      const linkPath = d3.path()
      let source = { x: d.source.x, y: d.source.y }
      let target = { x: d.target.x, y: d.target.y }
      linkPath.moveTo(source.x, source.y)
      linkPath.moveTo(target.x, target.y)
      return linkPath.toString();
    },
    onClick(node: any) {
      this.currentNode = node;
      if (node.children) {
        node._children = node.children;
        node.children = null;
      } else {
        node.children = node._children;
        node._children = null;
      }
      this.update(node);
    },
  },
  created() {
    this.addUniqueKey(this.dataSet)
    console.log(`${this.dataSet}`)
  },
  mounted() {
    this.index = 0;

    this.duration = 250;

    this.root = this.dataSet

    this.update(this.root);
  },
});
</script>

<style lang="scss" scoped>
#belief-map {
  .link {
    stroke-width: 2px !important;
    fill: transparent !important;
    stroke: red !important;
  }
}
</style>
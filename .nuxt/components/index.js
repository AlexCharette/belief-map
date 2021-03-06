export { default as AddBelief } from '../../components/AddBelief.vue'
export { default as BaseWidget } from '../../components/BaseWidget.vue'
export { default as BeliefDetails } from '../../components/BeliefDetails.vue'
export { default as BeliefNode } from '../../components/BeliefNode.vue'
export { default as BeliefTree } from '../../components/BeliefTree.vue'
export { default as D3Tree } from '../../components/D3Tree.vue'
export { default as DonutChart } from '../../components/DonutChart.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as NodeDetails } from '../../components/NodeDetails.vue'
export { default as RootNode } from '../../components/RootNode.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'

export const LazyAddBelief = import('../../components/AddBelief.vue' /* webpackChunkName: "components/add-belief" */).then(c => c.default || c)
export const LazyBaseWidget = import('../../components/BaseWidget.vue' /* webpackChunkName: "components/base-widget" */).then(c => c.default || c)
export const LazyBeliefDetails = import('../../components/BeliefDetails.vue' /* webpackChunkName: "components/belief-details" */).then(c => c.default || c)
export const LazyBeliefNode = import('../../components/BeliefNode.vue' /* webpackChunkName: "components/belief-node" */).then(c => c.default || c)
export const LazyBeliefTree = import('../../components/BeliefTree.vue' /* webpackChunkName: "components/belief-tree" */).then(c => c.default || c)
export const LazyD3Tree = import('../../components/D3Tree.vue' /* webpackChunkName: "components/d3tree" */).then(c => c.default || c)
export const LazyDonutChart = import('../../components/DonutChart.vue' /* webpackChunkName: "components/donut-chart" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyNodeDetails = import('../../components/NodeDetails.vue' /* webpackChunkName: "components/node-details" */).then(c => c.default || c)
export const LazyRootNode = import('../../components/RootNode.vue' /* webpackChunkName: "components/root-node" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => c.default || c)

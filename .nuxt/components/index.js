export { default as AddBelief } from '../../components/AddBelief.vue'
export { default as AppBackground } from '../../components/AppBackground.vue'
export { default as AppBar } from '../../components/AppBar.vue'
export { default as BaseWidget } from '../../components/BaseWidget.vue'
export { default as BeliefDetails } from '../../components/BeliefDetails.vue'
export { default as BeliefNode } from '../../components/BeliefNode.vue'
export { default as D3Tree } from '../../components/D3Tree.vue'
export { default as DonutChart } from '../../components/DonutChart.vue'
export { default as FileInput } from '../../components/FileInput.vue'
export { default as IconRoundedSquare } from '../../components/IconRoundedSquare.vue'

export const LazyAddBelief = import('../../components/AddBelief.vue' /* webpackChunkName: "components/add-belief" */).then(c => c.default || c)
export const LazyAppBackground = import('../../components/AppBackground.vue' /* webpackChunkName: "components/app-background" */).then(c => c.default || c)
export const LazyAppBar = import('../../components/AppBar.vue' /* webpackChunkName: "components/app-bar" */).then(c => c.default || c)
export const LazyBaseWidget = import('../../components/BaseWidget.vue' /* webpackChunkName: "components/base-widget" */).then(c => c.default || c)
export const LazyBeliefDetails = import('../../components/BeliefDetails.vue' /* webpackChunkName: "components/belief-details" */).then(c => c.default || c)
export const LazyBeliefNode = import('../../components/BeliefNode.vue' /* webpackChunkName: "components/belief-node" */).then(c => c.default || c)
export const LazyD3Tree = import('../../components/D3Tree.vue' /* webpackChunkName: "components/d3tree" */).then(c => c.default || c)
export const LazyDonutChart = import('../../components/DonutChart.vue' /* webpackChunkName: "components/donut-chart" */).then(c => c.default || c)
export const LazyFileInput = import('../../components/FileInput.vue' /* webpackChunkName: "components/file-input" */).then(c => c.default || c)
export const LazyIconRoundedSquare = import('../../components/IconRoundedSquare.vue' /* webpackChunkName: "components/icon-rounded-square" */).then(c => c.default || c)

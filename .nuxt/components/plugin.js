import Vue from 'vue'

const components = {
  AddNode: () => import('../../components/AddNode.vue' /* webpackChunkName: "components/add-node" */).then(c => c.default || c),
  BeliefDetails: () => import('../../components/BeliefDetails.vue' /* webpackChunkName: "components/belief-details" */).then(c => c.default || c),
  BeliefNode: () => import('../../components/BeliefNode.vue' /* webpackChunkName: "components/belief-node" */).then(c => c.default || c),
  BeliefTree: () => import('../../components/BeliefTree.vue' /* webpackChunkName: "components/belief-tree" */).then(c => c.default || c),
  DonutChart: () => import('../../components/DonutChart.vue' /* webpackChunkName: "components/donut-chart" */).then(c => c.default || c),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  VuetifyLogo: () => import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

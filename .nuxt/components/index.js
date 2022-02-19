export { default as AddBelief } from '../../components/AddBelief.vue'
export { default as AppBackground } from '../../components/AppBackground.vue'
export { default as AppBar } from '../../components/AppBar.vue'
export { default as BaseWidget } from '../../components/BaseWidget.vue'
export { default as BeliefDetails } from '../../components/BeliefDetails.vue'
export { default as BeliefNode } from '../../components/BeliefNode.vue'
export { default as DonutChart } from '../../components/DonutChart.vue'
export { default as FileInput } from '../../components/FileInput.vue'
export { default as IconRoundedSquare } from '../../components/IconRoundedSquare.vue'
export { default as TheVerticalD3Tree } from '../../components/TheVerticalD3Tree.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

import { mount } from '@vue/test-utils'
import BeliefNode from '@/components/BeliefNode.vue'

describe('BeliefNode', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BeliefNode)
    expect(wrapper.vm).toBeTruthy()
  })
})

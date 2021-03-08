<template>
  <nuxt />
</template>

<script>
import FileInput from '~/components/FileInput.vue'

export default {
  components: {
    FileInput,
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Why do you see the world in the way you do?'
    }
  }
}
</script>

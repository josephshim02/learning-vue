export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    },

    processing: {
      type: Boolean,
      default: false
    }
  },
  template: `
            <button 
            :class="{
              'px-4 py-2 text-white rounded': true,
              'bg-blue-500 hover:bg-blue-600': type === 'primary',
              'bg-gray-500 text-white hover:bg-gray-600': type === 'secondary',
              'is-loading': processing
            }"
            :disabled="processing">
              <slot />
            </button>
          `,
  mounted() {
    console.log('button mounted')
  }
}
export default {
          template: `
            <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" :disabled="processing">
              <slot />
            </button>
          `,
          mounted(){
            console.log('button mounted')
          },
          data () {
            return {
              processing: false
            }
          },
        }
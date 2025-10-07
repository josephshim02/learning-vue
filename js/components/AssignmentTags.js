export default {
  template: `
  <div class="flex gap-2">
      <button 
        @click="this.$emit('change', tag)"
        v-for="tag in tags" 
        :key="tag" 
        class="border rounded px-1 py-px"
        :class="{ 
          'border-blue-500 text-blue-500': currentTag === tag
        }"
      >
        {{ tag }}
      </button>
    </div>`,
    computed: {
      tags() {
        return ['all', ...new Set(this.initialTags)];
      },
    },
    props: {
      initialTags: Array,
      currentTag: String
    }
}
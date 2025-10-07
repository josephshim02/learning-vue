import Assignment from "./Assignment";

export default {
  components: { Assignment },
  template: `
  <section v-show="assignments.length">
    <h2 class="font-bold mb-2">
      {{title}}
      <span>({{ assignments.length }})</span>
    </h2>
    <div class="flex gap-2">
      <button 
        @click="currentTag = tag"
        v-for="tag in tags" 
        :key="tag" 
        class="border rounded px-1 py-px"
        :class="{ 
          'border-blue-500 text-blue-500': currentTag === tag
        }"
      >
        {{ tag }}
      </button>
    </div>
    <ul class="border border-gray-500 divide-y divide-gray-500 mt-6">
      <assignment v-for="assignment in filteredAssignments" :key="assignment.id" :assignment="assignment"/>
    </ul>
  </section>
  `,
  props: {
    assignments: Array,
    title: String
  },
  computed: {
    tags() {
      return ['all', ...new Set(this.assignments.map(a => a.tag))];
    },
    filteredAssignments() {
      if (this.currentTag === 'all') {
        return this.assignments;
      }
      return this.assignments.filter(a => a.tag === this.currentTag);
    }
  },
  data() {
    return {
      currentTag: 'all'
    };
  }
}
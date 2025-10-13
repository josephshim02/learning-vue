import Assignment from "./Assignment";
import AssignmentTags from "./AssignmentTags";
import Panel from "./Panel";
export default {
  components: { Assignment, AssignmentTags, Panel },
  template: `
  <Panel v-show="assignments.length" class="w-60">
  <div class="flex justify-between items-start">
    <h2 class="font-bold mb-2">
      {{title}}
      <span>({{ assignments.length }})</span>
    </h2>
    <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
  </div>
    <assignment-tags 
      :initial-tags="assignments.map(a => a.tag)"
      v-model:currentTag="currentTag"
    />
    <ul class="border border-gray-500 divide-y divide-gray-500 mt-6">
      <assignment 
        v-for="assignment in filteredAssignments" 
        :key="assignment.id" 
        :assignment="assignment"
      />
    </ul>
    <slot />
    <template v-slot:footer> My footer goes here</template>
  </Panel>
  `,
  props: {
    assignments: Array,
    title: String,
    canToggle: {type: Boolean, default: false}
  },
  computed: {
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
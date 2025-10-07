import Assignment from "./Assignment";

export default {
  components: { Assignment },
  template: `
  <section v-show="assignments.length">
    <h2 class="font-bold mb-2">{{title}}</h2>
    <ul class="border border-gray-500 divide-y divide-gray-500">
      <assignment v-for="assignment in assignments" :key="assignment.id" :assignment="assignment"/>
    </ul>
  </section>
  `,
  props: {
    assignments: Array,
    title: String
  }
}
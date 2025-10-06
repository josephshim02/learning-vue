import AssignmentList from "./AssignmentList";

export default {
  components: { AssignmentList },
  template:
  `
  <section class="space-y-6">
    <assignmentList :assignments="filters.inProgress" title="In Progress"/>
    <assignmentList :assignments="filters.completed" title="Completed"/>
  </section>
  `,
  data() {
    return {
      assignments: [
        { name: 'Assignment 1', completed: false, id: 1 },
        { name: 'Assignment 2', completed: false, id: 2 },
        { name: 'Assignment 3', completed: false, id: 3 }
      ]
    };
  },
  computed:{
   
    filters () {
      return {
        completed: this.assignments.filter(a => a.completed),
        inProgress: this.assignments.filter(a => !a.completed)
      }
    }
  }
}
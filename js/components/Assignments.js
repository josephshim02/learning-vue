import AssignmentList from "./AssignmentList";
import AssignmentCreate from "./AssignmentCreate";
export default {
  components: { AssignmentList, AssignmentCreate },
  template:
  `
  <section class="space-y-6">
    <assignmentList :assignments="filters.inProgress" title="In Progress"/>
    <assignmentList :assignments="filters.completed" title="Completed"/>
    <assignmentCreate @add="add"></assignmentCreate>
  </section>
  `,
  data() {
    return {
      assignments: [
        { name: 'Assignment 1', completed: false, id: 1 },
        { name: 'Assignment 2', completed: false, id: 2 },
        { name: 'Assignment 3000', completed: false, id: 3 }
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
  },
  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        completed: false,
        id: this.assignments.length + 1
      });
    }
  }
}
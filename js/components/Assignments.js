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
      assignments: []
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
  created () {
    fetch('http://localhost:3001/assignments')
      .then(res => res.json())
      .then(data => {
        this.assignments = data;
      });
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
import AssignmentList from "./AssignmentList";

export default {
  components: { AssignmentList },
  template:
  `
  <section class="space-y-6">
    <assignmentList :assignments="filters.inProgress" title="In Progress"/>
    <assignmentList :assignments="filters.completed" title="Completed"/>
    <form @submit.prevent="add">
      <div class="border border-gray-600 text-black">
        <input v-model="newAssignment" placeholder="New Assignment" class="p-2"/>
        <button type="submit" class="bg-white p-2 border-l">Add</button>
      </div>
    </form>   
  </section>
  `,
  data() {
    return {
      assignments: [
        { name: 'Assignment 1', completed: false, id: 1 },
        { name: 'Assignment 2', completed: false, id: 2 },
        { name: 'Assignment 3000', completed: false, id: 3 }
      ],
      newAssignment: ''
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
    add() {
      this.assignments.push({
        name: this.newAssignment,
        completed: false,
        id: this.assignments.length + 1
      });
      this.newAssignment = '';
    }
  }
}
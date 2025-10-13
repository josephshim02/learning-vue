import AssignmentList from "./AssignmentList";
import AssignmentCreate from "./AssignmentCreate";
export default {
  components: { AssignmentList, AssignmentCreate },
  template:
  `
  <section class="flex gap-8 ">
    <assignmentList :assignments="filters.inProgress" title="In Progress">
      <assignmentCreate @add="add"></assignmentCreate>
    </assignmentList>
    <assignmentList 
      v-show="show"
      :assignments="filters.completed" 
      title="Completed" 
      can-toggle 
      @toggle="show = !show"
    >
    
    </assignmentList>
  </section>
  `,
  data() {
    return {
      assignments: [],
      show: true
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
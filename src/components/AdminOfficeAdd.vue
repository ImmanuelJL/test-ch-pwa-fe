<template>
  <div id="container">
    <header>
     <h1> Add Order : </h1>
   </header>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label class="form-label">Status</label>
        <select class="form-control" v-model="status">
          <option selected value="">Choose</option>
          <option selected value="active">Active</option>
          <option selected value="inactive">In-Active</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <textarea class="form-control" v-model="name" />
      </div>
      <button :class="activeClass" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      status: "",
      name: "",
      activeClass: 'btn btn-primary'
    }
  },
  async mounted() {
    //
  },
  created() {
    //
  },
  methods: {
    submitForm() {
      let self = this;
      
      axios.post('http://127.0.0.1:8081/api/v1/restaurant', {
        status: this.status,
        name: this.name
      }).then(response => {
        // console.log(response);
        
        self.$router.push('/admin-office');
      }).catch(error => {
        console.log(error)
        this.response = 'Error: ' + error.response
      })
    }
  }
}
</script>

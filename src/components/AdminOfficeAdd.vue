<template>
  <div id="container">
    <header>
     <h1> Add Order : </h1>
   </header>
    <form @submit.prevent="submitForm">
      <div>
        <label for="id">Status:</label><br>
        <select v-model="status">
          <option selected value="">Choose</option>
          <option selected value="active">Active</option>
          <option selected value="inactive">In-Active</option>
        </select>
      </div>
      <div>
        <label for="id">Name:</label><br>
        <input id="name" type="name" v-model="name" required/>
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
      activeClass: 'active'
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

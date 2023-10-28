<template>
  <div id="container">
    <header>
     <h1> Update Order : </h1>
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
      &nbsp;&nbsp;&nbsp;<button :class="activeClass" type="button" @click="deleteRestaurant">Delete</button>
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
    try {
      const response = await axios.get('http://127.0.0.1:8081/api/v1/restaurant/' + this.$route.params.id)

      this.status = response.data.data[0].status
      this.name = response.data.data[0].name
    } catch(err) {
      console.log(err)
    }
  },
  created() {
    //
  },
  methods: {
    submitForm() {
      let self = this;
      
      axios.put('http://127.0.0.1:8081/api/v1/restaurant/' + this.$route.params.id, {
        status: this.status,
        name: this.name
      }).then(response => {
        // console.log(response);
        
        self.$router.push('/admin-office');
      }).catch(error => {
        console.log(error)
        this.response = 'Error: ' + error.response
      })
    },
    deleteRestaurant() {
      let self = this;
      
      axios.delete('http://127.0.0.1:8081/api/v1/restaurant/' + this.$route.params.id).then(response => {
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

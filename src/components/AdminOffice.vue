<template>
  <div id="container">
   <header>
     <h1> List Restaurant : </h1>
   </header>
   <div>
     <button type="button" @click="addRestaurant">Add</button>
   </div>
   <div class="list">
     <ul v-for="restaurant in restaurants" :key="restaurant.id" style="list-style: none">
         <li>
            <router-link :to="{ name: 'AdminOfficeUpdate', params: { id: restaurant.id } }">
              Name: {{ restaurant.name }} - {{ restaurant.status }}
            </router-link>
        </li>
     </ul>
   </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      restaurants: []
    }
  },
  created() {
    this.getAllData()
  },
  methods: {
    getAllData() {
      axios.get('http://127.0.0.1:8081/api/v1/restaurant')
      .then((response) => {
        this.restaurants = response.data.data
        // console.log(response.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
    },
    addRestaurant() {
      this.$router.push('/admin-office-add');
    }
  }
}
</script>

<style scoped>
.list {
    margin-left: -50px;
}
</style>
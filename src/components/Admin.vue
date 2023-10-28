<template>
  <div id="container">
   <header>
     <h1> List Order : </h1>
   </header>
   <div class="list">
     <ul class="list-group" v-for="order in orders" :key="order.id" style="list-style: none">
         <li class="list-group-item">
            <router-link :to="{ name: 'AdminUpdate', params: { id: order.id } }">
              Status: {{ order.status }} - Order ID: {{ order.id }}<br>
            </router-link>
            Remark: {{ order.remark }}
        </li>
     </ul>
   </div>
  </div>
</template>

<script>
import update from '../mixins/update'
import axios from 'axios'

export default {
  data() {
    return {
      orders: []
    }
  },
  mixins: [update],
  created() {
    this.getAllData()
  },
  methods: {
    getAllData() {
      axios.get('http://127.0.0.1:8081/api/v1/order')
      .then((response) => {
        this.orders = response.data.data
        // console.log(response.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.list {
    margin-left: -50px;
}
</style>
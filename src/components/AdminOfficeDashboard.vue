<template>
  <div id="container">
   <header>
     <h1> Total Order Menu : </h1>
   </header>
   <div class="list">
     <ul v-for="data in dataTransaction" style="list-style: none">
         <li>
            {{ data.sqlSumTrx }}
        </li>
     </ul>
   </div>

   <header>
     <h1> Total Income Per-Restaurant : </h1>
   </header>
   <div class="list">
     <ul v-for="data in dataPerRestaurant" style="list-style: none">
         <li>
            {{ data.name }} - IDR {{ data.sqlSumTrxPerRestaurant }}
        </li>
     </ul>
   </div>

   <header>
     <h1> Most Order Menu : </h1>
   </header>
   <div class="list">
     <ul v-for="data in dataMenu" style="list-style: none">
         <li>
            {{ data.name }} - {{ data.sqlSumTrxDetail }}
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
      dataTransaction: [],
      dataPerRestaurant: [],
      dataMenu: []
    }
  },
  created() {
    this.getAllData()
  },
  methods: {
    getAllData() {
      axios.get('http://127.0.0.1:8081/api/v1/dashboard')
      .then((response) => {
        this.dataTransaction = response.data.dataTransaction
        this.dataPerRestaurant = response.data.dataPerRestaurant
        this.dataMenu = response.data.dataMenu
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
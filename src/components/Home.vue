<template>
  <div id="app">
    <header>
     <h1> Form Order : </h1>
    </header>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label class="form-label">Restaurant</label>
        <select class="form-control" v-model="restaurantId">
          <option selected value="">Choose</option>
          <option v-for="result in resultsRestaurantId" :value="result.id">{{ result.name }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Patient</label>
        <select class="form-control" v-model="patientId">
          <option selected value="">Choose</option>
          <option v-for="result in resultsPatientId" :value="result.id">{{ result.nama_pasien }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Menu</label>
        <select class="form-control" v-model="menuId">
          <option selected value="">Choose</option>
          <option v-for="result in resultsMenuId" :value="result.id">{{ result.name }}</option>
        </select>
      </div>
      <div class="mb-3">
        <button :class="activeClass" type="submit">Order</button>
      </div>
      <div class="mb-3">
        <h5>Data retrieved from server:</h5>
        <p v-if="success"> {{ success }}</p>
        <pre>{{ response }}</pre>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      restaurantId: "",
      resultsRestaurantId: [],
      patientId: "",
      resultsPatientId: [],
      menuId: "",
      resultsMenuId: [],
      detailOrder: [],
      response: '',
      success: '',
      activeClass: 'btn btn-primary'
    }
  },
  async mounted() {
    try {
      const responseRestaurant = await axios.get('http://127.0.0.1:8081/api/v1/restaurant')
      
      this.resultsRestaurantId = responseRestaurant.data.data

      const responsePatient = await axios.get('http://127.0.0.1:8081/api/v1/patient')
      
      this.resultsPatientId = responsePatient.data.data

      const responseMenu = await axios.get('http://127.0.0.1:8081/api/v1/menu')
      
      this.resultsMenuId = responseMenu.data.data
    } catch(err) {
      console.log(err)
    }
  },
  methods: {
    submitForm() {
      let arrDetailOrder = [];

      let tempDetailOrder = {
        id: this.menuId,
        amount: 15000
      }

      arrDetailOrder.push(tempDetailOrder)

      this.detailOrder = arrDetailOrder

      axios.post('http://127.0.0.1:8081/api/v1/order', {
        restaurantId: this.restaurantId,
        patientId: this.patientId,
        detailOrder: this.detailOrder
      }).then(response => {
        console.log(response);
        this.success = 'Data saved successfully'

        if ("serviceWorker" in navigator) {
          navigator.serviceWorker
            .register("/service-worker.js?v=0", { scope: "/#/admin" })
            .then((registration) => {
                // console.log("Registration succeeded.")
                registration.update()
            })
            .catch((error) => {
              console.error(`Registration failed with ${error}`)
            });
        }
      }).catch(error => {
        console.log(error)
        this.response = 'Error: ' + error.response
      })

      this.restaurantId = ""
      this.patientId = ""
      this.menuId = ""
    }
  }
}
</script>

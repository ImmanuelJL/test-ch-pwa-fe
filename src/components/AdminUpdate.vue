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
          <option selected value="new">New</option>
          <option selected value="process">Process</option>
          <option selected value="done">Done</option>
          <option selected value="cancel">Cancel</option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Remark</label>
        <textarea class="form-control" v-model="remark" />
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
      trxHeaderId: 0,
      status: "",
      remark: "",
      activeClass: 'btn btn-primary'
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://127.0.0.1:8081/api/v1/order/' + this.$route.params.id)
      
      this.trxHeaderId = this.$route.params.id
      this.status = response.data.data[0].status
      this.remark = response.data.data[0].remark
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

      axios.put('http://127.0.0.1:8081/api/v1/order', {
        trxHeaderId: this.trxHeaderId,
        status: this.status,
        remark: this.remark
      }).then(response => {
        // console.log(response);
        
        self.$router.push('/admin');
      }).catch(error => {
        console.log(error)
        this.response = 'Error: ' + error.response
      })
    }
  }
}
</script>

<template>
  <div>
    <router-link :to="{ name: 'Create' }" class="button is-success mt-5"
      >Add New</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Trainer First Name</th>
          <th>Trainer Last Name</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.trainerID">
          <td>{{ item.trainerFirstName }}</td>
          <td>{{ item.trainerLastName }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.trainerID } }"
              class="button is-info is-small"
              >Edit</router-link
            >

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
<script>
// import axios
import axios from "axios";
  
export default {
  name: "ProductList",
  data() {
    return {
      items: [],
    };
  },
  
  created() {
    this.getTrainer();
  },
  
  methods: {
    // Get All Products
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:3000/trainer");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  
  },
};
</script>
  
<style>
</style>
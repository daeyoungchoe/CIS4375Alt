<template>
  <div>
<div>
    <div class="field">
      <label class="label">Trainer First Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Trainer First Name"
          v-model="tFirstName"
        />
      </div>

    </div>
      <div class="field">
      <label class="label">Trainer Last Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Trainer Last Name"
          v-model="tLastName"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Phone</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Phone"
          v-model="tPhone"
        />
      </div>

    </div>
        <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Email"
          v-model="tEmail"
        />
      </div>

    </div>
        <div class="field">
      <label class="label">Address</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Address"
          v-model="tAddress"
        />
      </div>
    </div>

  </div>
    <div class="control">
      <button class="button is-success" @click="updateTrainer">UPDATE</button>
    </div>
  </div>
</template>
  
<script>
// import axios
import axios from "axios";
  
export default {
  name: "EditTrainer",
  data() {
    return {
      tFirstName: "",
      tLastName: "",
      tPhone: "",
      tEmail: "",
      tAddress: "",
    };
  },
  created: function () {
    this.getTrainerById();
  },
  methods: {

    // Update trainer
    async updateTrainer() {
      try {
        await axios.put(
          `http://localhost:3000/products/${this.$route.params.id}`,
          {
          trainerFirstName: this.tFirstName,
          trainerLastName: this.tLastName,
          trainerPhone: this.tPhone,
          trainerEmail: this.tEmail,
          trainerAddress: this.tAddress,
          }
        );
        this.tFirstName = "";
        this.tLastName = "";
        this.tPhone = "";
        this.tEmail = "";
        this.tAddress = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
  
<style>
</style>
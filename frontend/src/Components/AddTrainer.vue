<template>
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
  
    <div class="control">
      <button class="button is-success" @click="saveTrainer">SAVE</button>
    </div>
  </div>
</template>
  
<script>
// import axios
import axios from "axios";
  
export default {
  name: "AddTrainer",
  data() {
    return {
      tFirstName: "",
      tLastName: "",
      tPhone: "",
      tEmail: "",
      tAddress: "",
    };
  },
  methods: {
    // Create New Trainer
    async saveTrainer() {
      try {
        await axios.post("http://localhost:3000/trainers", {
          trainerFirstName: this.tFirstName,
          trainerLastName: this.tLastName,
          trainerPhone: this.tPhone,
          trainerEmail: this.tEmail,
          trainerAddress: this.tAddress,
        });
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
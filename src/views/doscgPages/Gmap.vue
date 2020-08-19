<template>
  <div>
    <h1>Google Map</h1>
    <div class="row">
      <div class="form-group col-6">
        <label for="exampleInputEmail1">Form</label>
        <input type="text" class="form-control" v-model="form" />
      </div>
      <div class="form-group col-6">
        <label for="exampleInputEmail1">Form</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="to" />

          <div class="input-group-append">
            <button type="button" class="btn btn-primary" @click="getData">
              Go
            </button>
          </div>
        </div>
      </div>
      <div class="col-12">
        <iframe
          width="90%"
          height="250%"
          frameborder="0"
          style="border:0"
          :src="embed"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
import * as DOSCGService from "../../../service/DOSCG";
export default {
  data() {
    return {
      embed: "",
      form: "scg",
      to: "centralworld",
    };
  },
  methods: {
    async getData() {
      let param = {
        form: this.form,
        to: this.to,
      };
      if (!this.form || !this.to) {
        alert("กรุณากรอกข้อมูล");
      }
      try {
        let res = await DOSCGService.getGmap(param);
        this.embed = res.data.url;
        debugger;
      } catch (error) {
        alert(error);
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style></style>

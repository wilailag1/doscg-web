<template>
  <div>
    <h1>FindXYZ</h1>
    <div class="row">
      <div class="form-group col-12">
        <h4>input</h4>
        <h4>{{ input }}</h4>
      </div>
      <div class="form-group col-12">
        <h4>output</h4>
        <h4 v-if="outPut">{{ outPut }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import * as DOSService from "../../../service/DOSCG";
export default {
  data() {
    return {
      input: ["x", "y", 5, 9, 15, 23, "z"],
      outPut: [],
    };
  },
  methods: {
    async getData() {
      let param = {
        input: this.input,
      };
      try {
        let res = await DOSService.findXyz(param);
        debugger;
        this.outPut = res.data;
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

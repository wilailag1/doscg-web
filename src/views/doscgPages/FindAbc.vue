<template>
  <div>
    <h1>FindAbc</h1>
    <div></div>
    <div class="row">
      <div class="form-group col-4">
        <label for="exampleInputEmail1">A</label>
        <input type="number" class="form-control" v-model="a" />
      </div>
      <div class="form-group col-4">
        <label for="exampleInputEmail1">A+B</label>
        <input type="number" class="form-control" v-model="ab" />
      </div>
      <div class="form-group col-4">
        <label for="exampleInputEmail1">A+C</label>
        <input type="number" class="form-control" v-model="ac" />
      </div>
    </div>
    <div class="row" v-if="b && c">
      <div class="form-group col-6">
        <label for="exampleInputEmail1">Ans B</label>
        <input type="number" class="form-control" v-model="b" disabled />
      </div>
      <div class="form-group col-6">
        <label for="exampleInputEmail1">Ans C</label>
        <input type="number" class="form-control" v-model="c" disabled />
      </div>
    </div>

    <button class="btn btn-primary" @click="getData">Calculate</button>
  </div>
</template>

<script>
import * as DOSCG from "../../../service/DOSCG";
export default {
  data() {
    return {
      a: 21,
      ab: 23,
      ac: -21,
      b: "",
      c: "",
    };
  },
  methods: {
    async getData() {
      let param = {
        a: parseInt(this.a),
        ans_ab: parseInt(this.ab),
        ans_ac: parseInt(this.ac),
      };
      try {
        let res = await DOSCG.findAbc(param);
        this.b = res.data.B;
        this.c = res.data.C;
        debugger;
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style></style>

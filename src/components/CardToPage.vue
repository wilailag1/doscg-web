<template>
  <div class="card shadow" @click="goto()">
    <div class="card-body">
      <h1><i :class="icon"></i></h1>
    </div>
    <div class="card-body">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "icon", "patch"],
  methods: {
    goto(patch) {
      this.$router.push(`/doscg/${this.patch}`);
    },
  },
};
</script>

<style></style>

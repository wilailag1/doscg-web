<template>
  <div class="pt-3 pb-3 bg-primary">
    <div
      class="container bg-primary d-flex justify-content-start align-items-left ml-0"
    >
      <!-- {{ path }} -->
      <div class="d-flex align-items-left" v-if="path">
        <i
          @click="goBacK"
          style="font-size: 1.3rem;"
          class="fas fa-arrow-left text-white mr-2"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    path() {
      if (this.$route.path === "/") {
        this.$router.push("/doscg");
        return false;
      }
      if (this.$route.path === "/doscg") {
        return false;
      }
      return true;
    },
  },
  methods: {
    goBacK() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>

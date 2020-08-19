<template>
  <div>
    <h1>doscg</h1>
    <div class="row">
      <div class="col-3" v-for="c in listPage" :key="c.patch">
        <Card :title="c.name" :icon="c.icon" :patch="c.patch"> </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/CardToPage.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      listPage: [
        { patch: "findabc", name: "FindAbc", icon: "fas fa-microchip" },
        { patch: "findxyz", name: "FindXyz", icon: "fas fa-laptop-code" },
        {
          patch: "googlemap",
          name: "GoogleMap",
          icon: "fas fa-map-marked-alt",
        },
        { patch: "linebot", name: "LineBot", icon: "fas fa-robot" },
      ],
    };
  },
};
</script>

<style></style>

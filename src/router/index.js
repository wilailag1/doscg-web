import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DOSCG from "../views/DOSCG.vue";
import FindAbcPage from "../views/doscgPages/FindAbc.vue";
import FIndXyzPage from "../views/doscgPages/FindXyz.vue";
import GmapPage from "../views/doscgPages/Gmap.vue";
import LineBot from "../views/doscgPages/LineBot.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/doscg",
    name: "doscg",
    component: DOSCG,
  },
  {
    path: "/doscg/findabc",
    name: "findabc",
    component: FindAbcPage,
  },
  {
    path: "/doscg/findxyz",
    name: "findxyz",
    component: FIndXyzPage,
  },
  {
    path: "/doscg/googlemap",
    name: "googlemap",
    component: GmapPage,
  },
  {
    path: "/doscg/linebot",
    name: "linebot",
    component: LineBot,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

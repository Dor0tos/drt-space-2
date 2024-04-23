import "./assets/main.css";

import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import App from "./App.vue";

import MainView from "@/views/Main.vue";
import NotFoundView from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainView,
  },
  {
    path: "/f",
    name: "nf",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");

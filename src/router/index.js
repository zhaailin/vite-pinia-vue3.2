import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../views/HelloWorld.vue";
import Pinia from "../views/Pinia.vue";
import Text from "../views/Text.vue";
import Sheep from "../views/Sheep.vue";
const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      redirect: "/text",
      component: HelloWorld,
      hidden: true,
      children: [
        {
          path: "/pinia",
          name: "pinia",
          component: Pinia,
        },
        {
          path: "/text",
          name: "text",
          component: Text,
        },
        {
          path: "/sheep",
          name: "sheep",
          component: Sheep,
        },
      ],
    },
  ],
});

export default router;

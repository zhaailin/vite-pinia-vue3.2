import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../views/HelloWorld.vue";
import Pinia from "../views/Pinia.vue";
import Text from "../views/Text.vue";
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
          component: Pinia,
        },
        {
          path: "/text",
          component: Text,
        },
      ],
    },
  ],
});

export default router;

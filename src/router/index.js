import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import Gallery from "@/pages/Gallery.vue";
import Projects from "@/pages/Projects.vue";
import Certificates from "@/pages/Certificates.vue";
import Contact from "@/pages/Contact.vue";

const routes = [
  { path: "/home", name: "Home", component: Home },
  { path: "/gallery", name: "Gallery", component: Gallery },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/certificates", name: "Certificates", component: Certificates },
  { path: "/contact", name: "Contact", component: Contact },
  {
    path: "/projects/:slug",
    name: "ProjectDetails",
    component: () => import("@/pages/ProjectDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

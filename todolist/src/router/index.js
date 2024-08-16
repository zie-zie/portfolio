import { createRouter, createWebHistory } from 'vue-router';

import AddTodoList from '/src/components/AddTodoList.vue';

const routes = [

  {
    path: '/src/components/AddTodoList.vue',
    name: 'AddTodoList',
    component: AddTodoList
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
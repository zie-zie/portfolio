import { createRouter, createWebHistory } from 'vue-router';

import AddTodoList from '/src/components/AddTodoList.vue';
// import EditItem from '/src/components/EditItem.vue';
const routes = [

  {
    path: '/src/components/AddTodoList.vue',
    name: 'AddTodoList',
    component: AddTodoList
  },
  // {
  //   path: '/src/components/EditItemItem.vue',
  //   name: 'EditItem',
  //   component: EditItem
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
import { defineStore } from 'pinia';

export const useLoginStore = defineStore('LoginStore', {
  state: () => ({
    name: "ali",
    Pass: "12345",
  }),
});

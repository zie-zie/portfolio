<template>
  <div>
    <p v-if="list" :key="list._id" class="list">
      {{ list.description }}
    </p>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'detailsList',
  props: ['idnumber'],
  data() {
    return {
      list: null,
    };
  },
  watch: {
    idnumber: {
      immediate: true,
      handler(newVal) {
        this.fetchDetails(newVal);
      },
    },
  },
  methods: {
    fetchDetails(id) {
      fetch('http://localhost:3000/api/v1/todo')
        .then((res) => res.json())
        .then((data) => {
          this.list = data.todos.find(item => item._id === id);
        })
        .catch((err) => console.error('Error fetching data:', err));
    },
  },
};
</script>
<style>

</style>
<template>
  <div>
    <p class="title">{{ title }}</p>
    <table class="table">
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="itemKey in Object.keys(datainfo)" :key="itemKey">
          <td>{{ itemKey }}</td>
          <td>{{ datainfo[itemKey] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'API INFO',
      datainfo: {},
    };
  },
  mounted() {
    fetch('http://localhost:3000/api/info')
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched data:', data);
        this.datainfo = data;
      })
      .catch((err) => console.error('Error fetching data:', err));
  },
};
</script>

<style>
.title {
  color: rgb(199, 141, 16);
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 20px;
}

.table {
  width: 600px;
  border-collapse: collapse;
  margin: auto;
}

.table th, .table td {
  border: 1px solid black;
  padding: 10px;
  text-align: left;
}

.table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.table tr:hover {
  background-color: #e0e0e0;
}
</style>
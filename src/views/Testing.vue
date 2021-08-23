<template>
  <DataTable />
  <router-link to="/">Home</router-link>
</template>

<script>
import DataTable from '../components/DataTable.vue'

export default {
  components: {
    DataTable
  }
}
</script>

<style>
.container {
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
</style>
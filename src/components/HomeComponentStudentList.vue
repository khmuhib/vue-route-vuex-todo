<script>
export default {
  name: 'HomeView',
  data () {
    return {
      person: [
        {"name": "muhib", "age": 20, "scl": "adamjee", "ofc": "gulsan"},
        {"name": "foysal", "age": 23, "scl": "romij", "ofc": "badda"},
      ]
    }
  }
}

</script>

<template>
  <h2>This Home view page</h2>
  <p v-for="(item, index) in person" :key="index">{{item.age}}</p>
</template>

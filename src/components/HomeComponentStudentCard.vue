<script>
export default {
  name: 'HomeComponentStudentCard',  
  data () {
    return {
      person: [
        {"name": "muhib", "age": 20, "scl": "adamjee", "ofc": "gulsan",},
        {"name": "foysal", "age": 23, "scl": "romij", "ofc": "badda"},
        {"name": "foysal", "age": 23, "scl": "romij", "ofc": "badda"},
        {"name": "foysal", "age": 23, "scl": "romij", "ofc": "badda"},
        {"name": "foysal", "age": 23, "scl": "romij", "ofc": "badda"},
        {"name": "foysal", "age": 23, "scl": "romij", "ofc": "badda"},
        {"name": "foysal", "age": 23, "scl": "romij", "ofc": "badda"},
        {"name": "foysal", "age": 23, "scl": "romij", "ofc": "badda"},
        {"name": "foysal", "age": 23, "scl": "romij", "ofc": "badda"},
        {"name": "foysal", "age": 23, "scl": "romij", "ofc": "badda"},
        {"name": "foysal", "age": 23, "scl": "romij", "ofc": "badda"},
        {"name": "foysal", "age": 23, "scl": "romij", "ofc": "badda"},
      ]
    }
  },
}

</script>

<template>
  <h2>Student Card</h2>
  <div class="card_section_main">
    <div class="card" v-for="(item, index) in person" :key="index">
      <!-- <img src="./../assets/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise.jpg" alt=""> -->
      <h2>Name: {{item.name}}</h2>
      <h3>Age: {{item.age}}</h3>
      <h4>Job Location: {{item.ofc}}</h4>
    </div>
  </div>
</template>

<style scoped>


.card {
  background-color: white;
  width: 30%;
  text-align: center;
  padding: 20px 0px;
  border-radius: 10px;
  display: inline-block;
  margin: 20px;
  box-shadow: 0px 0px 10px 0px #ccc;

}

.card img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: block;
  margin: auto;
}

</style>
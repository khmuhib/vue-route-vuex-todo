<template>
  <h2 class="h2">this is todo view page</h2>
  <TodoComponent></TodoComponent>
</template>

<script>
import TodoComponent from '../components/TodoComponent.vue'

export default {
    name: 'TodoView',
    components: {
        TodoComponent
    }

}
</script>

<style>

.h2 {
    text-align: center;
}

</style>
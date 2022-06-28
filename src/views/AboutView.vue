<script>
export default {
  name: 'AboutView',

  computed: {
    bookList() {
      return this.$store.state.booklist;
    },
  }
}
</script>


<template>
  <div class="">
    <h2>This is an about view page</h2>

    {{bookList}}
  </div>
</template>

<style>

</style>


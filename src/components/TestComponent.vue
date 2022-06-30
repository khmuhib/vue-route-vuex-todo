<template>
  <h2>This is test component</h2>
    <p>{{ this.$store.state.book.count }}</p>
    <p>{{ this.$store.state.person.count }}</p>
</template>

<script>
export default {
    name: 'TestComponent',
};
</script>

<style>
</style>
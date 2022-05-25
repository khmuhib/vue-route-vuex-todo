<template>
  <h2>This is todo components</h2>
  <input type="text" placeholder="Enter item" v-model="bookName" />
  <button @click="addBook">Add</button>
  <p>{{ this.$store.state.count }}</p>
  <p>{{ bookName }}</p>
  <ul>
    <li v-for="(book,index) in booklist" :key="index">
      {{ book }} <button @click="removeBook(index)">Del</button>
    </li>
  </ul>
</template>

<script>
export default {
  // state
  data() {
    return {
      bookName: "",
    };
  },
  // actions
  methods: {
    addBook() {
      this.$store.dispatch("increment");
      console.warn(this.bookName);
      this.$store.dispatch("addBook", this.bookName);
    },

    removeBook(index) {
      this.$store.dispatch("removeBook", index)
    },
  },

  computed: {
    booklist() {
      return this.$store.state.booklist;
    },
  },
};
</script>

<style></style>

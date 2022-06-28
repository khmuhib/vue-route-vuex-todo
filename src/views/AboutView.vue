<script>
export default {
  name: 'AboutView',

  computed: {
    bookList() {
      return this.$store.state.booklist;
    },

    methods: {
      addBook() {
        //this.$store.dispatch("increment");
        this.$store.dispatch("addBook", this.bookName);
        console.log('dsadsa')
      },

      removeBook(index) {
        this.$store.dispatch("removeBook", index);
      },
    },
    },
}
</script>


<template>
  <div class="">
    <h2>This is an about view page</h2>

    <div>
      <input type="text" v-model="bookName" placeholder="Enter Book Name"> <button @click="addBook" >Add Book</button>
    </div>

    <ul>
      <li v-for="(book,index) in bookList" :key="index">
        {{bookList[index]}}
      </li>

    
    </ul>
  </div>
</template>

<style>

</style>


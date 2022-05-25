<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="main_menu">
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/todo">Todo</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<style>
* {
  margin: 0px;
  padding: 0px;
}


.main_menu {
  background-color: black;
  overflow: hidden;
}

.main_menu ul li {
  list-style: none;
  float: left;
}

.main_menu ul li a {
  text-decoration: none;
  padding: 20px 10px;
  display: block;
  color: aliceblue;
}

.main_menu ul li:hover a {
  background-color: red;
}
</style>

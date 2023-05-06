
<!--*** USE WITH FIREBASE ***-->
<!--<script src="../.eslintrc.js"></script>-->
<!--<template>-->
<!--  <AppHeader></AppHeader>-->
<!--<button @click="addEventTrip">Add Trip</button>-->
<!--  <div>{{}}</div>-->
<!--  <AppFooter></AppFooter>-->
<!--</template>-->
<!--<script>-->
<!--import AppHeader from "@/components/AppHeader.vue";-->
<!--import AppFooter from "@/components/AppFooter.vue";-->
<!--import {db} from "./firebase/firebase";-->
<!--import firebaseTripModel from "@/models/firebase/firebase-trip-model";-->
<!--import firebasePhotogroupModel from "@/models/firebase/firebase-photogroup-model";-->
<!--import firebasePhotoModel from "@/models/firebase/firebase-photo-model";-->
<!--</script>-->

<!--<style lang="scss">-->

<!--</style>-->


<!--*** USE WITH ROUTED PAGES AND W/O FIREBASE ***-->
<template>
  <nav>
    <router-link to="/">Home</router-link>|
    <router-link to="/trip-details">Trip Details</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: black;
    }
  }
}
</style>
<script setup>
//import AppHeader from "@/components/AppHeader.vue";
//import AppFooter from "@/components/AppFooter.vue";
</script>
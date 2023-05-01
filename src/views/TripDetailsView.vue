<template>
  <AppHeader/>

<div>Trip Details View</div>

  <AppFooter/>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "TripDetailsView.vue",
  components: {AppFooter, AppHeader}
}
</script>

<style scoped>

</style>
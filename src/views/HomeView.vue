<template>
  <AppHeader/>
  <!--  INSERT COMPONENT HERE-->
  <TripItemList/>
  <AppFooter/>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import TripItemList from "@/components/TripItemList.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: 'HomeView',
  components: {
    AppFooter,
    TripItemList,
    AppHeader,
  }
}
</script>

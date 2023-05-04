<template>
<AppHeader/>
      <!--  INSERT COMPONENT HERE-->
      <TripItemList/>
<AppFooter/>
</template>

<script>
import TripItemList from "@/components/TripItemList.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "MainPage",
  components: {AppFooter, AppHeader, TripItemList}
}
</script>

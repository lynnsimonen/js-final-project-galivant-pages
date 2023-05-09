<template>
  <AppHeader/>
  <!--  INSERT COMPONENT HERE-->
  <TripItemList></TripItemList>
  <PhotoGroupCard></PhotoGroupCard>
  <AppFooter/>
</template>

<script>
import TripItemList from "@/components/TripItemList.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import PhotoGroupCard from "@/components/PhotoGroupCard.vue";

export default {
  name: "MainPage",
  components: {PhotoGroupCard, AppFooter, AppHeader, TripItemList}
}
</script>

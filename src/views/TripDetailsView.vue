<template>
<AppHeader/>
  <!--  INSERT COMPONENT HERE-->
<TripDetails/>

  <AppFooter/>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import TripDetails from "@/components/TripDetails.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "TripDetailsView.vue",
  components: {AppHeader, TripDetails, AppFooter}
}
</script>
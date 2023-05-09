<template>
<AppHeader/>
  <!--  INSERT COMPONENT HERE-->
<PhotoGroupDetails/>

  <AppFooter/>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
import PhotoGroupDetails from "@/components/PhotoGroupDetails.vue";

export default {
  name: "PhotoGroupView.vue",
  components: {PhotoGroupDetails, AppHeader, AppFooter}
}
</script>
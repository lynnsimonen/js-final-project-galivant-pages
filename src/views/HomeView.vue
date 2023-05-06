<template>

<!--<MainPage></MainPage>-->

  <!--  INSERT COMPONENT HERE-->
<!--  <TripItemList/>-->

  <ATripItemDiv></ATripItemDiv>

</template>

<script>
// @ is an alias to /src
import ATripItemDiv from "@/components/accordianTrial/ATripItemDiv.vue";
//import MainPage from "@/components/MainPage.vue";

export default {
  name: 'HomeView',
  components: {
    //MainPage,
    ATripItemDiv,
  }
}
</script>

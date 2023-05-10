<template>

  <!--HERE IS THE COMPONENT AND BINDING-->
  <photo-group-card :photo-group="trip.photoGroup"></photo-group-card>

</template>

<script>
import PhotoGroupCard from "@/components/PhotoGroupCard.vue";

export default {
  name: "TripTabsDetails",
  components: {PhotoGroupCard},
  props: {
    trip: Object
  },
  data(){
    return{
      //photoGroup:[],
      photoGroup: Array,
    }
  },
}
</script>

<style lang="scss">

</style>
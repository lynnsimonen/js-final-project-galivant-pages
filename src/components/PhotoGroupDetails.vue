<template>
  <!-- TODO: DETAILS INSIDE PHOTOGROUP CARDS -->
<div>
  PHOTO GROUP DETAILS
  Item: {{photo}}
</div>


  <!--HERE IS THE COMPONENT AND BINDING-->
  <photos-card :photo="oneGroup"></photos-card>
  {{showTest}}

</template>

<script>
//-----------------------------------------------------------------------------------------------------------------------------
import PhotosCard from "@/components/PhotosCard.vue";

export default {
  name: "PhotoGroupDetails",
  components: {PhotosCard},
  props: {oneGroup: Object},
  data() {
    return {
      //photo: []
      photo: Array
    }
  },
  computed:{
    showTest(){
      console.log(this.oneGroup)
      console.log('this.photo: ', this.photo)
      return null
    }
  }
}


</script>

<style lang="scss">
//-------------------------------------------------------------------------------------------------------------------------------


</style>
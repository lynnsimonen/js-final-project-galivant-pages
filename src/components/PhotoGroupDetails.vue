<template>
  <!-- TODO: DETAILS INSIDE PHOTOGROUP CARDS -->
  <div class="image-galleries">
    <h3 class="gallery-titles">
      {{ oneGroup.groupTitle }}
    </h3>
    <!--HERE IS THE COMPONENT AND BINDING-->
    <photos-card :photos="oneGroup.photoArray"></photos-card>
  </div>
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
  computed: {
    showTest() {
      console.log(this.oneGroup)
      console.log('this.photo: ', this.photo)
      return null
    }
  }
}


</script>

<style lang="scss">
//-------------------------------------------------------------------------------------------------------------------------------
.image-galleries {
  background-color: #e6e6e6;
  margin: 10px;
  //border: #2c3e50 2px;
  //display: inline-block;
  //vertical-align: top;
 width: 100%

}
</style>
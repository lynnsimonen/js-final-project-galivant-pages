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
.gallery-titles {
  //font-family: 'Inter', sans-serif;
  //font-family: 'Pacifico', cursive;
  //font-family: 'Philosopher', sans-serif;
  //font-family: 'Josefin Sans', sans-serif;
  font-family: 'Sen', sans-serif;
  font-weight: bold;
  font-size: 28px;
  color: rgba(116, 116, 116);
  padding: 10px;
}
.image-galleries {
  padding-top: 15px;
  background-color: #e6e6e6;
  margin: 10px;
  width: 100%
}
</style>
<template>
  <!-- TODO: LIST OF PHOTOS CARDS & COVER PAGE (and add new photos button) -->


  <div class="gallery">
    <ul class="each-card"
        v-for="onePhoto in photos"
        :key="onePhoto.key"
        :onePhoto="onePhoto">
      <li>
        <photo-details-component :onePhoto="onePhoto"></photo-details-component>
      </li>
    </ul>
  </div>

</template>

<script>
import PhotoDetailsComponent from "@/components/PhotoDetailsComponent.vue";

console.log('this is PHOTOS CARD')
export default {
  name: "PhotosCard",
  components: {PhotoDetailsComponent},
  props: {photos: Array},
  data() {
    return {
      onePhoto: Object
    }
  },
  Computed: {
    showTest() {
      console.log(this.photo)
      console.log('this.onePhoto: ', this.onePhoto)
      return null
    }
  }
}
</script>

<style lang="scss">
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  text-align: center;
}
</style>
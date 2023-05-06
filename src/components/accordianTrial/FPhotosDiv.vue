<template>
  <g-photo-details :photo="photo"
                   :key="photo.photoFilePath"
                   v-for="photo in photos">
    <g-photo-details :photo="photo"></g-photo-details>
  </g-photo-details>
</template>

<script>
import GPhotoDetails from "@/components/accordianTrial/GPhotoDetails.vue";

export default {
  name: "FPhotosDiv",
  components: {GPhotoDetails},
  props: {
    photos: Array,
  },
  data() {
    return {
      photo: Object,
    }
  }
}
</script>

<style scoped>

</style>
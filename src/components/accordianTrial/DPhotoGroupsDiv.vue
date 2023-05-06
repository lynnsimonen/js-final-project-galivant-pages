<template>
  <div v-for="photoGroup in photoGroups"
       :photoGroup="photoGroup"
       :key="photoGroup.title"
  >
    <e-photo-group-details :photo-group="photoGroup"></e-photo-group-details>
  </div>
</template>

<script>
import EPhotoGroupDetails from "@/components/accordianTrial/EPhotoGroupDetails.vue";

export default {
  name: "DPhotoGroupsDiv",
  components: {EPhotoGroupDetails},
  props: {
    photoGroups: Array,
  },
  data() {
    return {
      photoGroup: Object,
    }
  }

}
</script>

<style scoped>

</style>
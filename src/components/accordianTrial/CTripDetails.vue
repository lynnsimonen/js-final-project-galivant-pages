<template>
  <div>
    <div class="m-4">
      <b>Title: {{ trip.title }}HELLO</b><br>
      Arrival Date: {{ trip.arrivalDate }}<br>
      Number of Photo Groups: {{trip.photoGroups.length}}
    </div>
   <d-photo-groups-div :photo-groups="photoGroups"></d-photo-groups-div>
  </div>
</template>

<script>
import DPhotoGroupsDiv from "@/components/accordianTrial/DPhotoGroupsDiv.vue";

export default {
  name: "CTripDetails",
  components: {DPhotoGroupsDiv},
  props: {
    trip: Object
  },
  data() {
    return {
      photoGroups: Array,
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <p>BTripItemDiv: THIS IS IN THE V-SHOW DIV</p>
  <div id="show-me">
    <div v-for="trip in trips"
         :trip="trip"
         :key="trip.key"
    >
      <c-trip-details :trip="trip"></c-trip-details>
    </div>
  </div>
</template>

<script>
import CTripDetails from "@/components/accordianTrial/CTripDetails.vue";

export default {
  name: "BTripsDiv",
  components: {CTripDetails},
  props: {trips: Array},
  data() {
    return {
      trip: Object,
      showDiv: true,
    }
  }

}
</script>

<style scoped>

</style>
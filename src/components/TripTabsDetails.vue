<template>
  <div photo-group-card-header row>
    <div class="btn-col col">
      <button class="show-btn btn btn-secondary"
              style="font-size: 10px;font-weight: bolder"
              @click="showTrip=!showTrip">
        SHOW HIDE Trip
      </button>
    </div>
  </div>

  <div v-show="showTrip">
    <div class="page-trip-details">
      <div class="row justify-content-center">
        <div class="mt-3 p-2 d-inline-flex justify-content-center">
          <i class="bi bi-star-fill mx-3"
             style="color: goldenrod;font-size: 30px"
             @click="this.favorite =!this.favorite"></i>
          <h2>
            {{ trip.title }}
          </h2>
        </div>
        <h4>
          {{ trip.arrivalDate }} - {{ trip.returnDate }}
        </h4>
        <div>
          <h5>
            Trip Description:
          </h5>
          <h5>
            {{ trip.tripDescription }}
          </h5>
        </div>

        <!--HERE IS THE COMPONENT AND BINDING-->
        <photo-group-card :photo-group="trip.photoGroup"></photo-group-card>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoGroupCard from "@/components/PhotoGroupCard.vue";

export default {
  name: "TripTabsDetails",
  components: {PhotoGroupCard},
  props: {
    trip: Object
  },
  data() {
    return {
      //photoGroup:[],
      photoGroup: Array,
      showTrip: true,
      showTripDetails: false
    }
  },
  Computed: {
    showTripDetails() {
      this.showTrip = !this.showTrip;
    }
  }
}
</script>

<style lang="scss">


</style>
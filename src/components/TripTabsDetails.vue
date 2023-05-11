<template>
  <span photo-group-card-header>
      <button class="show-btn btn btn-secondary"
              style="font-size: 10px;font-weight: bolder"
              @click="showTrip=!showTrip">
        SHOW HIDE Trip
      </button>
    </span>

  <div v-show="showTrip">
    <div>
      <div class="row justify-content-start trip-details">
        <div class="mt-3 p-2 d-inline-flex justify-content-start">
          <i class="bi bi-star-fill mx-3"
             style="color: goldenrod;font-size: 30px"
             @click="this.favorite =!this.favorite"></i>
          <h3 class="trip-title">
            {{ trip.title }}
          </h3>
        </div>
        <div class="date-group">
          <span class="trip-dates-label">
           Dates:
          </span>
          <span class="trip-dates">
          {{ trip.arrivalDate }} - {{ trip.returnDate }}
          </span>
        </div>
        <div class="desc-group">
          <span class="trip-desc-label">
            Trip Description:
          </span>
          <span class="trip-desc">
            {{ trip.tripDescription }}
          </span>
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

.trip-details {
  //font-family: 'Inter', sans-serif;
  //font-family: 'Pacifico', cursive;
  //font-family: 'Philosopher', sans-serif;
  //font-family: 'Josefin Sans', sans-serif;
  font-family: 'Sen', sans-serif;
  color: rgba(116, 116, 116);
  padding: 10px;
  vertical-align: center;

  .trip-title {
    margin-bottom: 0px;
    padding-bottom: 0;

  }

  .trip-title, .trip-desc-label, .trip-dates-label {
    font-weight: bold;
    color: rgba(116, 116, 116);
  }
  .trip-desc-label, .trip-dates-label {
    font-size: large;
  }
.date-group, .desc-group{
  text-align: start;
  margin-left: 65px;
}

}


</style>
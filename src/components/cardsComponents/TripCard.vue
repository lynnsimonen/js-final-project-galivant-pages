<template>
  <!-- TODO: DONE - LIST OF TRIP CARDS (and add new trip button) -->

  <div row>
    <div class="col-3 justify-content-start" style="text-align: left;">
      <button class="btn btn-outline-info m-1"
              style="font-size: 10px;font-weight: bolder"
              @click="showDiv=!showDiv">
        SHOW HIDE TripCard
      </button>
    </div>
  </div>
  <div v-show="showDiv">

    <!-- TODO: Links to... SORT LIST-->
    <div row>
      <div class="dropdown dropend justify-content-start col-3" style="text-align: left;">
        <button class="btn btn-outline-secondary dropdown-toggle border-0 p-1 m-1"
                style="color: #010101;font-size: 14px;"
                type="button"

                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false">
          Sort Trips
        </button>
        <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Trip Title</a></li>
          <li><a class="dropdown-item" href="#">Date</a></li>
          <li><a class="dropdown-item" href="#">My Favorites</a></li>
        </ul>
      </div>
    </div>

    <!-- TODO: Links to... ADD TRIP-->
    <div row>
      <button class="btn btn-secondary"
              style="color: white; font-size: larger; font-weight: bold;  "
              alt="ADD NEW TRIP BUTTON"
              type="button">
        Add New Trip
      </button>
    </div>

    <div class="row m-4 justify-content-center">
      <!-- TODO: - DONE This will loop through trips  -->
      <div class="card .col-sm-6  .col-2 col-lg-2 m-3 "
           style="width: 18rem;"
           :key="trip.key"
           :item="trip"
           v-for="trip in trips">
        <trip-details-component :trip="trip"></trip-details-component>
      </div>
    </div>
  </div>

</template>

<script>
//---------------------------------------------------------------------------------------------------------------------------

import TripDetailsComponent from "@/components/TripDetailsComponent.vue";

console.log("TRIP CARD");

export default {
  name: "TripCard",
  components: {TripDetailsComponent},
  props: {
    trips: []
  },
  //['trips'],
  data() {
    return {
      showDiv: true,
      showTripDetails: false,
      isFavorite: false,
      trip: Object
    }
  },
  Computed: {
    showTripDetails() {
      this.showTripDetails = !this.showTripDetails;
    }
  },
  methods: {
    search() {
      let keyword = '';
      if (keyword) {
        return this.trips.title.toLowerCase().includes(this.keyword.toLowerCase())
            || this.trips.tripDescription.toLowerCase().includes(this.keyword.toLowerCase());
      }
    },
  },
}

</script>
//----------------------------------------------------------------------------------------------------------------------------
<style lang="scss">

</style>
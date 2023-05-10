<template>
  <div class="pageContainer">
    <div class="row ">
      <div class="col col-12 col-sm-3 left-menu">
        <div class="sortButtons ">
        </div>
        <div class=" tabs ">
          <div class="sortButton-items btn btn-secondary"
               @click="sortItems('title')">
            Title <i class="bi bi-arrow-down-up"></i>
          </div>
          <div class="sortButton-items btn btn-secondary"
               @click="sortItems('arrivalDate')">
            Date <i class="bi bi-arrow-down-up"></i>
          </div>
          <div class="sortButton-items btn btn-secondary"
               @click="sortItems('favorite')">
            Favs <i class="bi bi-arrow-down-up"></i>
          </div>
          <div class="menu-title">TRIPS</div>
          <ul id="trip-title-list"
              class="card "
              v-for="(trip) in sortedTrips"
              :key="trip.key"
              :trip="trip">
            <li>
              <div v-if="trip.favorite">
                <i class="bi bi-star-fill" style="color:gold"></i>
              </div>
              {{ trip.title }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-9 trip-details">
        <div class="row trip-details-header">
          <div class="details-title justify-content-center">
            Tell Your Story...
          </div>
          <div class="btn-col">
            <button class="new-btn btn btn-secondary "
                    alt="ADD NEW TRIP BUTTON"
                    type="button">
              <div class="insideAddBtn row align-items-center">
                <div class="col-4 plusIcon">
                  <i class="bi bi-plus"></i>
                </div>
                <div class="col-8 btnText">
                  ADD <br> TRIP
                </div>
              </div>
            </button>
          </div>
        </div>
        <ul id="trial-trip-data"
            class="justify-content-center"
            v-for="(trip, index) in trips"
            :key="trip.key"
            :trip="trip">
          <!--HERE IS THE COMPONENT AND BINDING-->
          <trip-tabs-details :trip="trip"></trip-tabs-details>
          {{ index - trip.title }}
          <p>{{ trip.description }}</p>
        </ul>

      </div>
    </div>
  </div>

</template>

<script>

import _ from "lodash";
import TripTabsDetails from "@/components/TripTabsDetails.vue";

// <li>{{ index + 1}} - {{ trip.title }}</li>
export default {
  name: "TripTabs",
  components: {TripTabsDetails},
  props: {
    // trips: [],
    trips: Array,
  },
  //['trips'],
  emits: {},
  data() {
    return {
      isFavorite: false,
      sortBy: ['title'],
      orderBy: ['desc'],
      showDiv: true,
      showTripDetails: false,
      trip: Object,
      //list: document.getElementById("trip-title-list").toLowerCase()
    }
  },
  computed: {
    // sortedTrips: function (sortBy) {
    sortedTrips: function () {
      return _.orderBy(
          this.trips,
          this.sortBy,
          this.orderBy
      );

    }
  },
  methods: {
    sortItems: function (sortBy) {
      console.log(typeof sortBy)
      if (typeof sortBy == "boolean") {
        if (this.orderBy[0] !== 'asc' ||
            this.sortBy != sortBy) {
          this.sortBy = sortBy;
          this.orderBy = ['desc'];
        } else {
          this.orderBy = ['asc'];
        }
      } else {
        if (this.orderBy[0] !== 'asc' ||
            this.sortBy != sortBy) {
          this.sortBy = sortBy;
          this.orderBy = ['asc'];
        } else {
          this.orderBy = ['desc'];
        }
      }

    }
  }
}
</script>

<style lang="scss">

.pageContainer {
  width: 95%;
  margin: auto;
  margin-top: 10px;
  justify-content: center;

  .left-menu {
    background-color: #92e0c0;
    padding: 5px;

    .sortButton-items {
      padding: 0.3rem;
      background-color: gray;
      margin-right: 0.3rem;
      margin-bottom: 0.3rem;
      font-size: 12px;
      cursor: pointer;
      user-select: none;
    }

    .menu-title {
      //font-family: 'Inter', sans-serif;
      //font-family: 'Pacifico', cursive;
      //font-family: 'Philosopher', sans-serif;
      //font-family: 'Josefin Sans', sans-serif;
      font-family: 'Sen', sans-serif;
      font-weight: bold;
      font-size: 24px;
      color: rgba(116, 116, 116);
      padding: 10px;
    }

    .tabs {
      ul {
        padding-left: 5px;
      }

      li {
        text-align: start;
      }
    }
  }

  .trip-details {
    justify-content: center;
  }
}

.trip-details-header {
  .details-title {
    //font-family: 'Inter', sans-serif;
    font-family: 'Pacifico', cursive;
    //font-family: 'Philosopher', sans-serif;
    //font-family: 'Josefin Sans', sans-serif;
    //font-family: 'Sen', sans-serif;
    //font-weight: bold;
    font-size: 24px;
    color: rgba(116, 116, 116);
  }

  .new-btn {
    color: rgba(116, 116, 116);
    background-color: #fae4a6;
    width: 10%;
    .btnText {
      font-size: x-large;
      font-weight: bolder;
     text-align: center;
      line-height: 100%;

    }
    .plusIcon {
      font-weight: bolder;
      font-size: xxx-large;
      align-content: center;
      padding: 0;
      margin: 0;
    }

  }
  .btn-col {
    display: flex;
    justify-content: end;
  }
}
</style>
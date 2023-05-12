<template>
  <div class="pageContainer">
    <div class="row ">
      <!-- LEFT SIDE OF SCREEN - INDIVIDUAL TRIP MENU -->
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
          <ul id="ul-trip-menu"
              class="card "
              v-for="(trip) in sortedTrips"
              :key="trip.key"
              :trip="trip">
            <li>
<!--              <search-menu-form style="width: 100%" @submit.prevent="showTrip(keyValue)">-->

<!--                <button type="submit"-->
                <button
                    class="menu-item-trip btn row"
                    @click="showTrip">
                  <div v-if="trip.favorite" class="star col-1">
                    <i class="bi bi-star-fill" style="color:gold"></i>
                  </div>
                  <div v-else class="col-1"></div>
                  <div class="col-10 menu-btn-title">
                    {{ trip.title }}
                  </div>
                </button>

<!--                <input type="hidden" id="menuKey" name="menuKey" keyValue="{{trip.key}}"/>-->
<!--              </search-menu-form>-->


            </li>
          </ul>
        </div>
      </div>
      <!-- RIGHT HALF OF SCREEN - INDIVIDUAL TRIP DETAILS -->
      <!-- TODO: ADD ,index AFTER trip SO THAT INDIVIDUAL TRIP DATA CAN BE ACCESSED FOR TRIP DETAILS-->
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
        <cover-page v-show="showCoverPage"></cover-page>
        <div class="trips-container"
             v-show="showTripTabsDetails">
          <ul id="ul-get-the-trip-index"
              class="justify-content-center"
              v-for="(trip, index) in trips"
              :key="trip.key"
              :trip="index">
            <!--HERE IS THE COMPONENT AND BINDING-->
            <trip-tabs-details :trip="trip" ></trip-tabs-details>
          </ul>
        </div>
        <!--        <div v-else>No Trips Found for this trip.key: {{value}}</div>-->
      </div>
    </div>
  </div>

</template>

<script>
import _ from "lodash";
import TripTabsDetails from "@/components/TripTabsDetails.vue";
import CoverPage from "@/components/CoverPage.vue";

export default {
  name: "TripTabs",
  components: {CoverPage, TripTabsDetails},
  props: {
    trips: Array,
  },
  emits: {},
  data() {
    return {
      showCoverPage: true,
      showTripTabsDetails: false,
      //keyValue: '',
      //clickedMenuTrip: [...this.trips],
      //showDiv: true,
      //showTripDetails: false,
      isFavorite: false,
      sortBy: ['title'],
      orderBy: ['desc'],
      trip: Object,
    }
  },
  computed: {
    sortedTrips: function () {
      return _.orderBy(
          this.trips,
          this.sortBy,
          this.orderBy
      );
    },
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
    },

    // filteredTrip() {
    //   console.log('this.tripKeyValue: ', this.trips)
    //   if (this.tripKeyValue.trim().length > 0) {
    //     return this.trips.filter((trip) => trip.key === this.tripKeyValue)
    //
    //   }
    //   return this.trips

    // searchTrips(value) {
    //   this.clickedMenuTrip = this.clickedMenuTrip.filter((trip) =>{
    //     return trip.key === value;
    //   })
    // },

    showTrip() {
      this.showTripTabsDetails = !this.showTripTabsDetails;
      this.showCoverPage = !this.showCoverPage;
    },
    // hideTripContent(){
    //   document.getElementByClassName(hideTripContent).hide;
    // }
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

    .sortButton-items:hover {
      font-weight: bolder;
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

      .menu-item-trip {
        width: 100%;
        display: flex;
        justify-content: start;
        align-content: center;
      }

      .menu-item-trip:hover {
        color: black;
        font-weight: bolder;
      }

      .menu-btn-title {
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

  .new-btn:hover {
    font-weight: bolder;
  }

  .btn-col {
    display: flex;
    justify-content: end;
  }
}
</style>
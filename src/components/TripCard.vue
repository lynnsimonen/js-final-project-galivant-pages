<template>
  <div row justify-content-end>
    <button class="btn btn-outline-secondary border-0 p-1 m-1 " style="color: #010101;" alt="thumb like"
            type="button"><i class="bi bi-plus-circle"></i></button>
    <button class="btn btn-outline-secondary border-0 p-1 m-1 " style="color: #010101;" alt="thumb like"
            type="button"><i class="bi bi-filter-circle"></i></button>
  </div>
  <div class="row m-4 justify-content-center">
    <div class="card .col-sm-6  .col-2 col-lg-2 m-3 "
         style="width: 18rem;"
         :key="item.key"
         :item="item"
         v-for="item in trips">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <div class="card-body">

            <!-- put a star here if the favorite input star is checked -->
            <div class="d-inline-flex">
              <i class="bi bi-star-fill "
                 v-bind:class="isFavorite === item.favorite ? 'white' : 'yellow'"
                 name="star"></i>
              <h4 class="card-title">
                {{ item.title }}
              </h4>
            </div>
            <h6 class="card-subtitle mb-2 text-muted">
              {{ item.arrivalDate }} - {{ item.returnDate }}
            </h6>

            <!--TODO: CLICK to see This Trip's Details (bind the trip's key?)-->
            <router-link v-if="item.key"
                class="btn-outline-secondary"
                to="/trip-details"
                :key="item.key"
            >
              Trip Details
            </router-link>

          </div>
        </li>
        <li class="list-group-item justify-content-around">
          <button class="btn btn-outline-secondary border-0 p-1 m-1 " style="color: #010101;;" alt="thumb like"
                  type="button"><i class="bi bi-hand-thumbs-up">
               <span class="p-2translate-middle badge rounded-pill bg-secondary">
                 5
                <span class="visually-hidden"># of likes this trip has</span>
                </span>
          </i></button>
          <button class="btn btn-outline-secondary border-0 p-1 m-1 " style="color: #010101;;" alt="heart favorite"
                  type="button"><i class="bi bi-heart">
               <span class="p-2translate-middle badge rounded-pill bg-secondary">
                 12
                <span class="visually-hidden"># of likes this trip has</span>
                </span>
          </i></button>
          <div class="form-check my-1 align-items-center mt-2" style="color: #010101;">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Private
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {EventTrip} from "@/models/trip-model";
import router from "@/router";

export default {
  name: "TripCard",
  methods: {EventTrip, router},
  props:
      {trips: Object},
  //['trips'],
  data() {
    return {
      isFavorite: false
    }
  },
  Method: {
  }
}
</script>

<style lang="scss">
.page-body {

  li {
    //font-family: 'Inter', sans-serif;
    //font-family: 'Pacifico', cursive;
    //font-family: 'Philosopher', sans-serif;
    //font-family: 'Josefin Sans', sans-serif;
    font-family: 'Sen', sans-serif;
    font-size: 15px;
    color: rgba(116, 116, 116);
    display: flex;
    justify-content: start;
  }

}
</style>
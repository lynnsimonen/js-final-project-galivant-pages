<template>
  <!-- TODO: DETAILS INSIDE THE TRIP LIST CARDS -->

  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <div class="card-body">

        <!-- TODO: put a star here if the favorite input star is checked -->
        <div class="d-inline-flex">
<!--          <i class="bi bi-star-fill "-->
<!--             v-bind:class="isFavorite === item.favorite ? 'white' : 'yellow'"-->
<!--             name="star"></i>-->
          <h5 class="card-title">
            {{ trip.title }}
          </h5>
        </div>
        <h6 class="card-subtitle mb-2 text-muted">
          {{ trip.arrivalDate }} - {{ trip.returnDate }}
        </h6>

        <!--TODO: CLICK to see THIS Trip's Details (bind the trip's key?)-->
        <button
            class="btn btn-secondary"
            v-on:click="$emit('show')"
        >Trip Details
        </button>

      </div>
    </li>
    <li class="list-group-item justify-content-around">

      <!--  TODO: Link other users' likes to this icon-->
      <i class="bi bi-hand-thumbs-up p-1 m-1"
      >
               <span class="p-2translate-middle badge rounded-pill bg-secondary">
                 5
                <span class="visually-hidden"># of likes this trip has</span>
                </span>
      </i>

      <!-- TODO: Checkbox keep trip private from others viewing-->
      <div class="form-check my-1 align-items-center mt-2" style="color: #010101;">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Private
        </label>
      </div>
    </li>
  </ul>

</template>

<script>
//----------------------------------------------------------------------------------------------------------------------------
//import PhotoGroupCard from "@/components/PhotoGroupCard.vue";

console.log("TRIP DETAILS");
export default {
  name: "TripDetailsComponent",
  components: {},
  props: {
    trip: Object
  },
  data(){
    return{
      photoGroup:[],
    }
  },
  methods: {
    deleteItem(item) {
      //item.$emit('remove-trip', item);
      this.splice(this.trips.indexOf(item), 1);
    },

    addTrip() {
      this.push(this.newTrip);
      //clear the form
      this.newTrip = {
        title: '',
        tripDescription: '',
        arrivalDate: '',
        returnDate: '',
        key: '',
        favorite: false,
      }
    },
    isFav(item) {
      item.favorite = !item.favorite;
      return item.favorite;
    },
    lengthOfTrip(item) {
      // eslint-disable-next-line no-undef
      let a = new Date(item.returnDate);
      // eslint-disable-next-line no-undef
      let b = new Date(item.arrivalDate);
      // To calculate the time difference of two dates
      let Difference_In_Time = a.getTime() - b.getTime();
      // To calculate the no. of days between two dates
      return Difference_In_Time / (1000 * 3600 * 24);
    },
    //this will tell me if I'm pulling the correct data... look on console
    created() {
      console.log('*** typeof Object: ' + typeof Object)
    },
  }
}
</script>

<style lang="scss">
//----------------------------------------------------------------------------------------------------------------------------
li {
  //font-family: 'Inter', sans-serif;
  //font-family: 'Pacifico', cursive;
  //font-family: 'Philosopher', sans-serif;
  //font-family: 'Josefin Sans', sans-serif;
  font-family: 'Sen', sans-serif;
  font-size: 12px;
  color: rgba(116, 116, 116);
  display: flex;
  justify-content: start;
}

</style>
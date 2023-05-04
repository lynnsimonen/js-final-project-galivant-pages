<template>
  <div class="page-trip-details">
    <div class="row justify-content-center m-5">

      <!--      <i class="bi bi-star"-->
      <!--         @click="isFav(item)"-->
      <!--         :class="{'yellow-text' : item.favorite === true, 'gray-text' : item.favorite === false,}"-->
      <!--      >{{ this.favorite ? "FAV" : "Not FAV" }}-->

      <!--      <h1 class="title pt-2"> {{ }}</h1>-->
      <div class="mt-3 p-2 d-inline-flex justify-content-center">
        <i class="bi bi-star-fill mx-3" style="color: goldenrod;font-size: 30px"></i>
        <h1 class="title">Family Trip to Yellowstone National Park - 2008</h1>
      </div>
    </div>

    <div class="container m-2 row justify-content-center">
      <div class="row align-items-start m-2" style="height: 300px">
        <div class="col">
          <ul class="list-group list-group-flush m-2">
            <li class="list-group-item d-flex justify-content-start">
              <!-- {{item.arrivalDate - item.returnDate}} {{ lengthOfTrip(item) }} days-->
              <div>
                <span class="label">Our Trip Dates: </span><span class="info">07/08/2008 - 07/16/2008</span>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-start">
              <!-- {{item.arrivalDate - item.returnDate}} {{ lengthOfTrip(item) }} days-->
              <div>
                <span class="label">Location: </span><span class="info">Wyoming U.S.A.</span>
              </div>
            </li>
            <li class="list-group-item d-inline-block">
              <div>
                <div class="label">Trip Notes & Memories:</div>
                <!--{{ item.tripDescription }}-->
                <p class="info-notes justify-content-start .text-truncate inline-block">item.tripDescription...
                  This will wrap and contain details that the user would like to use to identify their trip.</p>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-end">
              <button class="btn btn-secondary p-0 mx-2"
                      style="color:black;background-color: white;border: none">
                <i class="bi bi-pencil"></i></button>
              <button
                  class="btn btn-secondary p-0 mx-2"
                  style="color:red;background-color: white;border: none"
                  @click="$emit('delete-trip', item)">
                <i class="bi bi-trash3"></i></button>
            </li>
          </ul>
        </div>
        <div class="col" style="background-color: lightgrey">
          <img src="../images/FR_Eiffel.jpg"
               class="col-6"
               alt="cover photo">
        </div>
      </div>
    </div>
    <div class="title row justify-content-center m-5">Your Travel Albums</div>
  </div>

  <!-- Trip Details import PhotoGroupLists - bind here -->
  <!--<photo-group-list></photo-group-list>-->
  <div class="row justify-content-center">
    <div class="card .col-sm-6  .col-2 col-lg-2 m-3 "
         style="width: 18rem; border: #010101 2px; height: 100px; background-color: lightgray">
      Photo Group with photos

      <div class="d-flex justify-content-end">
        <button class="btn btn-secondary p-0 mx-2"
                style="color:black;background-color: white;border: none">
          <i class="bi bi-pencil"></i></button>
        <button
            class="btn btn-secondary p-0 mx-2"
            style="color:red;background-color: white;border: none"
            @click="$emit('delete-trip', item)">
          <i class="bi bi-trash3"></i></button>
      </div>
    </div>

    <div class="card .col-sm-6  .col-2 col-lg-2 m-3 "
         style="width: 18rem;
         border: #010101 2px;
         height: 100px;
         background-color: lightgray">
      Photo Group with photos

      <div class="d-flex justify-content-end">
        <button class="btn btn-secondary p-0 mx-2"
                style="color:black;background-color: white;border: none">
          <i class="bi bi-pencil"></i></button>
        <button
            class="btn btn-secondary p-0 mx-2"
            style="color:red;background-color: white;border: none"
            @click="$emit('delete-trip', item)">
          <i class="bi bi-trash3"></i></button>
      </div>
    </div>
    <div class="card .col-sm-6  .col-2 col-lg-2 m-3 "
         style="width: 18rem; border: #010101 2px; height: 100px; background-color: lightgray">
      Photo Group with photos

      <div class="d-flex justify-content-end">
        <button class="btn btn-secondary p-0 mx-2"
                style="color:black;background-color: white;border: none">
          <i class="bi bi-pencil"></i></button>
        <button
            class="btn btn-secondary p-0 mx-2"
            style="color:red;background-color: white;border: none"
            @click="$emit('delete-trip', item)">
          <i class="bi bi-trash3"></i></button>
      </div>
    </div>
    <div class="card .col-sm-6  .col-2 col-lg-2 m-3 "
         style="width: 18rem; border: #010101 2px; height: 100px; background-color: lightgray">
      Photo Group with photos

      <div class="d-flex justify-content-end">
        <button class="btn btn-secondary p-0 mx-2"
                style="color:black;background-color: white;border: none">
          <i class="bi bi-pencil"></i></button>
        <button
            class="btn btn-secondary p-0 mx-2"
            style="color:red;background-color: white;border: none"
            @click="$emit('delete-trip', item)">
          <i class="bi bi-trash3"></i></button>
      </div>
    </div>
    <div class="card .col-sm-6  .col-2 col-lg-2 m-3 "
         style="width: 18rem; border: #010101 2px; height: 100px; background-color: lightgray">
      Photo Group with photos

      <div class="d-flex justify-content-end">
        <button class="btn btn-secondary p-0 mx-2"
                style="color:black;background-color: white;border: none">
          <i class="bi bi-pencil"></i></button>
        <button
            class="btn btn-secondary p-0 mx-2"
            style="color:red;background-color: white;border: none"
            @click="$emit('delete-trip', item)">
          <i class="bi bi-trash3"></i></button>
      </div>
    </div>
  </div>

</template>

<script>
//import {EventTrip} from "@/models/trip-model";

export default {
  name: "TripDetails",
  //components: {EventTrip},
  props: {
    trip: Object
  },
//['trips'],
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
.page-trip-details {
  .title {
    //font-family: 'Inter', sans-serif;
    //font-family: 'Pacifico', cursive;
    //font-family: 'Philosopher', sans-serif;
    //font-family: 'Josefin Sans', sans-serif;
    font-family: 'Sen', sans-serif;
    font-size: 30px;
    color: rgba(116, 116, 116);
    margin-top: 5px;
    margin-bottom: 30px;
  }

  .label {
    //font-family: 'Inter', sans-serif;
    //font-family: 'Pacifico', cursive;
    //font-family: 'Philosopher', sans-serif;
    //font-family: 'Josefin Sans', sans-serif;
    font-family: 'Sen', sans-serif;
    font-size: 18px;
    color: rgba(116, 116, 116);
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: bold;
    margin-right: 10px;
    display: flex;
    justify-content: start;
  }

  .info {
    //font-family: 'Inter', sans-serif;
    //font-family: 'Pacifico', cursive;
    //font-family: 'Philosopher', sans-serif;
    //font-family: 'Josefin Sans', sans-serif;
    font-family: 'Sen', sans-serif;
    font-size: 18px;
    color: rgba(116, 116, 116);
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    justify-content: start;
  }

  .info-notes {
    //font-family: 'Inter', sans-serif;
    //font-family: 'Pacifico', cursive;
    //font-family: 'Philosopher', sans-serif;
    //font-family: 'Josefin Sans', sans-serif;
    font-family: 'Sen', sans-serif;
    font-size: 18px;
    color: rgba(116, 116, 116);
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    justify-content: start;
  }
}
</style>
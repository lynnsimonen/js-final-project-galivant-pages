<template>
  <!-- TODO: LIST OF PHOTOGROUP CARDS & COVER PAGE (and add new photoGroup button) -->
  <div row>
    <div class="col-3 justify-content-start" style="text-align: left;">
      <button class="btn btn-outline-info m-1"
              style="font-size: 10px;font-weight: bolder"
              @click="showPhotoGroup=!showPhotoGroup">
        SHOW HIDE PhotoGroupCard
      </button>
    </div>
  </div>
  <div v-show="showPhotoGroup">

    <div class="page-trip-details">
      <div class="row justify-content-center m-5">

        <!--TODO: Allow user to click on star to make this a favorite trip (and show star on trip card)-->
        <!--      <i class="bi bi-star"-->
        <!--         @click="isFav(item)"-->
        <!--         :class="{'yellow-text' : item.favorite === true, 'gray-text' : item.favorite === false,}"-->
        <!--      >{{ this.favorite ? "FAV" : "Not FAV" }}-->

        <!--      <h1 class="title pt-2"> {{ }}</h1>-->

        <div class="mt-3 p-2 d-inline-flex justify-content-center">
          <i class="bi bi-star-fill mx-3" style="color: goldenrod;font-size: 30px"></i>
          <h1 class="title">Family Trip to Yellowstone National Park - 2008</h1>
          <h1 class="title">{{}}</h1>
        </div>
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-6">
            <ul class="list-group list-group-flush m-2">
              <li class="list-group-item ">
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
                  <p class="info-notes text .text-truncate inline-block" style="text-align: start">
                    item.tripDescription...
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
          <div class="col-3 wrapper">
            <!-- TODO: make image fill full container-->
            <img src="../images/FR_Eiffel.jpg"
                 height="400"
                 alt="cover photo"
                 style="object-fit: cover;">
          </div>
        </div>
      </div>

      <!-- TODO: Have photo groups displayed in cards below-->
      <div class="title row justify-content-center m-5">Your Travel Albums</div>
    </div>

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
  </div>
</template>

<script>
//--------------------------------------------------------------------------------------------------------------------------
console.log()
export default {

  name: "PhotoGroupCard",
  components: {},
  props: {
    photoGroup: [],
  },
  data() {
    return {
      //photoGroup: Object
      showPhotoGroup: true,
      showPhotoGroupDetails: false
    }
  },
  Computed: {
    showPhotoGroupDetails() {
      this.showPhotoGroup = !this.showPhotoGroup;
    }
  }
}


</script>

<style lang="scss">
//-------------------------------------------------------------------------------------------------------------------------------
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

  //LEAVE THIS!!! It centers the trip info, for some reason.
  p {
    display: flex;
    justify-content: start;
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
    //margin-bottom: 5px;
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
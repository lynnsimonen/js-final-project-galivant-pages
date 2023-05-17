<template>

  <!-- Button trigger modal -->
  <div class="container grid w-100"></div>
  <div class="row w-100 ">
    <div class="col-10"></div>
    <div class="col-2">
      <button type="button" class="btn-add btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Add A Trip
      </button>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade modal-fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
       tabindex="-1"
       aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <form @submit.prevent="$emit('add-new-trip')">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Add A Trip</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-2 row">
              <!-- trip title -->
              <div class="trip-title-class input-group">
                <label class="form-label" for="trip-title">Trip Title</label>
                <input class="add-a-trip-input"
                       :value="title"
                       type="text"
                       @input="$emit('update:title', $event.target.value)"
                       id="trip-title"
                       required
                       placeholder="Ex: Our vacation 2019">
              </div>
              <!-- Travel Destination: Country-->
              <div class="trip-country-class input-group">
                <label class="form-label" for="travel-country">Travel Destination: Country</label>
                <select id="travel-country"
                        :value="travelCountry"
                        type="text"
                        @input="$emit('update:travelCountry', $event.target.value)"
                        class="form-select add-a-trip-input"
                        name="countryInput"
                        placeholder
                        required>
                  <option v-for="(country, index) in sorted"
                          class="country"
                          :country="country"
                          :key="index"
                  >
                    {{ country.name.common }}
                  </option>
                </select>
              </div>
              <!-- arrivalDate-->
              <div class="dropdown start-date input-group">
                <label class="form-label" for="start-date">Start Date</label>
                <input class="add-a-trip-input"
                       type="date"
                       placeholder="mm/dd/yyyy"
                       required
                       @input="$emit('update:arrivalDate', $event.target.value)"
                       :value="arrivalDate"
                       id="arrival-date">
              </div>
              <!--returnDate-->
              <div class="dropdown end-date input-group">
                <label class="form-label" for="end-date">End Date</label>
                <input class="add-a-trip-input "
                       type="date"
                       id="return-date"
                       placeholder="mm/dd/yyyy"
                       required
                       @input="$emit('update:returnDate', $event.target.value)"
                       :value="returnDate">
              </div>
              <!-- favorite trip? -->
              <div class="form-check-inline input-group">
                <label class="form-label" for="favorite">Is this a favorite trip?</label>
                <select class="form-select-sm add-a-trip-input"
                        id="favorite"
                        type="boolean"
                        :value="favorite"
                        @input="$emit('update:favorite', $event.target.value)">
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
              <!-- trip description -->
              <div class="trip-description input-group">
                <label class="form-label " for="trip-description">Trip Description</label>
                <textarea class="add-a-trip-input form-control"
                          :value="tripDescription"
                          type="text"
                          @input="$emit('update:tripDescription', $event.target.value)"
                          name="trip-description"
                          aria-label="With textarea"></textarea>
              </div>
              <!--   key-->
              <div class="trip-description input-group">
                <input class="add-a-trip-input"
                       style="background-color: #cccccc; margin-top: 10px"
                       type="number"
                       id="key"
                       disabled
                       @input="$emit('update:key', $event.target.value)"
                       :value="key">
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-add btn" style="background-color: lightgrey; color:white;"
                    data-bs-dismiss="modal">Cancel
            </button>
            <button type="submit" class="btn-add btn"
                    style="background-color: gray; color:white;">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
<!--    <p>-->
<!--      title: {{ title }}</p>-->
<!--    <p>-->
<!--      travelCountry: {{ travelCountry }}</p>-->
<!--    <p>-->
<!--      arrivalDate: {{ arrivalDate }}</p>-->
<!--    <p>-->
<!--      returnDate: {{ returnDate }}</p>-->
<!--    <p>-->
<!--      favTrip: {{ favorite }}</p>-->
<!--    <p>-->
<!--      tripDescription: {{ tripDescription }}-->
<!--    </p>-->
<!--    <p>-->
<!--      key: {{ key }}-->
<!--    </p>-->

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddATrip",
  props: {
    title: String,
    travelCountry: String,
    arrivalDate: Date,
    tripDescription: String,
    returnDate: Date,
    favorite: Boolean,
  },
  data() {
    return {
      info: null,
      key: 0,
    }
  },
  emits: ['update:title',
    'update:travelCountry',
    'update:arrivalDate',
    'update:tripDescription',
    'update:returnDate',
    'update:favorite'],
  method: {
    // keyRandom(){
    //   let randomKey = this.getRandomInt(1, 999999999999)
    //   return  randomKey;
    // }
    showTrip() {
      //showTripTabsDetails data() is false
      this.showTripTabsDetails;
      //showCoverPage data() is true
      this.showCoverPage;
    },
  },
  mounted() {
    axios
        .get('https://restcountries.com/v3.1/all?fields=name')
        .then(response => (this.info = response.data))
    console.log(this.info);
  },
  computed: {
    sorted() {
      return this.info ? _.sortBy(this.info, "name.common") : [];
    }
  }
}
</script>

<style scoped>
.input-group {
  margin: 0 auto;
}

.btn-add {
  background-color: #92e0c0;
  border: #92e0c0;
  margin-top: 20px;
}

.btn-add:hover {
  border: 2px solid #777;
  background-color: #92e0c0;
  color: #777;
}

.input-group-text {
  background-color: white;
  color: #777;
}

.add-a-trip-input {
  width: 100%;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  color: #777;
}

placeholder {
  color: #ccc;
}

.form-label {
  align-content: start;
  margin: 10px 0 0 0
}

.modal-fade {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.fav-trip {
  margin: 20px 0 0 0;
}


</style>
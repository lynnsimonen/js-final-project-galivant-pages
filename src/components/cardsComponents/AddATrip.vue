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
    <form>
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
                <input class="add-a-trip-input" v-model="tripTitle" type="text" id="trip-title" required
                       placeholder="Ex: Our vacation 2019">
              </div>
              <!-- Travel Destination: Country-->
              <div class="trip-country-class input-group">
                <label class="form-label" for="travel-country">Travel Destination: Country</label>
                <select id="travel-country" v-model="travelCountry" class="form-select add-a-trip-input"
                        name="countryInput"
                        placeholder required type="text" value>
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
                <input class="add-a-trip-input" type="date" placeholder="mm/dd/yyyy" required v-model="arrivalDate" id="arrival-date">
              </div>
              <!--returnDate-->
              <div class="dropdown end-date input-group">
                <label class="form-label" for="end-date">End Date</label>
                <input class="add-a-trip-input " :v-model="returnDate" type="date" id="return-date"
                       placeholder="mm/dd/yyyy" required v-model="returnDate">
              </div>
              <!-- favorite trip? -->
              <div class="form-check-inline input-group">
                <label class="form-label" for="favTrip">Is this a favorite trip?</label>
                <select class="form-select-sm add-a-trip-input" id="favTrip" v-model="favTrip">
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
              <!-- trip description -->
              <div class="trip-desc input-group">
                <label class="form-label " for="trip-description">Trip Description</label>
                <textarea class="add-a-trip-input form-control" v-model="tripDesc" name="trip-desc"
                          aria-label="With textarea"></textarea>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-add btn" style="background-color: lightgrey; color:white;"
                    data-bs-dismiss="modal">Cancel
            </button>
            <button type="submit" class="btn-add btn" style="background-color: gray; color:white;">Submit</button>
          </div>
        </div>
      </div>
    </form>
    <p>
      tripTitle: {{ tripTitle }}</p>
    <p>
      travelCountry: {{ travelCountry }}</p>
    <p>
      arrivalDate: {{ arrivalDate }}</p>
    <p>
      returnDate: {{ returnDate }}</p>
    <p>
      favTrip: {{ favTrip }}</p>
    <p>
      tripDesc: {{ tripDesc }}
    </p>

  </div>


</template>

<script>
import axios from "axios";


export default {
  name: "AddATrip",
  props: {},
  data() {
    return {
      selectedDate: null,
      range: {
        start: new Date(2020, 0, 6),
        end: new Date(2020, 0, 10)
      },
      tripTitle: '',
      travelCountry: 'United States',
      arrivalDate: Date,
      returnDate: Date,
      favTrip: false,
      isChecked: true,
      tripDesc: '',
      listCountries: [],
      info: null
    }
  },
  method: {},
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
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
  <div class="modal fade modal-fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
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
                  <input class="add-a-trip-input" type="text" id="inputTitle" placeholder="Ex: Our vacation 2019">
              </div>
              <!-- arrivalDate-->
              <div class="dropdown start-date input-group">
                <label class="form-label" for="start-date">Start Date</label>
                <input class="add-a-trip-input" type="date" id="arrivalDate" placeholder="mm/dd/yyyy" v-model="arrivalDate">
              </div>
              <!--returnDate-->
              <div class="dropdown end-date input-group">
                <label class="form-label" for="end-date">End Date</label>
                <input class="add-a-trip-input" type="date" id="returnDate" placeholder="mm/dd/yyyy" v-model="returnDate">
              </div>
              <!-- favorite trip? -->
              <fieldset class="fav-trip">
                <legend for="inputTitle" class="w-auto" style="font-size: 1rem">Is this a favorite trip?</legend>
                <div class="form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioT"
                         value="optionT">
                  <label class="form-check-label" for="inlineRadioT">Yes</label>
                </div>
                <div class="form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadioF"
                         value="optionF">
                  <label class="form-check-label" for="inlineRadioF">No</label>
                </div>
              </fieldset>
              <!-- trip description -->
              <div class="trip-desc input-group" >
                <label class="form-label " for="trip-description">Trip Description</label>
                <textarea class="add-a-trip-input form-control" aria-label="With textarea"></textarea>
              </div>

            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn-add btn" style="background-color: lightgrey; color:white;" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn-add btn" style="background-color: gray; color:white;">Submit</button>
          </div>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
//import {DatePicker} from 'v-calendar';
//import 'v-calendar/style.css';

export default {
  name: "AddATrip",
  components: {},
  data() {
    return {
      selectedDate: null,
      range: {
        start: new Date(2020, 0, 6),
        end: new Date(2020, 0, 10)
      },
    }
  }
}
</script>

<style scoped>
.input-group{
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
}
.form-label{
  align-content: start;
  margin: 10px 0 0 0
}

.modal-fade {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.fav-trip{
  margin: 20px 0 0 0;
}


</style>
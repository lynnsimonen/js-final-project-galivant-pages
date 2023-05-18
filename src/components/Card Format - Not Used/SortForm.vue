<template>
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
      <ul class="dropdown-menu" id="list" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Trip Title</a></li>
        <li><a class="dropdown-item" href="#">Date</a></li>
        <li><a class="dropdown-item" href="#">My Favorites</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
//--------------------------------------------------------------------------------------------
import TravelEvent from "@/x-models/travel-event-model";

export default {
  name: "SortForm",
  props: {
    item: {type: TravelEvent},
    sortFunction: Function
  },
  // data() {
  //   let sortOptions = [
  //     {label: 'Trip Title', value: 'title'},
  //     {label: 'Date', value: 'returnDate'},
  //     {label: 'My Favorites', value: 'favorite'},
  //   ];
  //   return {
  //     //sortOptions,
  //     //sortValue: sortOptions[0],
  //
  //   }
  // },
  methods: {
    sort() {
      console.log('this.sortValue.value:', this.sortValue.value);
      this.sortFunction(this.sortValue.value)
    },
  }
}
</script>

<style lang="scss">


</style>
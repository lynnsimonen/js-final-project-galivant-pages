<template>

  <button class="btn btn-outline-secondary m-1" @click="showDiv=!showDiv">SHOW/HIDE TripCard</button>

  <!--  FOR A SHOW/HIDE BUTTON, STRUCTURE THE BUTTON AND DIV AS BELOW:-->
<!--  <button class="btn btn-secondary m-1" @click="showDiv=!showDiv">SHOW/HIDE TripCard</button>-->
<!--  <div v-show="showDiv">-->
<!--    CONTENT TO SHOW AND HIDE-->
<!--  </div>-->


</template>

<script>
export default {
  name: "ButtonA",
data() {
    return {
      showDiv: true,
      showComponent: false,
    }
  },
  Method: {},
  Computed: {
    showComponent() {
      this.showDiv = !this.showDiv;
    }
  }
}

</script>
//----------------------------------------------------------------------------------------------------------------------------
<style lang="scss">
button {

}
</style>
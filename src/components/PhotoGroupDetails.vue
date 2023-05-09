<template>
  <!-- TODO: DETAILS INSIDE PHOTOGROUP CARDS -->

  <div>{{ trip.photoGroup.title }}</div>
</template>

<script>
//-----------------------------------------------------------------------------------------------------------------------------
export default {
  name: "PhotoGroupDetails",
  components: {},
  props: {photoGroup: Object},
  data() {
    return {
      photo: []
    }
  }
}


</script>

<style lang="scss">
//-------------------------------------------------------------------------------------------------------------------------------


</style>
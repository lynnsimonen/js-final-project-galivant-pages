<template>
<div>
  <div>
    <b>{{photoGroup.title}}</b>
    {{photoGroup.tripDescription}}
  </div>
  <f-photo-div :photos="photos"></f-photo-div>
</div>


</template>

<script>
export default {
  name: "FPhotoGroupDetails",
  props: {
    photoGroup: Object,
  },
  data(){
    return{
      photos: Array,
    }
  }
}
</script>

<style scoped>

</style>
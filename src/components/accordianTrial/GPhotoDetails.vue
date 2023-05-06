<template>
  <div>
    {{photo.caption}}
    {{photo.photoFilePath}}
  </div>
</template>

<script>
export default {
  name: "GPhotoDetails",
  props:{
    photo: Object,
  },
  data(){
    return{
    }
  }
}
</script>

<style scoped>

</style>
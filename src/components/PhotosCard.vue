<template>
  <!-- TODO: LIST OF PHOTOS CARDS & COVER PAGE (and add new photos button) -->
<div>THIS IS PHOTOS CARD</div>

  <ul class="each-card"
      v-for="onePhoto in photo"
      :key="onePhoto.key"
      :onePhoto="onePhoto">
    <li>
      <div>{{ onePhoto.photoCaption }}</div>
      show test: {{showTest}}
    </li>
  </ul>

</template>

<script>
console.log('this is PHOTOS CARD')
export default {
  name: "PhotosCard",
  components: {},
  props: {photo: Array},
  data() {
    return{
      onePhoto: Object
    }
  },
  Computed: {
    showTest() {
      console.log(this.photo)
      console.log('this.onePhoto: ', this.onePhoto)
      return null
    }
  }
}
</script>

<style scoped>

</style>
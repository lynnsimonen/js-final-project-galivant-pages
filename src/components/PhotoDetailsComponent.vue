<template >

  <!--  <div class="img">-->
  <!--    <img src="'../assets/${onePhoto.photoFilePath}'" width="100" height="75" class="card-img-top"-->
  <!--         alt="photo of our trip"/>-->
  <!--    <caption class="card-title">{{ '../assets/' + onePhoto.photoFilePath }}</caption>-->
  <!--  </div>-->

  <!--  <div class="gallery">-->
  <!--    <a target="_blank" href="'../assets/${onePhoto.photoFilePath}'">-->
  <!--      <img src="../assets/HI_06.jpg" width="100" height="75" class="img-thumbnail" alt="photo of our trip"/>-->
  <!--    </a>-->
  <!--    <caption class="desc">{{ onePhoto.photoCaption }}</caption>-->
  <!--  </div>-->

  <div class="figure-caption-set">
    <div class="figure-caption-set">
    <img src="../assets/HI_06.jpg" width="100" height="75" class="img-thumbnail" alt="photo of our trip"/>
    <caption class="card-title">{{ onePhoto.photoCaption }}</caption>
  </div>
  </div>

</template>

<script>
export default {
  name: "PhotoDetailsComponent",
  components: {},
  props: {onePhoto: Object},
  data() {
    return {}
  }
}
</script>

<style lang="scss">
//.figures {
//  display: inline-block;
//  vertical-align: bottom;
//  flex-wrap: wrap;
//  text-align: center;
//}
.figure-caption-set:hover {
  border: 1px solid #777;
}
.figure-caption-set{
  width: 100px;
  margin: 5px;
}
img {
  width: 100%;
  height: auto;
  align-items: baseline;
}
caption {
  display: block;
  //text-align: center;
  padding: 10px;
}
</style>
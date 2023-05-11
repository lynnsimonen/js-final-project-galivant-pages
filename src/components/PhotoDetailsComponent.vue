<template >
<!--  DONE: Photo and Caption couplings-->

  <div class="figure-caption-set">
    <div class="figure-caption-set">
    <img :src="onePhoto.photoFilePath"  width="100" height="75" class="img-thumbnail" :alt="onePhoto.photoCaption"/>
    <p class="caption">{{ onePhoto.photoCaption }}</p>
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
  },
  computed:{  }
}
</script>
<style lang="scss">
img:hover {
  border: 2px solid #777;
}
.figure-caption-set{
  width: 100px;
  margin: 5px;
  text-align: center;
  //align-items: baseline;
  //vertical-align: bottom;

}
img {
  width: 100%;
  height: auto;
  vertical-align: bottom;

}
.caption {
  padding: 10px;
}
</style>
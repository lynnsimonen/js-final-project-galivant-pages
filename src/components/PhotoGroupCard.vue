<template>
  <!-- LIST OF PHOTOGROUP CARDS & COVER PAGE (and add new photoGroup button) -->

  <!-- TODO: Have photo groups displayed in cards below-->
    <h5 >
      Image Galleries
    </h5>
<div class="">
    <ul class="photo-groups"
        v-for="oneGroup in photoGroup"
        :key="oneGroup.groupTitle"
        :oneGroup="oneGroup">
      <li>
        <!--HERE IS THE COMPONENT AND BINDING-->

        <photo-group-details :one-group="oneGroup"></photo-group-details>
      </li>
    </ul>
</div>
</template>

<script>
//--------------------------------------------------------------------------------------------------------------------------
import PhotoGroupDetails from "@/components/PhotoGroupDetails.vue";

console.log()
export default {

  name: "PhotoGroupCard",
  components: {PhotoGroupDetails},
  props: {
    //photoGroup: [],
    photoGroup: Array,
  },
  data() {
    return {
      oneGroup: Object,
      showPhotoGroup: true,
      showPhotoGroupDetails: false
    }
  },
  Computed: {
    showPhotoGroupDetails() {
      this.showPhotoGroup = !this.showPhotoGroup;
    }
  }
}


</script>

<style lang="scss">
//-------------------------------------------------------------------------------------------------------------------------------

//LEAVE THIS!!! It centers the trip info, for some reason.
p {
  display: flex;
  justify-content: start;
}

.label {
  //font-family: 'Inter', sans-serif;
  //font-family: 'Pacifico', cursive;
  //font-family: 'Philosopher', sans-serif;
  //font-family: 'Josefin Sans', sans-serif;
  font-family: 'Sen', sans-serif;
  font-size: 18px;
  color: rgba(116, 116, 116);
  margin-top: 5px;
  //margin-bottom: 5px;
  font-weight: bold;
  margin-right: 10px;
  display: flex;
  justify-content: start;
}

.info {
  //font-family: 'Inter', sans-serif;
  //font-family: 'Pacifico', cursive;
  //font-family: 'Philosopher', sans-serif;
  //font-family: 'Josefin Sans', sans-serif;
  font-family: 'Sen', sans-serif;
  font-size: 18px;
  color: rgba(116, 116, 116);
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: start;
}

.info-notes {
  //font-family: 'Inter', sans-serif;
  //font-family: 'Pacifico', cursive;
  //font-family: 'Philosopher', sans-serif;
  //font-family: 'Josefin Sans', sans-serif;
  font-family: 'Sen', sans-serif;
  font-size: 18px;
  color: rgba(116, 116, 116);
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: start;
}

</style>
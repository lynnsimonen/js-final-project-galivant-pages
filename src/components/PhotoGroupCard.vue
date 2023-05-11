<template>
  <!-- LIST OF PHOTOGROUP CARDS & COVER PAGE (and add new photoGroup button) -->

  <!-- TODO: Have photo groups displayed in cards below-->

    <ul class="photo-groups"
        v-for="oneGroup in photoGroup"
        :key="oneGroup.groupTitle"
        :oneGroup="oneGroup">
      <li>
        <!--HERE IS THE COMPONENT AND BINDING-->

        <photo-group-details :one-group="oneGroup"></photo-group-details>
      </li>
    </ul>
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
    }
  },
  Computed: { }
}

</script>

<style lang="scss">


</style>
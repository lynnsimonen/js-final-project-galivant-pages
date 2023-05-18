<template>
  <div>
    <div class="details-title justify-content-center">
      Tell Your Story...
    </div>
    <div class="mb-4">
      Show the user fun stuff and messages here before they start looking at their trips.<br>
      Have they earned any continent badges?<br> How many countries and continents have you visited? Ex:
    </div>

    <div class="container gallery2  mb-">
      <!-- heading text -->

      <ul class="image-gallery"
          v-for="(country, index) in sorted.slice(0,3)"
          :country="country"
          :key="index">
        <li>

            <div class="row">
                <div class="col-6">
                  <img :src="country.coatOfArms.png"
                       class="image-flag"
                       style="height:auto;
                       width:5rem;
                      border:1px solid black">
                </div>
              <div class="col-6">
                <div class="image-caption"
                         style="caption-side:bottom">
                  {{ country.name.common }}
                </div>
                <div class="image-caption2"
                         style="caption-side:bottom">
                  population: {{ country.population }}
                </div>
                <div class="image-caption3"
                         style="caption-side:bottom">
                  region: {{ country.region }}
                </div>
              </div>
            </div>

        </li>
      </ul>

    </div>

    <div class="mt-0">
      Number of Countries visited: (total countries visited of 250 countries)
    </div>
    <div class="mb-3">
      How many countries will you visit?
    </div>

    <div class="mb-3"
         style="color:black;font-weight: bold;">
      Countries left to visit: (flag and country name)
    </div>

    <div class="container gallery">
      <!-- heading text -->
      <ul class="image-gallery"
          v-for="(country, index) in sorted"
          :country="country"
          :key="index">
        <li>
          <div class="row">
            <div class="col">
              <img :src="country.flags.png"
                   :alt="country.flags.alt"
                   class="image-flag"
                   style="height:3rem;
               border:1px solid black"
                   width="auto">
              <caption class="image-caption"
                       style="caption-side:bottom">
                {{ country.name.common }}
              </caption>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {RestCountries} from "@/models/RestCountries";

export default {
  name: "CoverPage",
  props: {
    trips: Array,
  },
  data() {
    return {
      info: null,
      countriesList: [],
      trip: Object,
      country: Object,
    }
  },
  mounted() {
    RestCountries
        .listAll()
        .then(response => (this.info = response.data))
    console.log(this.info);
    let countries = this.info;
    return countries;
  },
  computed: {
    sorted() {
      return this.info ? _.sortBy(this.info, "name.common") : [];
    }
  }
}
</script>

<style lang="scss">
.details-title {
  font-family: 'Pacifico', cursive;
  font-size: 24px;
  color: rgba(116, 116, 116);
  margin-bottom: 10px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
  padding-right: 1px;
  margin-top: 5px;
  margin-bottom: 10px;

  .image-caption {
    text-align: center;
    font-size: xx-small;
    margin: 0;
    padding: 0;
  }
}

.gallery2 {
  padding-right: 1px;
  margin-top: 5px;
  margin-bottom: 0;

  .image-caption {
    text-align: start;
    font-size: small;
    margin: 0;
    padding: 0;
  }

  .image-caption2, .image-caption3 {
    text-align: start;
    font-size: small;
    margin: 0;
    padding: 0;
  }
}
</style>
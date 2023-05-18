<template>
  <!-- COVER PAGE THAT HAS TRIPS LIST INSERTED HERE -->
  <add-a-trip
      v-model:title="title"
      v-model:favorite="favorite"
      v-model:travel-country="travelCountry"
      v-model:arrival-date="arrivalDate"
      v-model:return-date="returnDate"
      v-model:trip-description="tripDescription"
      v-model:key="key"
      @add-new-trip="addTrip"
  ></add-a-trip>
  <div class="container-fluid page-body ">
    <!-- <trip-card :trips="trips"></trip-card>-->
    <trip-tabs :trips="trips"></trip-tabs>

  </div>
</template>

<script>
import TravelEvent from "@/models/travel-event-model";
import {EventTrip, Photo, PhotoGroup} from "@/models/trip-model";
import TripTabs from "@/components/TripTabs.vue";
import AddATrip from "@/components/Auxilliary Components/AddATrip.vue";

export default {
  name: "TripItemList",
  components: { AddATrip, TripTabs},
  emits: "delete-it",
  props: {
    type: TravelEvent
    //TravelEvent: Array
  },
  data() {
    return {
      title: '',
      tripDescription: '',
      arrivalDate: Date,
      returnDate: Date,
      travelCountry: '',
      key: Number,//random large number,
      favorite: Boolean,
      newTrip: {
        title: '',
        tripDescription: '',
        arrivalDate: Date,
        returnDate: Date,
        travelCountry: '',
        favorite: Boolean,
        key: Number,
      },
      isFavorite: false,
      trips: [
        new TravelEvent(new EventTrip('France Family Trip - 2018',
            'Paris was cool but not too cold for visiting the sites of the City of Lights.  France was great.',
            '03/27/2018',
            '04/02/2018',
            'France',
            '1',
            true,
            [
              new PhotoGroup
              ('Day One',
                  [new Photo('./FR_01.png', 'city'),
                    new Photo('./FR_02.png', 'smiles'),
                    new Photo('./FR_03.png', 'landmark'),
                    new Photo('./FR_Eiffel.jpg', 'here we are'),
                    new Photo('./FR_02.png', 'smiles'),
                    new Photo('./FR_03.png', 'landmark'),
                    new Photo('./FR_Eiffel.jpg', 'here we are'),
                    new Photo('./FR_02.png', 'smiles'),
                    new Photo('./FR_03.png', 'landmark'),
                    new Photo('./FR_Eiffel.jpg', 'here we are'),
                    new Photo('./FR_02.png', 'smiles'),
                    new Photo('./FR_03.png', 'landmark'),
                    new Photo('./FR_Eiffel.jpg', 'here we are'),
                    new Photo('./FR_Eiffel.jpg', 'here we are'),
                    new Photo('./FR_02.png', 'smiles'),
                    new Photo('./FR_03.png', 'landmark'),
                    new Photo('./FR_Eiffel.jpg', 'here we are'),
                  ]),
              new PhotoGroup
              ('Day Two',
                  [new Photo('./FR_03.png', 'morning'),
                    new Photo('./FR_Eiffel.jpg', 'afternoon'),
                  ]),
              new PhotoGroup
              ('Day Three',
                  [new Photo('./FR_Monet.jpg', 'later'),
                    new Photo('./FR_Nrmdy.jpg', 'later yet'),
                  ]),
              new PhotoGroup
              ('Day Four',
                  [new Photo('./FR_Nrmdy.jpg', 'morning last day'),
                    new Photo('./FR_Monet.jpg', 'dinner'),
                  ]), //end last photoGroupArray

            ], //end new PhotoGroup
        )),//end new TravelEvent

        new TravelEvent(new EventTrip('Southern Family Trip - 2019',
            'Trip was great',
            '03/24/2019',
            '04/15/2019',
            'Costa Rica',
            '2',
            false,
            [
              new PhotoGroup
              ('Liberia',
                  [new Photo('/CR_01.png', 'caption-two'),
                    new Photo('./CR_01.png', 'caption-three'),
                    new Photo('./CR_02.png', 'caption-four'),
                    new Photo('./CR_03.png', 'caption-five'),
                    new Photo('./CR_03.png', 'caption-six'),
                    new Photo('./CR_03.png', 'caption-three'),
                  ]),
              new PhotoGroup
              ('Punta Islita',
                  [new Photo('./CR_02.png', 'sunny'),
                    new Photo('./CR_02.png', 'caption-warm'),
                    new Photo('./CR_03.png', 'caption-beach')
                  ]),
              new PhotoGroup
              ('Volcano',
                  [new Photo('./CR_03.png', 'caption-volcano'),
                    new Photo('./CR_02.png', 'caption-dinner'),
                    new Photo('./CR_03.png', 'caption-dog')
                  ]),
              new PhotoGroup
              ('San Jose',
                  [new Photo('./CR_04.png', 'caption city'),
                    new Photo('./CR_02.png', 'caption airport'),
                    new Photo('./CR_03.png', 'caption legos')
                  ]),
            ]
        )),

        new TravelEvent(new EventTrip('Island Family Trip - 2021',
            'We had fun',
            '07/09/2021',
            '07/19/2021',
            'United States',
            '3',
            true,
            [
              new PhotoGroup
              ('Trip First Days',
                  [new Photo('./HI_01.jpg', 'caption-one'),
                    new Photo('./HI_02.jpg', 'caption-two'),
                    new Photo('./HI_03.jpg', 'caption-three')
                  ]),
              new PhotoGroup
              ('Trip Second Days',
                  [new Photo('./HI_04.jpg', 'caption-one'),
                    new Photo('./HI_05.jpg', 'caption-two'),
                    new Photo('./HI_06.jpg', 'caption-three')
                  ]),
              new PhotoGroup
              ('Trip Second Days',
                  [new Photo('./HI_07.jpg', 'caption-one'),
                    new Photo('./HI_08.jpg', 'caption-two'),
                    new Photo('./HI_09.jpg', 'caption-three')
                  ]),
            ]
        )),
        new TravelEvent(new EventTrip('Western Family Trip - 2015',
            'Trip was great',
            '03/24/2015',
            '04/02/2015',
            'United States',
            '4',
            true,
            [
              new PhotoGroup
              ('Trip First Days',
                  [new Photo('./CR_04.png', 'caption-one'),
                    new Photo('./CR_02.png', 'caption-two'),
                    new Photo('./CR_03.png', 'caption-three')
                  ]),
              new PhotoGroup
              ('Trip Second Days',
                  [new Photo('./CR_01.png', 'caption-one'),
                    new Photo('./CR_02.png', 'caption-two'),
                    new Photo('./CR_03.png', 'caption-three')
                  ]),
              new PhotoGroup
              ('Trip Third Days',
                  [new Photo('./CR_01.png', 'caption-one'),
                    new Photo('./CR_02.png', 'caption-two'),
                    new Photo('./CR_03.png', 'caption-three')
                  ])]
        )),
        new TravelEvent(new EventTrip('Eastern Family Trip - 2016',
            'Trip was great',
            '03/24/2016',
            '04/02/2016',
            'United States',
            '5',
            false,
            [
              new PhotoGroup
              ('Trip First Days',
                  [new Photo('./CR_01.png', 'caption-one'),
                    new Photo('./CR_02.png', 'caption-two'),
                    new Photo('./CR_03.png', 'caption-three')
                  ]),
              new PhotoGroup
              ('Trip Second Days',
                  [new Photo('./CR_02.png', 'caption-one'),
                    new Photo('./CR_02.png', 'caption-two'),
                    new Photo('./CR_03.png', 'caption-three')
                  ]),
              new PhotoGroup
              ('Trip Third Days',
                  [new Photo('./CR_03.png', 'caption-one'),
                    new Photo('./CR_02.png', 'caption-two'),
                    new Photo('./CR_03.png', 'caption-three')
                  ])
            ]
        )),
      ],
    }
  },
  computed: {
  },
  methods: {
    addTrip() {
      let trips = this.trips;
      // let key = this.getRandomInt(1, 999999999999);
      // key;
      let newTrip = {
        title: String,
        travelCountry: 'United States',
        arrivalDate: Date,
        returnDate: Date,
        favorite: Boolean,
        tripDescription: String,
        key: Number,
      }
      newTrip.title = this.title;
      newTrip.tripDescription = this.tripDescription;
      newTrip.arrivalDate = this.arrivalDate;
      newTrip.returnDate = this.returnDate;
      newTrip.travelCountry = this.travelCountry;
      newTrip.favorite = this.favorite;
      // newTrip.key=this.key;

      trips.push(newTrip);
      return trips;
    },
    search() {
      let keyword = '';
      if (keyword) {
        return this.trips.title.toLowerCase().includes(this.keyword.toLowerCase())
            || this.trips.tripDescription.toLowerCase().includes(this.keyword.toLowerCase());
      }
    },

    deleteTrip(trip) {
      this.trips.splice(this.trips.indexOf(trip), 1);
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  }
}
</script>

<style lang="scss">
.page-body {
  .title {
    //font-family: 'Inter', sans-serif;
    //font-family: 'Pacifico', cursive;
    //font-family: 'Philosopher', sans-serif;
    //font-family: 'Josefin Sans', sans-serif;
    font-family: 'Sen', sans-serif;
    font-size: 20px;
    color: rgba(116, 116, 116);
    margin-top: 30px;
    margin-bottom: 30px;
  }

  li {
    //font-family: 'Inter', sans-serif;
    //font-family: 'Pacifico', cursive;
    //font-family: 'Philosopher', sans-serif;
    //font-family: 'Josefin Sans', sans-serif;
    font-family: 'Sen', sans-serif;
    font-size: 15px;
    color: rgba(116, 116, 116);
    display: flex;
    justify-content: start;
  }
}
</style>
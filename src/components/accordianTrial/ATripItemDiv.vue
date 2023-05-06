<template>

  <p>ATripItemDiv: THIS IS IN THE V-SHOW DIV</p>

  <!--  <button :trips="trips" @click="showDiv = !showDiv">A Show B</button>-->

  <b-trips-div :trips="trips"></b-trips-div>

</template>

<script>
import TravelEvent from "@/models/travel-event-model";
import {ArrayOfPhotoGroups, ArrayOfPhotos, EventTrip, Photo, PhotoGroup} from "@/models/trip-model";
import BTripsDiv from "@/components/accordianTrial/BTripsDiv.vue";
//import TripDetails from "@/components/TripDetails.vue";
export default {
  name: "ATripItemDiv",
  emits: "delete-it",
  props: {
    type: TravelEvent
    //TravelEvent: Array
  },
  components: {BTripsDiv},
  data() {
    return {
      showDiv: true,
      isFavorite: false,
      //filteredTrips: [...this],
      keyword: '',
      trips: [
        new TravelEvent(new EventTrip('France Family Trip - 2018',
            'France was great. France was great.  France was great.  France was great.  France was great.  France was great.  France was great.',
            '03/27/2018',
            '04/02/2018',
            '1',
            true,
            [new ArrayOfPhotoGroups [new PhotoGroup
            ('Day One',
                [new ArrayOfPhotos
                (
                    [new Photo('src/images/FR_01.JPG', 'caption-one')],
                    [new Photo('src/images/FR_02.JPG', 'caption-one')],
                    [new Photo('src/images/FR_03.JPG', 'caption-one')],
                    [new Photo('src/images/FR_Eiffel.jpg', 'caption-one')],
                )
                ]
            )
                ],

              [new PhotoGroup
              ('Day Two',
                  [new ArrayOfPhotos
                  (
                      [new Photo('src/images/FR_03.JPG', 'caption-one')],
                      [new Photo('src/images/FR_Eiffel.jpg', 'caption-one')]
                  )
                  ])],

              [new PhotoGroup
              ('Day Three',
                  [new ArrayOfPhotos
                  (
                      [new Photo('src/images/FR_Monet.jpg', 'caption-one')],
                      [new Photo('src/images/FR_Nrmdy.jpg', 'caption-one')],
                  )
                  ])]

            ] //end of arrayOfPhotoGroups
        )),//end new TravelEvent

        new TravelEvent(new EventTrip('Southern Family Trip - 2019',
            'Trip was great',
            '03/24/2019',
            '04/15/2019',
            '2',
            false,
            [new PhotoGroup
            ('Day 1',
                [new Photo('src/images/CR_01.JPG', 'caption-one'),
                  new Photo('src/images/CR_02.JPG', 'caption-two'),
                  new Photo('src/images/CR_03.JPG', 'caption-three')
                ])
            ]
        )),

        new TravelEvent(new EventTrip('Island Family Trip - 2021',
            'We had fun',
            '07/09/2021',
            '07/19/2021',
            '3',
            true
        )),
        new TravelEvent(new EventTrip('Western Family Trip - 2015',
            'Trip was great',
            '03/24/2015',
            '04/02/2015',
            'd',
            true
        )),
        new TravelEvent(new EventTrip('Eastern Family Trip - 2016',
            'Trip was great',
            '03/24/2016',
            '04/02/2016',
            '4',
            false
        )),
      ],
    }
  },
  methods: {
    sort(property) {
      console.log('sorting by', property);
      if (property === 'title') {
        this.trips.sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          }
          console.log('sorting by', property);
          return 0;
        })
      } else if (property === 'returnDate') {
        this.trips.sort((a, b) => {
          console.log('sorting by', property);
          return new Date(a.returnDate) - new Date(b.returnDate);
        })
      } else if (property === 'favorite') {
        this.trips.sort((a, b) => {
          if (a.favorite === true && b.favorite === false) {
            return -1;
          } else if (a.favorite === false && b.favorite === true) {
            return 1;
          }
          console.log(a, property);
          return 0;
        })
      }
    },
    search() {
      let keyword = '';
      if (keyword) {
        return this.trips.title.toLowerCase().includes(this.keyword.toLowerCase())
            || this.trips.tripDescription.toLowerCase().includes(this.keyword.toLowerCase());
      }
    },
  },
}
</script>

<style scoped>

</style>
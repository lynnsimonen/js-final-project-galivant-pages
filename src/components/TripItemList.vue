<template>
  <!-- TODO: COVER PAGE THAT HAS TRIPS LIST INSERTED HERE -->

  <div class="container-fluid page-body ">
    <div row justify-content-center>
      <h1 class="title pt-2">Tell Your Story...</h1>
    </div>

    <TripCard :trips="trips">    </TripCard>

  </div>
</template>

<script>
import TravelEvent from "@/models/travel-event-model";
import {EventTrip, Photo, PhotoGroup} from "@/models/trip-model";
import TripCard from "@/components/TripCard.vue";

export default {
  name: "TripItemList",
  emits: "delete-it",
  props: {
    type: TravelEvent
    //TravelEvent: Array
  },
  components: {TripCard},
  data() {
    return {
      isFavorite: false,
      //filteredTrips: [...this],
      keyword: '',
      trips: [
        new TravelEvent(new EventTrip('France Family Trip - 2018',
            'Paris was cool but not too cold for walking outside along the Seine.  France was great.',
            '03/27/2018',
            '04/02/2018',
            '1',
            true,
            [new PhotoGroup
            ('Day One',
                [new Photo('src/images/FR_01.JPG', 'caption-one'),
                  new Photo('src/images/FR_02.JPG', 'caption-one'),
                  new Photo('src/images/FR_02.JPG', 'caption-one'),
                  new Photo('src/images/FR_02.JPG', 'caption-one'),
                ]),
              new PhotoGroup
              ('Day Two',
                  [new Photo('src/images/FR_03.JPG', 'caption-one'),
                    new Photo('src/images/FR_Eiffel.jpg', 'caption-one'),
                  ]),
              new PhotoGroup
              ('Day Three',
                  [new Photo('src/images/FR_Monet.jpg', 'caption-one'),
                    new Photo('src/images/FR_Nrmdy.jpg', 'caption-one'),
                  ]),
              new PhotoGroup
              ('Day Four',
                  [new Photo('src/images/FR_Monet.jpg', 'caption-one'),
                    new Photo('src/images/FR_Nrmdy.jpg', 'caption-one'),
                  ]), //end last photoGroupArray

            ], //end new PhotoGroup
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
                ]),
              ('Day 2',
                  [new Photo('src/images/CR_01.JPG', 'caption-one'),
                    new Photo('src/images/CR_02.JPG', 'caption-two'),
                    new Photo('src/images/CR_03.JPG', 'caption-three')
                  ]),
              ('Day 3',
                  [new Photo('src/images/CR_01.JPG', 'caption-one'),
                    new Photo('src/images/CR_02.JPG', 'caption-two'),
                    new Photo('src/images/CR_03.JPG', 'caption-three')
                  ]),
              ('Day 4',
                  [new Photo('src/images/CR_01.JPG', 'caption-one'),
                    new Photo('src/images/CR_02.JPG', 'caption-two'),
                    new Photo('src/images/CR_03.JPG', 'caption-three')
                  ]),
            ]
        )),

        new TravelEvent(new EventTrip('Island Family Trip - 2021',
            'We had fun',
            '07/09/2021',
            '07/19/2021',
            '3',
            true,
            [new PhotoGroup(
                'Trip First Days',
                [new Photo('src/images/CR_01.JPG', 'caption-one'),
                  new Photo('src/images/CR_02.JPG', 'caption-two'),
                  new Photo('src/images/CR_03.JPG', 'caption-three')
                ])
            ]
        )),
        new TravelEvent(new EventTrip('Western Family Trip - 2015',
            'Trip was great',
            '03/24/2015',
            '04/02/2015',
            'd',
            true,
            [new PhotoGroup(
                'Trip First Days',
                [new Photo('src/images/CR_01.JPG', 'caption-one'),
                  new Photo('src/images/CR_02.JPG', 'caption-two'),
                  new Photo('src/images/CR_03.JPG', 'caption-three')
                ])
            ]
        )),
        new TravelEvent(new EventTrip('Eastern Family Trip - 2016',
            'Trip was great',
            '03/24/2016',
            '04/02/2016',
            '4',
            false,
            [new PhotoGroup(
                'Trip First Days',
                [new Photo('src/images/CR_01.JPG', 'caption-one'),
                  new Photo('src/images/CR_02.JPG', 'caption-two'),
                  new Photo('src/images/CR_03.JPG', 'caption-three')
                ])
            ]
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
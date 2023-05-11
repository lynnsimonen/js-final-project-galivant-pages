<template>
  <!-- COVER PAGE THAT HAS TRIPS LIST INSERTED HERE -->

  <div class="container-fluid page-body ">
    <!-- <trip-card :trips="trips"></trip-card>-->
    <trip-tabs :trips="trips"></trip-tabs>

  </div>
</template>

<script>
import TravelEvent from "@/models/travel-event-model";
import {EventTrip, Photo, PhotoGroup} from "@/models/trip-model";
import TripTabs from "@/components/TripTabs.vue";
export default {
  name: "TripItemList",
  components: {TripTabs},
  emits: "delete-it",
  props: {
    type: TravelEvent
    //TravelEvent: Array
  },
  data() {
    return {
      isFavorite: false,
      //filteredTrips: [...this],
      keyword: '',
      trips: [
        new TravelEvent(new EventTrip('France Family Trip - 2018',
            'Paris was cool but not too cold for visiting the sites of the City of Lights.  France was great.',
            '03/27/2018',
            '04/02/2018',
            '1',
            true,
            [
              new PhotoGroup
              ('Day One',
                  [new Photo('FR_01.png', 'city'),
                    new Photo('FR_02.png', 'smiles'),
                    new Photo('FR_03.png', 'landmark'),
                    new Photo('FR_Eiffel.png', 'here we are'),
                    new Photo('FR_02.png', 'smiles'),
                    new Photo('FR_03.png', 'landmark'),
                    new Photo('FR_Eiffel.png', 'here we are'),
                    new Photo('FR_02.png', 'smiles'),
                    new Photo('FR_03.png', 'landmark'),
                    new Photo('FR_Eiffel.png', 'here we are'),
                    new Photo('FR_02.png', 'smiles'),
                    new Photo('FR_03.png', 'landmark'),
                    new Photo('FR_Eiffel.png', 'here we are'),
                    new Photo('FR_Eiffel.png', 'here we are'),
                    new Photo('FR_02.png', 'smiles'),
                    new Photo('FR_03.png', 'landmark'),
                    new Photo('FR_Eiffel.png', 'here we are'),
                  ]),
              new PhotoGroup
              ('Day Two',
                  [new Photo('FR_03.png', 'morning'),
                    new Photo('FR_Eiffel.jpg', 'afternoon'),
                  ]),
              new PhotoGroup
              ('Day Three',
                  [new Photo('FR_Monet.jpg', 'later'),
                    new Photo('FR_Nrmdy.jpg', 'later yet'),
                  ]),
              new PhotoGroup
              ('Day Four',
                  [new Photo('FR_Nrmdy.jpg', 'morning last day'),
                    new Photo('FR_Monet.jpg', 'dinner'),
                  ]), //end last photoGroupArray

            ], //end new PhotoGroup
        )),//end new TravelEvent

        new TravelEvent(new EventTrip('Southern Family Trip - 2019',
            'Trip was great',
            '03/24/2019',
            '04/15/2019',
            '2',
            false,
            [
              new PhotoGroup
              ('Day 1',
                  [new Photo('CR_01.png', 'caption-one'),
                    new Photo('CR_02.png', 'caption-two'),
                    new Photo('CR_03.png', 'caption-three')
                  ]),
              new PhotoGroup
              ('Day 2',
                  [new Photo('CR_02.png', 'caption-one'),
                    new Photo('CR_02.png', 'caption-two'),
                    new Photo('CR_03.png', 'caption-three')
                  ]),
              new PhotoGroup
              ('Day 3',
                  [new Photo('CR_03.png', 'caption-one'),
                    new Photo('CR_02.png', 'caption-two'),
                    new Photo('CR_03.png', 'caption-three')
                  ]),
              new PhotoGroup
              ('Day 4',
                  [new Photo('CR_04.png', 'caption-one'),
                    new Photo('CR_02.png', 'caption-two'),
                    new Photo('CR_03.png', 'caption-three')
                  ]),
            ]
        )),

        new TravelEvent(new EventTrip('Island Family Trip - 2021',
            'We had fun',
            '07/09/2021',
            '07/19/2021',
            '3',
            true,
            [
              new PhotoGroup
              ('Trip First Days',
                  [new Photo('HI_01.jpg', 'caption-one'),
                    new Photo('HI_02.jpg','caption-two'),
                    new Photo('HI_03.jpg', 'caption-three')
                  ]),
              new PhotoGroup
              ('Trip Second Days',
                  [new Photo('HI_04.jpg', 'caption-one'),
                    new Photo('HI_05.jpg', 'caption-two'),
                    new Photo('HI_06.jpg', 'caption-three')
                  ]),
              new PhotoGroup
              ('Trip Third Days',
                  [new Photo('HI_07.jpg', 'caption-one'),
                    new Photo('HI_08.jpg', 'caption-two'),
                    new Photo('HI_09.jpg', 'caption-three')
                  ])
            ]
        )),
        new TravelEvent(new EventTrip('Western Family Trip - 2015',
            'Trip was great',
            '03/24/2015',
            '04/02/2015',
            'd',
            true,
            [
              new PhotoGroup
              ('Trip First Days',
                  [new Photo('CR_04.png', 'caption-one'),
                    new Photo('CR_02.png', 'caption-two'),
                    new Photo('CR_03.png', 'caption-three')
                  ]),
              new PhotoGroup
              ('Trip Second Days',
                  [new Photo('CR_01.png', 'caption-one'),
                    new Photo('CR_02.png', 'caption-two'),
                    new Photo('CR_03.png', 'caption-three')
                  ]),
              new PhotoGroup
              ('Trip Third Days',
                  [new Photo('CR_01.png', 'caption-one'),
                    new Photo('CR_02.png', 'caption-two'),
                    new Photo('CR_03.png', 'caption-three')
                  ])]
        )),
        new TravelEvent(new EventTrip('Eastern Family Trip - 2016',
            'Trip was great',
            '03/24/2016',
            '04/02/2016',
            '4',
            false,
            [
              new PhotoGroup
              ('Trip First Days',
                  [new Photo('CR_01.png', 'caption-one'),
                    new Photo('CR_02.png', 'caption-two'),
                    new Photo('CR_03.png', 'caption-three')
                  ]),
              new PhotoGroup
              ('Trip Second Days',
                  [new Photo('CR_02.png', 'caption-one'),
                    new Photo('CR_02.png', 'caption-two'),
                    new Photo('CR_03.png', 'caption-three')
                  ]),
              new PhotoGroup
              ('Trip Third Days',
                  [new Photo('CR_03.png', 'caption-one'),
                    new Photo('CR_02.png', 'caption-two'),
                    new Photo('CR_03.png', 'caption-three')
                  ])
            ]
        )),
      ],
    }
  },
  computed: {},
  methods: {},
  search() {
    let keyword = '';
    if (keyword) {
      return this.trips.title.toLowerCase().includes(this.keyword.toLowerCase())
          || this.trips.tripDescription.toLowerCase().includes(this.keyword.toLowerCase());
    }
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
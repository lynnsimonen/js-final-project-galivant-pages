<template>
  <q-expansion-item class="trip-line-item"
                    expand-separator
                    switch-toggle-side
  >
    <template v-slot:header>
      <q-item-section side>
        <!-- put a star here if the favorite input star is checked -->
        <q-icon
            v-bind:class="isFavorite === item.favorite ? 'white' : 'yellow'"
            name="star"
        ></q-icon>
      </q-item-section>

      <q-item-section>
        <q-item-label> {{ item.title }}</q-item-label>
        <q-item-label caption> {{ item.arrivalDate }} - {{ item.returnDate }}</q-item-label>
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>{{lengthOfTrip(item)}} day trip</q-item-label>
      </q-item-section>

    </template>
    <q-card>
      <q-card-section>
        <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
          <div class="captains-log col-12">
            Memories & Trip Notes
            <q-btn outline style="color: black"
                   flat
                   icon="star"
                   name="star"
                   size="xs"
                   @click="isFav(item)"
                   :class="{
                       'yellow-text' : item.favorite === true,
                       'gray-text' : item.favorite === false,
                     }"
            >{{item.favorite? "FAV" : "Not FAV"}}</q-btn>
          </div>
          <div class="log col-12 q-py-none q-by-none">
            <p q-by-none>
              {{ item.tripDescription }}
            </p>
          </div>
          <span class="edit-delete-box col-12 q-mx-none q-my-none">
                <q-btn
                    class="q-btn-edit"
                    color="grey"
                    dense
                    flat
                    icon="edit"
                    padding="0px 10px"
                    size="sm"
                >
                </q-btn>
                <q-btn
                    class="q-btn-edit"
                    color="red"
                    dense
                    flat
                    icon="delete_forever"
                    padding="0px"
                    margin="0px"
                    size="sm"
                    @click="$emit('delete-trip', item)"
                >
                </q-btn>
            </span>
          <span class="photo-groups col-11">Photo Groups</span>
        </div>
      </q-card-section>
      <!-- Trip Details import PhotoGroupLists - bind here -->
      <photo-group-list></photo-group-list>
    </q-card>
  </q-expansion-item>
</template>

<script>
export default {
  name: "TripDetails"
}
</script>

<style scoped>

</style>
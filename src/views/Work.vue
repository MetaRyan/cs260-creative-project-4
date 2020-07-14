<template>
  <div class="work">
    <v-container
      >
        <Waterfall 
          :options="options">
          <WaterfallItem
            v-for="image in images" 
            :key="image.id"
            class="col-lg-3 col-md-4 col-sm-6 col-xs-12 item">
            <router-link :to="{ name: 'ArtPage', params: { id: image.id } }">
              <div v-if="image.preview === ''">
                <img 
                  :src="'/images/' + image.src"
                />
              </div>
              <div v-else>
                <img 
                  :src="'/images/' + image.preview"
                />
              </div>
            </router-link>
          </WaterfallItem>
        </Waterfall>
      </v-container>
  </div>
</template>

<script>

import {Waterfall, WaterfallItem} from 'vue2-waterfall';

export default {
  name: 'Work',
  components: {
    Waterfall,
    WaterfallItem
  },
  data() {
    return {
      options: {
 
      }
    };
  },
  computed: {
    images() {
      return this.$root.$data.art;
    },
  },
  methods: {
  }
}
</script>

<style scoped>
  .item {
    margin-bottom: 15px;
  }
  .item img {
    border-radius: 5px;
    display: inline-block;
    width: 100%;
  }
</style>
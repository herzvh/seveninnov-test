<template>
    <v-container>
      <v-row justify="center" class="mt-10">
        <v-col cols="12" md="10">
          <v-card
            elevation="5"
            class="card-container pa-0"
          >
            <v-container class="pr-0 pl-4 pt-0 pb-0">
              <v-row no-gutters>
                <v-col cols="12" md="6" class="pb-4 pr-4">
                  <h3 class="font-weight-bold my-4">
                    {{ $t("banner.title") }}
                  </h3>
                  <time-slot-banner 
                    :beginAt="webinarData.begin_at"
                    :endAt="webinarData.end_at"/>
                  <p class="py-4">
                    ALLUMNI VOICES - POSTPONED Finding an Internship during COVID 19 outbreak and turning it towards a full-time position with Rabiga MARCULAN
                  </p>
                  <div class="details-text">
                    <v-icon color="purple">
                      mdi-map-marker
                    </v-icon>
                    <span class="pl-2">
                      {{ address }}
                    </span>
                  </div>
                  <div class="details-text mt-2" v-if="webinarData.is_webinar">
                    <v-icon color="purple">
                      mdi-video-outline 
                    </v-icon>
                    <span class="pl-2">
                      Webinaire en ligne
                    </span>
                  </div>
                  <see-more-btn/>
                </v-col>
                <v-col cols="12" md="6" class="img-container">
                </v-col>
              </v-row>
            </v-container>   
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  import axios from 'axios'
  import TimeSlotBanner from './components/TimeSlotBanner'
  import SeeMoreBtn from './components/SeeMoreBtn'

  export default {
    name: 'HomePage',
    components: {
      TimeSlotBanner,
      SeeMoreBtn
    },
    data: () => ({
      webinarData: {}
    }),
    mounted() {
      this.loadData()
    },
    computed: {
      address() {
        if(this.webinarData) {
          const { _embedded } = this.webinarData || {}
          return `${_embedded?.address?.address || ''}, ${_embedded?.address?.venue || ''}, ${_embedded?.address?.city || ''} ${_embedded?.address?.zip || ''}`
        }
        return ''
      }
    },
    methods: {
      loadData() {
        axios.get('./data/data.json')
          .then(res => this.webinarData = res.data)
          .catch(err => console.error(err))
      },
    }
  }
</script>
<style scoped>
  .card-container.v-card {
    border-radius: 15px;
  }
  .content-container {
    padding-left: 20px;
  }
  .details-text {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #cf9fd7;
  }
  .img-container {
    background-image: url("../../assets/bg.png");
    background-size: cover;
    background-position: center;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
</style>

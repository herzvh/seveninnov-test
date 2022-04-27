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
                <v-col cols="12" md="6" class="pb-4">
                  <h3 class="font-weight-bold my-4">
                    A la une
                  </h3>
                  <v-btn 
                    small 
                    elevation="0"
                    class="hightlight-text mt-2"
                  >
                    JEU 12 NOV - VEN 8 DEC
                  </v-btn>
                  <p class="py-4">
                    ALLUMNI VOICES - POSTPONED Finding an Internship during COVID 19 outbreak and turning it towards a full-time position with Rabiga MARCULAN
                  </p>
                  <div class="details-text">
                    <v-icon color="purple">
                      mdi-map-marker
                    </v-icon>
                    <span class="pl-2">
                      1234, Paris
                    </span>
                  </div>
                  <div class="details-text mt-2">
                    <v-icon color="purple">
                      mdi-video-outline 
                    </v-icon>
                    <span class="pl-2">
                      Webinaire en ligne
                    </span>
                  </div>
                  <v-btn elevation="0" class="mt-12 v-size--large rounded-xl purple white--text rounded">
                    En savoir plus
                  </v-btn>
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
  export default {
    name: 'HomePage',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
<style scoped>
  .card-container.v-card {
    border-radius: 15px;
  }
  .content-container {
    padding-left: 20px;
  }
  .hightlight-text {
    color: #cf9fd7 !important;
    background-color: #eddfef;
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

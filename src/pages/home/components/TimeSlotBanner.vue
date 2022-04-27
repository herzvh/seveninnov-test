<template>
    <v-container 
        small 
        elevation="0"
        class="mt-2 v-btn__content text-wrap"
        :style="{ color, backgroundColor}"
    >
        {{ beginAtMoment }} - {{ endAtMoment }}
    </v-container>
</template>
<script>
import moment from 'moment'

export default {
    // props: ['beginAt', 'endAt', 'color', 'backgroundColor']
    props: {
        /**
         * Date et heure début du webinaire
         */
        beginAt: {
            type: String,
            default: moment().format('llll')
        },
        /**
         * Date et heure fin du webinaire
         */
        endAt: {
            type: String,
            default: moment().format('llll')
        },
        /**
         * Couleur du texte par défaut c'est #cf9fd7
         */
        color: {
            type: String,
            default: '#cf9fd7'
        },
        /**
         * Coleur de fond, par défaut c'est #eddfef
         */
        backgroundColor: {
            type: String,
            default: '#eddfef'
        }
    },
    computed: {
        beginAtMoment() {
            return moment(this.beginAt).format('llll')
        },
        endAtMoment() {
            return moment(this.endAt).format('llll')
        }
    }
}
</script>
<style scoped>
    .v-btn__content {
        width: 100%; 
        white-space: normal;
    }
</style>
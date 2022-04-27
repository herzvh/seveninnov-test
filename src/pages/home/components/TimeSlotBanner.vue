<template>
    <v-btn 
        small 
        elevation="0"
        class="mt-2"
        :style="{ color, backgroundColor}"
    >
        {{ beginAtMoment }} - {{ endAtMoment }}
    </v-btn>
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
            default: moment().format('LLLL')
        },
        /**
         * Date et heure fin du webinaire
         */
        endAt: {
            type: String,
            default: moment().format('LLLL')
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
            return moment(this.beginAt).format('LLLL')
        },
        endAtMoment() {
            return moment(this.endAt).format('LLLL')
        }
    }
}
</script>
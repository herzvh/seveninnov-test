<template>
    <div
        class="mt-2 v-btn__content"
        :style="{ color, backgroundColor}"
    >
        {{ beginAtMoment }} - {{ endAtMoment }}
    </div>
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
            default: moment().format('LL')
        },
        /**
         * Date et heure fin du webinaire
         */
        endAt: {
            type: String,
            default: moment().format('LL')
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
            return moment(this.beginAt).format('LL')
        },
        endAtMoment() {
            return moment(this.endAt).format('LL')
        }
    }
}
</script>
<style scoped>
    .v-btn__content {
        width: 250px !important;
        padding: 10px;
        white-space: normal;
    }
</style>
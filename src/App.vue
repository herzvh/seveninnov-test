<template>
  <v-app>
    <v-main>
      <HomePage/>
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './pages/home/Index';

export default {
  name: 'App',

  components: {
    HomePage,
  },

  data: () => ({
    //
  }),
};
</script>

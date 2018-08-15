<template>
  <v-app>
    <Navigation/>

    <v-content>
         <router-view></router-view>
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Navigation,
    Footer
  }
}
</script>
<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
          <h1>Hello, my name is Ivan!</h1>
              <v-avatar size="125px">
                <img
                  class="img-circle elevation-7 mb-1"
                  src="../assets/my_photo.jpg"
                >
              </v-avatar>
          <p>
            I am a Data Scientist from Moscow.
            <br>I create machine learning models with Python and data pipelines with Apache Spark stack.
            <br> You can contact me via <a href="mailto:renardeinside@gmail.com" style="text-decoration:none"><v-icon size="15px">email</v-icon> email</a>, or via links at the end of the page.
            <br> Also, take a look on my <router-link to="/posts">posts</router-link> or <router-link to="/projects">projects</router-link>.
          </p>
          
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>
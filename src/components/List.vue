<template>
  <v-container>
    <v-layout row >
      <v-flex>
        <h4>Gun me deze.</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label='Title'
                id='title'
                required>
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-textarea
                box
                value="omschrijving"
                label='Omschrijving'
                id='omschrijving'>
              </v-textarea>
            </v-flex>

          </v-layout>
        </form>
      </v-flex>
    </v-layout> 
    
  </v-container>
</template>

<script>
</script>

<style>
</style>

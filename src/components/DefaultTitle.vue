<template>
    <div class="d-flex justify-center">
      <v-card flat >
        <v-card-text  dense class="text-h6 text-md-h5 text-lg-h4">{{ title }}</v-card-text>
        <v-card-text >
          {{ subtitle }}
        </v-card-text>
      </v-card>
    </div>
  </template>
  <script>
    export default {
      name: 'PageIndex',
        props:{
            subtitle: String,
            title: String,
        },
        data(){
            return{

            }
        }
    }
  </script>
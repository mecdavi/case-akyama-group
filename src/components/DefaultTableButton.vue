<template>
  <v-btn
    flat
    rounded="xl"
    color="no"
    size="25"
    sm="size=15"
    :title="label"
    @click="id? deleteItem(id) : $router.push(route) "
  >
   <v-icon :color="color">
    {{ icon }}
   </v-icon>
  </v-btn>
  </template>
  <script>
    export default {
      name: 'PageIndex',
        props:{
            icon: String,
            color: String,
            label:String,
            route:String,
            id:Number,
        },
        methods:{
          deleteItem(id){
                let dataItem = localStorage.getItem(id)
                dataItem = JSON.parse(dataItem)
                dataItem.ativo = false
                localStorage.removeItem(id)
                localStorage.setItem(id,JSON.stringify(dataItem))

                this.$router.push(`/${this.route}`)
            }
        }
    }
  </script>
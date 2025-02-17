<template>
    <v-snackbar
       :model-value="show"
       :color="color"
       :message="message"
    >
        {{ message }}
    </v-snackbar>
</template>
<script>
export default {
    props:{
        color:String,
        message:String,
        show:Boolean
    },
}
</script>
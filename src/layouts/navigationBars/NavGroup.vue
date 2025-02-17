<template>
    <v-list-subheader color="darkText" class="smallCap text-uppercase text-subtitle-2 mt-5 font-weight-bold">{{ item.header}}</v-list-subheader>
</template>
<script >
    export default{
        props:{
            item: Object
        }
    }
</script>
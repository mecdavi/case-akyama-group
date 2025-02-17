<template>
    <v-container>
        <v-data-table-server
            :headers="headers"
            :items="data"
            height="400"
            :items-length="pagination"
        >
            <template v-slot:top>
                
                <VToolbar
                        class="mb-2 text-"
                        color="secondary"
                        dark
                        flat
                        align="center"
                    >
                    <VToolbarTitle> {{ title }}</VToolbarTitle>
                </VToolbar>
                <div>
                    <v-btn 
                            text="Adicionar" 
                            prepend-icon="mdi-plus"
                            class="ma-2"
                            color="primary"
                            variant="outlined"
                            v-if="!this.$route.meta.fdisable"
                            @click="$router.push(`/${route}/edit/new`)"
                            >
                    </v-btn>
                </div>
            </template>
            <template v-slot:item.actions="{ item }">
                <td class="text-left">
                    <DefaultTableButton
                        icon="mdi-eye"
                        color="primary"
                        label="Visualizar"
                        :route="`/${route}/show/${item.id}`"
                    >
                    </DefaultTableButton>
                    <DefaultTableButton
                        icon="mdi-pencil"
                        color="secondary"
                        label="Editar"
                        :route="`/${route}/edit/${item.id}`"
                    >
                    </DefaultTableButton>
                    <DefaultTableButton
                        icon="mdi-delete"
                        color="red"
                        label="Deletar"
                        :route="route"
                        :id="item.id"
                    >
                    </DefaultTableButton>
              </td>
            </template>
        </v-data-table-server>
    </v-container>
</template>
<script>
   import DefaultTableButton from './DefaultTableButton.vue';
    export default {
        name: 'PageIndex',
        components:{
            DefaultTableButton
        },
        props:{
            data: Array,
            headers: Array,
            title:String,
            pagination:Number,
            route:String,
        },
    }

</script>
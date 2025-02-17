<template >
    <v-container >
        <v-responsive>
            <v-row>
                <v-col>
                    <DefaultTable title="Listagem de notas de provas" route="nota-prova" :headers="headers" :data="dataTable" :pagination="pagination" ></DefaultTable>
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>    
</template>
<script>
    import DefaultTable from '@/components/DefaultTable.vue';
    import DefaultTitle from '@/components/DefaultTitle.vue';
    import utils from '@/boot/utils';
    export default {
        name: 'PageIndex',
        mixins:[utils],
        componentes:{
            DefaultTable,
            DefaultTitle
        },
        data() {
            return {
                pagination:0,
                headers:[
                    { title: 'Ações', align: 'start', key: 'actions' },
                    { title: 'Nota', align: 'start', key: 'nota' },
                    { title: 'Prova', align: 'start', key: 'prova_id' },
                ],
                dataTable:[]
            }
        },
        created(){
            this.dataTable = this.searchItems('nota-prova')
            this.pagination = this.dataTable.length
        }
    }

</script>
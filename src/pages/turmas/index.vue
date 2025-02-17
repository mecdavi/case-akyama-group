<template >
    <v-container >
        <v-responsive>
            <v-row>
                <v-col>
                    <DefaultTable title="Listagem de Turmas" route="turmas" :headers="headers" :data="dataTable" :pagination="pagination" ></DefaultTable>
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>    
</template>
<script>
    import DefaultTable from '@/components/DefaultTable.vue';
    import DefaultTitle from '@/components/DefaultTitle.vue';
    import turmasData from './turmasData';
    import utils from '@/boot/utils';
    export default {
        name: 'PageIndex',
        mixins:[turmasData,utils],
        componentes:{
            DefaultTable,
            DefaultTitle
        },
        data() {
            return {
                pagination:0,
                headers:[
                    { title: 'Ações', align: 'start', key: 'actions' },
                    { title: 'Descrição', align: 'start', key: 'descricao' },
                ],
                dataTable:[]
            }
        },
        created(){
            this.dataTable = this.searchItems('turmas')
            this.pagination = this.dataTable.length
        }
    }

</script>
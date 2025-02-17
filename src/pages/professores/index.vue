<template >
    <v-container >
        <v-responsive>
            <v-row>
                <v-col>
                    <DefaultTable title="Listagem de Professores" route="professores" :headers="headers" :data="dataTable" :pagination="pagination" ></DefaultTable>
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
                    { title: 'Nome', align: 'start', key: 'nome' },
                    { title: 'Data de nascimento', align: 'start', key: 'data_nascimento' },
                    { title: 'Telefone', align: 'start', key: 'telefone' },
                ],
                dataTable:[]
            }
        },
        created(){
            this.dataTable = this.searchItems('professores')
            this.pagination = this.dataTable.length
        }
    }

</script>
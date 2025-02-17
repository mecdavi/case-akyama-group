<template >
    <v-container>
        <v-responsive>
            <DefaultTitle :title="'Cadastro de Turmas'" :subtitle="'Crie ou altere o cadastro de uma Turma'" ></DefaultTitle>
            <v-card class="mt-5">
                <v-card-actions>
                    <v-btn 
                        text="Gravar" 
                        prepend-icon="mdi-content-save"
                        color="primary"
                        variant="outlined"
                        @click="save()"
                        v-if="!this.$route.meta.fdisable"
                        >
                    </v-btn>
                    <v-btn 
                        text="Editar" 
                        prepend-icon="mdi-pencil"
                        color="secondary"
                        variant="outlined"
                        @click="$router.push('/turmas/edit/'+ data.id)"
                        v-if="this.$route.meta.fdisable"
                        >
                    </v-btn>
                    <v-btn 
                        text="Cancelar" 
                        color="red"
                        variant="outlined"
                        to="/turmas"
                        >
                    </v-btn>
                </v-card-actions>
                <v-card-item>
                    <v-row>
                        <v-col cols="12" lg="7" md="12" >
                            <v-text-field
                                v-model="data.descricao"
                                hide-details="auto"
                                label="Descrição"
                                persistent-placeholder
                                :disabled="this.$route.meta.fdisable"
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>    
                </v-card-item>
            </v-card>
            <notifyUser color="green" message="Dados gravados com sucesso!" :show="show" />
        </v-responsive>
    </v-container>    
</template>
<script>
    import alunosData from './turmasData';
    import notifyUser from '@/components/notifyUser.vue';
    export default {
    name: "PageIndex",
        mixins: [alunosData],
        components:{
            notifyUser
        },
        data(){
            return{
                show:false
            }
        }
    }
</script>
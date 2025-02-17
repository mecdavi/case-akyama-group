<template >
    <v-container>
        <v-responsive>
            <DefaultTitle :title="'Cadastro de Aluno'" :subtitle="'Crie ou altere o cadastro de produto'" ></DefaultTitle>
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
                        @click="$router.push('/alunos/edit/'+ data.id)"
                        v-if="this.$route.meta.fdisable"
                        >
                    </v-btn>
                    <v-btn 
                        text="Cancelar" 
                        color="red"
                        variant="outlined"
                        to="/alunos"
                        >
                    </v-btn>
                </v-card-actions>
                <v-card-item>
                    <v-row>
                        <v-col cols="12" lg="7" md="12" >
                            <v-text-field
                                v-model="data.nome"
                                hide-details="auto"
                                label="Nome"
                                persistent-placeholder
                                :disabled="this.$route.meta.fdisable"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" lg="2" md="6">
                            <v-text-field
                                v-model="data.data_nascimento"
                                hide-details="auto"
                                label="Data de nascimento"
                                persistent-placeholder
                                :disabled="this.$route.meta.fdisable"

                            >
                            </v-text-field>
                            <!-- <v-date-input
                                v-model="data.date"
                                label="Data de nascimento"
                                persistent-placeholder
                            >
                            </v-date-input> -->
                        </v-col>
                        <v-col cols="12" lg="3" md="6">
                            <v-select 
                                v-model="data.turma_id" 
                                :items="itemsTurma"
                                item-title="item"
                                item-value="value"
                                label="Turma"
                                clearable="true"
                                :disabled="this.$route.meta.fdisable"
                            >
                            </v-select>
                        </v-col>
                    </v-row>    
                    <v-row>
                        <v-col cols="12" lg="7" md="7">
                            <v-text-field
                                v-model="data.nome_responsavel"
                                hide-details="auto"
                                label="Nome do Responsável"
                                persistent-placeholder
                                :disabled="this.$route.meta.fdisable"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" lg="3" md="5">
                            <v-text-field
                                v-model="data.telefone_responsavel"
                                hide-details="auto"
                                label="Telefone do responsável"
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
    import alunosData from './alunosData';
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
<template >
    <v-container>
        <v-responsive>
            <DefaultTitle :title="'Cadastro de Provas'" :subtitle="'Crie ou altere o cadastro de uma Prova'" ></DefaultTitle>
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
                        @click="$router.push('/provas/edit/'+ data.id)"
                        v-if="this.$route.meta.fdisable"
                        >
                    </v-btn>
                    <v-btn 
                        text="Cancelar" 
                        color="red"
                        variant="outlined"
                        to="/provas"
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
                            <v-select 
                                v-model="data.professor_id" 
                                :items="itemsProfessores"
                                item-title="item"
                                item-value="value"
                                label="Professor"
                                clearable="true"
                                :disabled="this.$route.meta.fdisable"
                            >
                            </v-select>
                        </v-col>
                        <v-col cols="12" lg="3" md="5" >
                            <v-select 
                                v-model="data.materia_id" 
                                :items="itemsMaterias"
                                item-title="item"
                                item-value="value"
                                label="Matéria"
                                clearable="true"
                                :disabled="this.$route.meta.fdisable"
                            >
                            </v-select>
                        </v-col>
                    </v-row>
                </v-card-item>
            </v-card>
            <notifyUser color="green" message="Dados gravados com sucesso!" :show="show" />
        </v-responsive>
    </v-container>    
</template>
<script>
    import provasData from './provasData';
    import notifyUser from '@/components/notifyUser.vue';
    export default {
    name: "PageIndex",
        mixins: [provasData],
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
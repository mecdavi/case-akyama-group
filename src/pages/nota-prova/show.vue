<template >
    <v-container>
        <v-responsive>
            <DefaultTitle :title="'Cadastro de notas'" :subtitle="'Crie ou altere o cadastro de uma nota'" ></DefaultTitle>
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
                        @click="$router.push('/nota-prova/edit/'+ data.id)"
                        v-if="this.$route.meta.fdisable"
                        >
                    </v-btn>
                    <v-btn 
                        text="Cancelar" 
                        color="red"
                        variant="outlined"
                        to="/nota-prova"
                        >
                    </v-btn>
                </v-card-actions>
                <v-card-item>
                    <v-row>
                        <v-col cols="12" lg="6" md="6">
                            <v-select 
                                v-model="data.aluno_id" 
                                :items="itemsAlunos"
                                item-title="item"
                                item-value="value"
                                label="Aluno"
                                clearable="true"
                                :disabled="this.$route.meta.fdisable"
                            >
                            </v-select>
                        </v-col>
                        <v-col cols="12" lg="2" md="6" >
                            <v-text-field
                                v-model="data.nota"
                                hide-details="auto"
                                label="Nota"
                                persistent-placeholder
                                :disabled="this.$route.meta.fdisable"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" lg="2" md="6">
                            <v-select 
                                v-model="data.prova_id" 
                                :items="itemsProvas"
                                item-title="item"
                                item-value="value"
                                label="Provas"
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
    import provasData from './notaProvaData';
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
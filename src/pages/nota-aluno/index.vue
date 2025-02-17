<template >
    <v-container>
        <v-responsive>
            <v-row>
                <v-col>
                    <DefaultTitle :title="'Acompanhamento de média por aluno'" :subtitle="'Acompanhe a média dos alunos conforme as notas vão sendo lançadas'" ></DefaultTitle>
                    <v-card class="mt-5">
                        <GChart
                            type="ColumnChart"
                            :data="barData"
                            :options="baroptions"
                            style="display: block; margin: 0 auto;"
                        />
                    </v-card>
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>    
</template>
<script>
    import DefaultTable from '@/components/DefaultTable.vue';
    import DefaultTitle from '@/components/DefaultTitle.vue';
    import utils from '@/boot/utils';
    import { GChart } from 'vue-google-charts'
    export default {
        name: 'PageIndex',
        mixins:[utils],
        componentes:{
            DefaultTable,
            DefaultTitle,
            GChart
        },
        data() {
            return {
                barData:[
                    ['Tasks', 'Média'],
                    [,0]
                    
                ],
                dataNotaProva:'',
                dataAluno:{},
                baroptions:{
                    title:"Nota média X Aluno",
                    chartArea: { width: "70%", height: "70%"},
                    hAxis: {
                    title: 'Alunos',
                    textStyle: {
                        color: '#01579b',
                        fontSize: 10,
                        fontName: 'Arial',
                        bold: true,
                        italic: true
                    },
                    titleTextStyle: {
                        color: '#01579b',
                        fontSize: 16,
                        fontName: 'Arial',
                        bold: false,
                        italic: true
                    }
                    },
                    vAxis: {
                    title: 'Média',
                    textStyle: {
                        color: '#1a237e',
                        fontSize: 12,
                        bold: true
                    },
                    titleTextStyle: {
                        color: '#1a237e',
                        fontSize: 10,
                        bold: true
                    }
                }
                }
            }
        },
        methods:{
            loadDataChart(){
                this.dataNotaProva = this.searchItems('nota-prova')
                let uniqueValue = []
                
                if(this.dataNotaProva && this.dataNotaProva.length>0)this.barData = [['Tasks', 'Média']]
                for(let item of this.dataNotaProva){
                    if(typeof item.aluno_id == 'number' && !uniqueValue.includes(item.aluno_id)){
                        let count = 0
                        let medNota
                        medNota = this.dataNotaProva.reduce(function(acumulador,atual){
                            if(atual.aluno_id == item.aluno_id){
                                acumulador = acumulador + parseFloat(atual.nota)
                                count++
                            }
                            return acumulador
                        },0)
                        let dataAluno ={}
                        let mediaReal = medNota/count
                        dataAluno =  this.searchData(item.aluno_id,dataAluno)
                        this.barData.push([dataAluno.nome,{ v: parseFloat(mediaReal), f:`${this.formatarValor(mediaReal,'')}`}])
                        uniqueValue.push(item.aluno_id)
                    }
                }
            }
        },
        created(){
            this.loadDataChart()

        }
    }

</script>
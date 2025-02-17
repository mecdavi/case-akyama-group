    import DefaultTitle from '@/components/DefaultTitle.vue';
    import utils from '@/boot/utils';
    export default {
        mixins: [utils],
        componentes:{
            DefaultTitle
        },
        data() {
            return {
                data:{
                    id:'',
                    descricao:'',
                    turma_id:'',
                    materia_id:'',
                    professor_id:'',
                    route:'provas',
                    ativo:true,
                },
                itemsTurma:[
                    {item:'Teste Turma' ,value:'1'}
                ],
                itemsMaterias:[
                    {item:'Teste Matéria' ,value:'1'}
                ],
                itemsProfessores:[
                    {item:'Teste Professor' ,value:'1'}
                ]
             
            }
        },
        methods:{
            save(){
                if(this.data.id){
                    localStorage.removeItem(this.data.id)
                    localStorage.setItem(this.data.id,JSON.stringify(this.data))
                }else{
                    this.data.id = localStorage.length
                    localStorage.setItem(localStorage.length,JSON.stringify(this.data))
                }
                this.show = true
                this.$router.push('/provas/show/'+this.data.id)
            },
            searchProva(){
                let dataItem = localStorage.getItem(this.$route.params.id)
                if(dataItem){
                    this.data = JSON.parse(dataItem)
                }
            }
        },
        async created(){
            this.searchProva()
            this.optionsItems('turmas',this.itemsTurma)
            this.optionsItems('professores',this.itemsProfessores)
            this.optionsItems('materias',this.itemsMaterias)
        }
    }

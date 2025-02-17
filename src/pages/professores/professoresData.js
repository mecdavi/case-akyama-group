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
                    nome:'',
                    data_nascimento:'',
                    telefone:'',
                    materia_id:'',
                    turma_id:'',
                    route:'professores',
                    ativo:true,
                },
                itemsTurma:[
                    {item:'Teste Turma' ,value:'1'}
                ],
                itemsMaterias:[
                    {item:'Teste Matéria' ,value:'1'}
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
                this.$router.push('/professores/show/'+this.data.id)
            }
        },
        async created(){
            this.searchData(this.$route.params.id,this.data)
            this.optionsItems('turmas',this.itemsTurma)
            this.optionsItems('materias',this.itemsMaterias)
        }
    }

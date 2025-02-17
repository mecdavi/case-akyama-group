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
                    nota:'',
                    prova_id:'',
                    aluno_id:'',
                    route:'nota-prova',
                    ativo:true,
                },
                itemsProvas:[
                    {item:'Teste Prova' ,value:'1'}
                ],
                itemsAlunos:[
                    {item:'Teste Aluno' ,value:'1'}
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
                this.$router.push('/nota-prova/show/'+this.data.id)
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
            this.optionsItems('provas',this.itemsProvas)
            this.optionsItems('alunos',this.itemsAlunos)
        }
    }

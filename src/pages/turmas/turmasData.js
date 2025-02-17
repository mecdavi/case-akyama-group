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
                    // turma_id:'',
                    route:'turmas',
                    ativo:true,
                },
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
                this.$router.push('/turmas/show/'+this.data.id)
            }
        },
        async created(){
            this.searchData(this.$route.params.id,this.data)
        }
    }

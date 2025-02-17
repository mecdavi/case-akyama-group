export default {
    name: 'PageIndex',
    data() {
        return {
        }
    },
    methods:{
        searchItems(route){
            let data = []
            for (let i = 0; i <= localStorage.length; i++) {
                let itemLocal = localStorage.getItem(i)
                itemLocal = JSON.parse(itemLocal)
                if(itemLocal?.route == route && itemLocal?.ativo) data.push(itemLocal);
            }
            return data
        },
        optionsItems(route,items){
            let allData = this.searchItems(route)
            allData.map(item=>{
                items.push({item:item.descricao ||item.nome, value:item.id})
            })
            return items
        },
        searchData(id,data){
            let dataItem = localStorage.getItem(id)
            if(dataItem){
                data = JSON.parse(dataItem)
            }
            return data
        },
        formatarValor(valor, prefixo = '', casas = 2) {
            if (valor=='' || valor == undefined || valor == null ) valor = 0.00
            if(typeof valor == 'string'){
               valor = valor.replace(',','.')
               valor = parseFloat(valor)
            }
           
            if (isNaN(valor)) valor = 0.00
            // valor = this.arredondar(valor, casas)
            let formatter
            if(prefixo && prefixo != '' && typeof prefixo != 'number'){
                formatter = new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL' ,
                    minimumFractionDigits: casas,
                });
            }
            else{
                formatter = new Intl.NumberFormat('pt-BR', {
                    minimumFractionDigits: casas,
                    maximumFractionDigits: casas
                });
            }
            return formatter.format(valor.toPrecision(99))
            
        },
    },
}

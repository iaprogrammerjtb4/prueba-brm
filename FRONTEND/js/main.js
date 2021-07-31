const app = Vue.createApp({
    el:'#app',    
    template:
    /*html*/
    `
    <div class="container bg-ligth">
        <div class="row">
            <app-login v-if="isLogin"></app-login>
            <app-dashboard v-if="isDashBoard"></app-dashboard>
        </div>
    </div>    
    `,
    data(){
        return{
            isLogin:true,
            isDashBoard:false,            
            session:'',
            Welcome:'',
        }
    },
    methods:{
        sessionKiller:function(){
            /**killer sessión API */
            this.isDashBoard = false
            this.isLogin = true
        },    
        sessionInit:function(){            
            /**login API */
            this.isDashBoard = true
            this.isLogin = false            
        },
        defindWelcome:function(){
            if(this.session=='Admin'){
                this.Welcome='Hola Admin'
            } else{
                this.Welcome='Hola agente,recuerda gestionar tus horarios'
            }                        
        },
    },
    // beforeMount(){

    // },
    // mounted(){

    // },
})

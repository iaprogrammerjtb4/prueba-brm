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
        }
    },
    // beforeMount(){

    // },
    // mounted(){

    // },
})

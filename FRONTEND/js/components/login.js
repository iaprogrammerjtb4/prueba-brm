app.component('app-login',{        
    template:
    /*html*/
    `	<main class="d-flex w-100 app-login-class">
            <div class="container d-flex flex-column">
                <div class="row vh-100">
                    <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                        <div class="d-table-cell align-middle">

                            <div class="text-center mt-4">
                                <h1 class="h2">RolUsuario / by iaprogrammer</h1>
                                <p class="lead">front-end</p>
                            </div>

                            <div class="card">
                                <div class="card-body">
                                    <div class="m-sm-4">
                                        <div class="text-center">
                                            <img :src="imgLogin" alt="iaprogrammer" class="img-fluid rounded-circle" width="132" height="132" />
                                        </div>
                                        <form>                                        
                                            <div class="mb-3">
                                                <label class="form-label">Correo:</label>
                                                <input class="form-control form-control-lg" type="email" v-model="user" placeholder="Ingresa tu correo" />
                                                <div v-show="isInvalidUser" class="invalid-feedback">Ingrese el email</div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Contraseña:</label>
                                                <input class="form-control form-control-lg" type="password" v-model="password" placeholder="Ingresa contraseña" />                                                
                                                <div v-show="isInvalidPass" class="invalid-feedback">Ingrese la contraseña</div>
                                            </div>
                                            <div class="row text-center mt-3">
                                                <a v-on:click="validForm" class="col-5 m-2 m-auto btn btn-lg btn-primary">Entrar Admin</a>                                                
                                                <a v-on:click="validFormD" class="col-5 m-2 m-auto btn btn-lg btn-info">Entrar Agente</a>                                                
                                            </div>
                                            <div v-show="isErrorLogin" class="invalid-feedback">{{ msgErrorLogin }}</div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    `,    
    data(){
        return{
            imgLogin:'./img/logojei.jpeg',    
            user:'',
            password:'',
            msgErrorLogin:'',
            isInvalidUser:false,
            isInvalidPass:false,  
            isErrorLogin:false              
        }
    },
    methods:{        
        goLogin(){            
            var user = this.user
            var password = this.password                      
        },
        validForm(){            
            if(this.user == '' || this.user < 4){
                this.isInvalidUser = true
                return false
            }else{
                this.isInvalidUser = false                
            }
            if(this.password == '' || this.password < 4){
                this.isInvalidPass = true
                return false;
            }else{
                this.isInvalidPass = false
            }            
            var data = {
                'user':this.user,
                'pass':this.password
            }            
            this.$root.session = 'Admin'
            this.$root.defindWelcome()
            this.$root.sessionInit()
        },
        validFormD(){            
            if(this.user == '' || this.user < 4){
                this.isInvalidUser = true
                return false
            }else{
                this.isInvalidUser = false                
            }
            if(this.password == '' || this.password < 4){
                this.isInvalidPass = true
                return false;
            }else{
                this.isInvalidPass = false
            }            
            var data = {
                'user':this.user,
                'pass':this.password
            }            
            this.$root.session = 'Agente'
            this.$root.defindWelcome()
            this.$root.sessionInit()
        },
        
    }
})

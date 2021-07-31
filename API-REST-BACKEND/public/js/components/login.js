app.component('app-login',{        
    template:
    /*html*/
    `	<main class="d-flex w-100 app-login-class">
            <div class="container d-flex flex-column">
                <div class="row vh-100">
                    <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                        <div class="d-table-cell align-middle">

                            <div class="text-center mt-4">
                                <h1 class="h2">Usuarios by iaprogrammer</h1>
                                <p class="lead">
                                    Edición de usarios - prueba Dyalogo
                                </p>
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
                                                <input class="form-control form-control-lg" type="email" v-model="user" placeholder="Enter your email" />                                                
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Contraseña:</label>
                                                <input class="form-control form-control-lg" type="password" v-model="password" placeholder="Enter your password" />                                                                                                
                                            </div>
                                            <div class="text-center mt-3">
                                                <button v-on:click="this.$parent.sessionInit" class="btn btn-lg btn-primary">Entrar</button>                                                
                                            </div>
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
        }
    },
    methods:{                
    }
})

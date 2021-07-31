app.component('app-schedule',{
    template:
    /*html*/
    `<div class="col-xl-12 col-xxl-12 d-flex">
        <div class="w-100">
            <div class="row">
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col mt-0">
                                    <h5 class="card-title">Lunes</h5>
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right">INICIO:</i></span>
                                    <br>
                                    <input type="time" :value="HorIniLun"/>
                                    <br>
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right">FIN:</i></span>
                                    <br>
                                    <input type="time" :value="HorFinLun"/>
                                </div>                                
                            </div>                            
                        </div>
                    </div>                    
                </div>
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col mt-0">
                                    <h5 class="card-title">Martes</h5>
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right">INICIO:</i></span>
                                    <br>
                                    <input type="time" :value="HorIniMar"/>
                                    <br>
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right">FIN:</i></span>
                                    <br>
                                    <input type="time" :value="HorFinMar"/>
                                </div>                                
                            </div>                            
                        </div>
                    </div>                    
                </div>
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col mt-0">
                                    <h5 class="card-title">Miercoles</h5>
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right">INICIO:</i></span>
                                    <br>
                                    <input type="time" :value="HorIniMie"/>
                                    <br>
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right">FIN:</i></span>
                                    <br>
                                    <input type="time" :value="HorFinMie"/>
                                </div>                                
                            </div>                            
                        </div>
                    </div>                    
                </div>
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col mt-0">
                                    <h5 class="card-title">Jueves</h5>
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right">INICIO:</i></span>
                                    <br>
                                    <input type="time" :value="HorIniJue"/>
                                    <br>
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right">FIN:</i></span>
                                    <br>
                                    <input type="time" :value="HorFinJue"/>
                                </div>                                
                            </div>                            
                        </div>
                    </div>                    
                </div>
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col mt-0">
                                    <h5 class="card-title">Viernes</h5>
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right">INICIO:</i></span>
                                    <br>
                                    <input type="time" :value="HorIniVie"/>
                                    <br>
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right">FIN:</i></span>
                                    <br>
                                    <input type="time" :value="HorFinVie"/>
                                </div>                                
                            </div>                            
                        </div>
                    </div>                    
                </div>
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col mt-0">
                                    <h5 class="card-title">Sábado</h5>
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right">INICIO:</i></span>
                                    <br>
                                    <input type="time" :value="HorIniSab"/>
                                    <br>
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right">FIN:</i></span>
                                    <br>
                                    <input type="time" :value="HorFinSab"/>
                                </div>                                
                            </div>                            
                        </div>
                    </div>                    
                </div>
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col mt-0">
                                    <h5 class="card-title">Domingo</h5>
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right">INICIO:</i></span>
                                    <br>
                                    <input type="time" :value="HorIniDom"/>
                                    <br>
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right">FIN:</i></span>
                                    <br>
                                    <input type="time" :value="HorFinDom"/>
                                </div>                                
                            </div>                            
                        </div>
                    </div>                    
                </div>
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col mt-0">
                                    <h5 class="card-title">Festivos</h5>
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right">INICIO:</i></span>
                                    <br>
                                    <input type="time" :value="HorIniFes"/>
                                    <br>
                                    <span class="text-danger"> <i class="mdi mdi-arrow-bottom-right">FIN:</i></span>
                                    <br>
                                    <input type="time" :value="HorFinFes"/>
                                </div>                                
                            </div>                            
                        </div>
                    </div>                    
                </div>
                
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            HorIniLun:'12:29',
            HorFinLun:'23:29',
            HorIniMar:'12:29',
            HorFinMar:'12:29',
            HorIniMie:'12:29',
            HorFinMie:'12:29',
            HorIniJue:'12:29',
            HorFinJue:'12:29',
            HorIniVie:'12:29',
            HorFinVie:'12:29',
            HorIniSab:'12:29',
            HorFinSab:'12:29',
            HorIniDom:'12:29',
            HorFinDom:'12:29',
            HorIniFes:'12:29',
            HorFinFes:'12:29',
        }
    }
})
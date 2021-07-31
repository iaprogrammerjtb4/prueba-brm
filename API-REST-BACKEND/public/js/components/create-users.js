app.component('app-create-users',{
    template:
    /*html*/
    `<div class="col-md-12 col-xl-12">
        <div class="card">
            <div class="card-header">
                <h5 class="card-title mb-0">Crear usuario:</h5>
            </div>            
            <div class="row card-body h-100">                                                                             
                <div class="col-12 col-sm-6 col-md-4 card">                        
                    <div class="card-body">
                        <label for="Name">Nombre:</label>
                        <input id="Name" type="text" :value="Name" class="form-control">
                        <label for="Email">Correo:</label>
                        <input id="Email" type="Email" :value="Email" class="form-control">
                        <label for="Password">Contraseña:</label>
                        <input id="Password" type="text" :value="Password" class="form-control">
                    </div>
                </div> 
                <div class="col-12 col-sm-6 col-md-4 card">                        
                    <div class="card-body">
                        <label for="Codigo">Codigo:</label>
                        <input id="Codigo" type="text" :value="Codigo" class="form-control">
                        <label for="Cargo">Cargo:</label>
                        <input id="Cargo" type="text" :value="Cargo" class="form-control">
                        <label for="IndPerCap">IndPerCap:</label>
                        <input id="IndPerCap" type="text" :value="IndPerCap" class="form-control">
                    </div>
                </div>                    
                <div class="col-12 col-sm-6 col-md-4 card">                        
                    <div class="card-body">
                        <label for="ConsIntePERUSU">ConsIntePERUSU:</label>
                        <input id="ConsIntePERUSU" type="text" :value="ConsIntePERUSU" class="form-control">                            
                        <label for="InMoCoPa">InMoCoPa:</label>
                        <input id="InMoCoPa" type="text" :value="InMoCoPa" class="form-control">                            
                        <label for="InPeToGu">InPeToGu:</label>
                        <input id="InPeToGu" type="text" :value="InPeToGu" class="form-control">
                    </div>
                </div>                                                                
                <div class="col-12 col-sm-6 col-md-4 card">                        
                    <div class="card-body">
                        <label for="IndPerRep">IndPerRep:</label>
                        <input id="IndPerRep" type="text" :value="IndPerRep" class="form-control">                            
                        <label for="InPeMoPo">InPeMoPo:</label>
                        <input id="InPeMoPo" type="text" :value="InPeMoPo" class="form-control">                            
                        <label for="Identific">Identific:</label>
                        <input id="Identific" type="text" :value="Identific" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 card">                        
                    <div class="card-body">
                        <label for="UsuaTele">UsuaTele:</label>
                        <input id="UsuaTele" type="text" :value="UsuaTele" class="form-control">                            
                        <label for="ClavTele">ClavTele:</label>
                        <input id="ClavTele" type="text" :value="ClavTele" class="form-control">                            
                        <label for="ConsInteTURNOS">ConsInteTURNOS:</label>
                        <input id="ConsInteTURNOS" type="text" :value="ConsInteTURNOS" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 card">                        
                    <div class="card-body">
                        <label for="ClaSalLla">ClaSalLla:</label>
                        <input id="ClaSalLla" type="text" :value="ClaSalLla" class="form-control">                            
                        <label for="LlavExte">LlavExte:</label>
                        <input id="LlavExte" type="text" :value="LlavExte" class="form-control">                            
                        <label for="IndiActi">IndiActi:</label>
                        <input id="IndiActi" type="text" :value="IndiActi" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 card">                        
                    <div class="card-body">
                        <label for="NaciAnno">NaciAnno:</label>
                        <input id="NaciAnno" type="text" :value="NaciAnno" class="form-control">                            
                        <label for="NaciMes">NaciMes:</label>
                        <input id="NaciMes" type="text" :value="NaciMes" class="form-control">                            
                        <label for="NaciDia">NaciDia:</label>
                        <input id="NaciDia" type="text" :value="NaciDia" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 card">                        
                    <div class="card-body">
                        <label for="SegConVen">SegConVen:</label>
                        <input id="SegConVen" type="text" :value="SegConVen" class="form-control">                            
                        <label for="SegDiaVen">SegDiaVen:</label>
                        <input id="SegDiaVen" type="text" :value="SegDiaVen" class="form-control">                            
                        <label for="LonMinCon">LonMinCon:</label>
                        <input id="LonMinCon" type="text" :value="LonMinCon" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 card">                        
                    <div class="card-body">
                        <label for="RepConDia">RepConDia:</label>
                        <input id="RepConDia" type="text" :value="RepConDia" class="form-control">                            
                        <label for="SegFecCon">SegFecCon:</label>
                        <input id="SegFecCon" type="text" :value="SegFecCon" class="form-control">                            
                        <label for="Bloqueado">Bloqueado:</label>
                        <input id="Bloqueado" type="text" :value="Bloqueado" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 card">                        
                    <div class="card-body">
                        <label for="FechCrea">FechCrea:</label>
                        <input id="FechCrea" type="text" :value="FechCrea" class="form-control">                            
                        <label for="UsuaCrea">UsuaCrea:</label>
                        <input id="UsuaCrea" type="text" :value="UsuaCrea" class="form-control">                            
                        <label for="ConsIntePROYEC">ConsIntePROYEC:</label>
                        <input id="ConsIntePROYEC" type="text" :value="ConsIntePROYEC" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 card">                        
                    <div class="card-body">
                        <label for="UsuaCBX">UsuaCBX:</label>
                        <input id="UsuaCBX" type="text" :value="UsuaCBX" class="form-control">                            
                        <label for="ConsInteUSUPER">ConsInteUSUPER:</label>
                        <input id="ConsInteUSUPER" type="text" :value="ConsInteUSUPER" class="form-control">                            
                        <label for="PerCamCam">PerCamCam:</label>
                        <input id="PerCamCam" type="text" :value="PerCamCam" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-4 card">                        
                    <div class="card-body">
                        <label for="passCorreo">passCorreo:</label>
                        <input id="passCorreo" type="text" :value="passCorreo" class="form-control">                            
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div class="d-grid">
            <a href="#" class="btn btn-primary">Guardar</a>
        </div>
            </div>
        </div>
    </div>
    </div>
    `,
    data(){
        return{
            Name:'',
            Email:'',
            Password:'',
            Codigo:'',                                
            Cargo:'',
            ConsIntePERUSU:'',
            InMoCoPa:'',
            InPeToGu:'',
            IndPerCap:'',
            IndPerRep:'',
            InPeMoPo:'',
            Identific:'',
            UsuaTele:'',
            ClavTele:'',
            ConsInteTURNOS:'',
            ClaSalLla:'',
            LlavExte:'',
            IndiActi:'',
            NaciAnno:'',
            NaciMes:'',
            NaciDia:'',
            SegConVen:'',
            SegDiaVen:'',
            LonMinCon:'',
            RepConDia:'',
            SegFecCon:'',
            Bloqueado:'',
            FechCrea:'',
            UsuaCrea:'',
            ConsIntePROYEC:'',                
            UsuaCBX:'',
            ConsInteUSUPER:'',
            PerCamCam:'',                
            passCorreo:'',
        }
    }
})
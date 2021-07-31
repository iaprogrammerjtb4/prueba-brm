app.component('app-users',{
    template:
    /*html*/
    `                                                      
    <app-details-user v-if="isOneDetailU"></app-details-user>
    <app-users-list v-if="isAllDetail"></app-users-list>    
    `,
    data(){
        return{
            isAllDetail:true,
            isOneDetailU:false,            
        }        
    },
    methods:{
        detailUser:function(id){            
            this.isAllDetail = false;
            this.isOneDetailU = true;
        },
        allUsers:function(){            
            this.isAllDetail = true;
            this.isOneDetailU = false;
        },
    }
})

/**components all users list */
app.component('app-users-list',{
    template:
    /*html*/`                                                             
    <div class="row">
        <div class="col-12 col-lg-12 col-xxl-12 d-flex">
            <div class="card flex-fill">
                <div class="card-header">
                    <h5 class="card-title mb-0">Usuarios registrados:</h5>
                </div>
                <table class="table table-hover my-0">
                    <thead>
                        <tr>
                            <th>Nombre</th>  
                            <th>Correo</th>
                            <th>Rol</th>
                            <th>Status</th>                                                                                              
                            <th></th>  
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jeison Tamara</td>
                            <td class="d-none d-xl-table-cell">jeisontamara1003@gmail.com</td>
                            <td><span>Admin</span></td>                                                
                            <td><span class="badge bg-success">Done</span></td>                                                
                            <td><a class="btn btn-info" @click="this.$parent.detailUser(1)">Ver</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>                            
    </div>
    `,    
})
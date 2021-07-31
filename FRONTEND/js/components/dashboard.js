app.component('app-dashboard',{
    template:
    /*html*/
    `<div class="wrapper">
            <nav id="sidebar" class="sidebar js-sidebar">
                <div class="sidebar-content js-simplebar">
                    <a class="sidebar-brand">
                        <span class="align-middle">{{ session }}</span>
                    </a>
                    <ul class="sidebar-nav">
                        <li @click="onView('onProfile')" class="sidebar-item">
                            <a class="sidebar-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user align-middle"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> <span class="align-middle">Profile</span>                                
                            </a>
                        </li>                        
                        <li @click="onView('onCreateUsers')" class="sidebar-item">
                            <a class="sidebar-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus align-middle"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg><span class="align-middle">Crear usuario</span>
                            </a>
                        </li>                        
                        <li @click="onView('onUsers')" class="sidebar-item">
                            <a class="sidebar-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book align-middle"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg> <i class="align-middle" data-feather="user-plus"></i><span class="align-middle">Usuarios</span>
                            </a>
                        </li>                        
                        <li @click="onView('onSchedule')" class="sidebar-item">
                            <a class="sidebar-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid align-middle"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg><span class="align-middle">Horarios</span>                                
                            </a>
                        </li>
                        <li @click="this.$root.sessionKiller" class="sidebar-item">
                            <a class="sidebar-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-in align-middle"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg><span class="align-middle">Salir</span>
                            </a>
                        </li>
                    </ul>                    
                </div>
            </nav>

            <div class="main">
                <nav class="navbar navbar-expand navbar-light navbar-bg">
                    <a class="sidebar-toggle js-sidebar-toggle">
                        <i class="hamburger align-self-center"></i>
                    </a>

                    <div class="navbar-collapse collapse">
                        <ul class="navbar-nav navbar-align">
                            <li class="nav-item dropdown">
                                <a v-if="FocusView.onNotifications.onBell" class="nav-icon dropdown-toggle" id="alertsDropdown" data-bs-toggle="dropdown">
                                    <div class="position-relative">
                                        <i class="align-middle" data-feather="bell"></i>
                                        <span class="indicator">4</span>
                                    </div>
                                </a>
                                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                                    <div class="dropdown-menu-header">
                                        {{ Notification }} Notificaciones
                                    </div>
                                    <div class="list-group">
                                        <a v-if="FocusView.onNotifications.onUserEdit" class="list-group-item">
                                            <div class="row g-0 align-items-center">
                                                <div class="col-2">
                                                    <i class="text-danger" data-feather="alert-circle"></i>
                                                </div>
                                                <div class="col-10">
                                                    <div class="text-dark">Usuarios editaron horarios</div>
                                                    <div class="text-muted small mt-1">Jeison Tamara</div>
                                                    <div class="text-muted small mt-1">Yei armon</div>
                                                    <div class="text-muted small mt-1">Lucas potosqi</div>                                                                                                                                                            
                                                </div>
                                            </div>
                                        </a>                                        
                                        <a v-if="FocusView.onNotifications.onSessionActive" class="list-group-item">
                                            <div class="row g-0 align-items-center">
                                                <div class="col-2">
                                                    <i class="text-primary" data-feather="home"></i>
                                                </div>
                                                <div class="col-10">
                                                    <div class="text-dark">Sesiones activas</div>
                                                    <div class="text-muted small mt-1">Lucas potosqi</div>
                                                    <div class="text-muted small mt-1">Lucas potosqi</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a v-if="FocusView.onNotifications.onUserCreated" class="list-group-item">
                                            <div class="row g-0 align-items-center">
                                                <div class="col-2">
                                                    <i class="text-success" data-feather="user-plus"></i>
                                                </div>
                                                <div class="col-10">
                                                    <div class="text-dark">Usuarios fueron creados</div>
                                                    <div class="text-muted small mt-1">Lucas potosqi</div>
                                                    <div class="text-muted small mt-1">Lucas potosqi</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>                                    
                                </div>
                            </li>                            
                            <li class="nav-item">                                
                                <a class="nav-link d-none d-sm-inline-block">
                                    <img :src="userPhoto" class="avatar img-fluid rounded me-1" :alt="user" /> <span class="text-dark">{{ user }}</span>
                                </a>                                
                            </li>
                        </ul>
                    </div>
                </nav>

                <main class="content">
                    <div class="container-fluid p-0">
                        <app-welcome v-if="(FocusView.onProfile != true && FocusView.onUsers != true && FocusView.onSchedule != true && FocusView.onCreateUsers != true)"></app-welcome>
                        <app-profile v-if="FocusView.onProfile"></app-profile>
                        <app-users v-if="FocusView.onUsers"></app-users>
                        <app-schedule v-if="FocusView.onSchedule"></app-schedule>
                        <app-create-users v-if="FocusView.onCreateUsers"></app-create-users>                        
                    </div>
                </main>                
            </div>
        </div>                                                  
    `,
    data(){
        return{
            Welcome:'',
            sessionStatus:{
                isActiveDash:2,
            },
            session:'Admin',
            user:'Jeison Tamara',
            userPhoto:'./img/silueta persona.png',
            Notification:5,
            FocusView:{                
                onWelcome:false,
                onProfile:false,
                onUsers:false,
                onSchedule:false,
                onCreateUsers:false,
                onNotifications:{
                    onBell:false,
                    onUserEdit:false,
                    onSesionActive:false,
                    onUserCreated:false,
                }
            },
            Permissions:{
                isLogin:true,
                isProfile:false,
                isUsers:false,
                isSchedule:false,
                isCreateUsers:true,
                isNotifications:{
                    isBell:false,
                    isUserEdit:false,
                    isSesiisActive:false,
                    isUserCreated:false,
                }
            }
        }
    },
    methods:{                        
        /**logic menu transitions */
        onView:function(view){            
            //welcome options
            if(view=='onWelcome'){                
                this.FocusView[view]= true;                    
                return 
            }
            var countOptions = this.countObject(this.FocusView)
            //get array from object options menu 
            var arrOptions = Object.keys(this.FocusView);            
            for(var i = 0; i <= countOptions; i++){
                //active selected
                if(view==arrOptions[i]){
                    this.FocusView[arrOptions[i]]= true;                    
                }else{
                //inactive others
                    this.FocusView[arrOptions[i]]= false;
                }
            }                        
        },           
        countObject:function(ObjectValue){
            var count = 0;
            for(var i in ObjectValue){
                count++
            }
            return count
        },    
    },    
})

app.component('app-welcome',{
    template:
    /*html*/
    `
    <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-xl-12 card mb-3 text-center">                        
           <span class="text-muted h3"> {{ this.$root.Welcome }}</span>
           <img v-if="this.$root.session == 'Admin'" src= "./img/admin.jpg" style="width:50%; heigth:40%; margin:auto; border-radius:20%;" />
           <img v-else src= "./img/agente.jpg" style="width:50%; heigth:40%; margin:auto; border-radius:20%;" />
        </div>
    </div>
    `,
})
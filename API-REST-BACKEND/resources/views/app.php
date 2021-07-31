<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>USER CLIENT</title>
    <!--Add Styles-->
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}"/>        
    <link rel="stylesheet" href="{{ asset('css/app.css') }}"/>
     <link rel="stylesheet" href="{{ asset('css/main.css') }}"/>    
</head>
<body> 
    <!-- App init-->   
    <div id="app">
        <!-- rendering app with vue-->        
    </div>    
    <!--Add vue js-->
    <script src="{{ asset('js/vue.global.js') }}"></script>    
    <!-- mount App-->
    <script>
        const mountedApp = app.mount('#app');
    </script>
    <!-- Import main APP -->    
    <script src="{{ asset('js/main.js') }}"></script>        
    <!-- Import components APP -->    
    <script src="{{ asset('js/components/login.js') }}"></script>
    <script src="{{ asset('js/components/dashboard.js') }}"></script>
    <script src="{{ asset('js/components/profile.js') }}"></script>
    <script src="{{ asset('js/components/create-users.js') }}"></script>
    <script src="{{ asset('js/components/schedule.js') }}"></script>
    <script src="{{ asset('js/components/users.js') }}"></script>
    <script src="{{ asset('js/components/details-user.js') }}"></script>    
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
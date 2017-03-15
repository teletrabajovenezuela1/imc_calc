'use strict';

//=========================================================================================================================

//Module
var app = angular.module('mainApp', ['ngRoute']);

//=========================================================================================================================

//Routes
app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
    .when("/", {
    	templateUrl: 'features/home/home.view.html',
      controller: 'homeCtrl'
  	})
    .when("/ordenes", {
      templateUrl: 'features/ordenes/ordenes.view.html',
      controller:'ordenesCtrl'
    })
    .when("/clientes", {
      templateUrl: 'features/clientes/clientes.view.html',
      controller:'clientesCtrl'
    })
    .when("/bancos", {
      templateUrl: 'features/bancos/bancos.view.html',
      controller:'bancosCtrl'
    })
    .otherwise({
        redirectTo: '/'
    })
    .when("/bitacora", {
      templateUrl: 'features/ordenes/bitacora/bitacora.view.html',
        controller: 'bitacoraCtrl'
    })
    /*
    .when("/notas", {
    	templateUrl: 'features/notas/notas.view.html',
      	controller: 'notasCtrl'
    })
    .when("/clientes", {
    	templateUrl: 'features/clientes/clientes.view.html',
      	controller: 'clientesCtrl'
    })    
    .when("/caja", {
      templateUrl: 'features/ordenes/pagos/pagos.view.html',
        controller: 'pagosCtrl'
    })
    
    .when("/ingresos", {
      templateUrl: 'features/ordenes/consultas/ordenes.ingresos.html',
        controller: 'pagosCtrl'
    })
    .when("/garantias", {
      templateUrl: 'features/ordenes/consultas/ordenes.garantias.html',
        controller: 'ordenesCtrl'
    })        
    .when("/info", {
      templateUrl: 'features/ordenes/ordenes.info.html',
        controller: 'ordenesCtrl'
    })
    */        
});

//=========================================================================================================================

//Custom Directive

app.directive('myClientes', function(){
    return {
      restrict: 'EA',
      templateUrl: 'features/clientes/clientes.tpl.html',
      scope: {
        title: '@',
        list: '='        
      }
    };
  });



//=========================================================================================================================

//FACTORY (AJAX CALLS)
app.factory('Servidor', function($http) { 

    var backendUrl = "http://www.tecnicochery.url.ph/jade";

    var service = {};
  
    //Bancos
    service.getBancos = function() {
      return $http.get(backendUrl + '/bancos/gets.php');             
    };

    //Clientes
    service.getClientes = function() {
      return $http.get(backendUrl + '/clientes/gets.php');             
    };

    //Pagos
    service.getPagos = function() {
      //return $http.get(backendUrl + '/clientes/gets.php');             

      //DATA DE PAGOS
      var pagos = [
        {
          id: 1, 
          numeroOrden: 30,      
          fecha: "2017-01-10",      
          concepto: "Pago x servicio", 
          formaPago: "Transferencia", 
          monto: 25000,     
          observaciones: "Ninguna"
        },
        {
          id: 2, 
          numeroOrden: 30,      
          fecha: "2017-02-05",      
          concepto: "Limpieza inyectores", 
          formaPago: "Efectivo", 
          monto: 5000,      
          observaciones: "Ninguna"
        },
        {
          id: 3, 
          numeroOrden: 30,      
          fecha: "2017-02-08",      
          concepto: "Limpieza tanque gasolina", 
          formaPago: "Efectivo", 
          monto: 25000,      
          observaciones: "Ninguna"
        }
      ];

      return pagos;

    };

    //Ordenes
    service.getOrdenes = function() {
      
      //return $http.get(backendUrl + '/clientes/gets.php');             

      //DATA DE PAGOS
      var ordenes = [
        {
          id: 1, 
          fechaIngreso: "2017-01-10", 
          numeroOrden: 30, 
          nombre: "Alberto Garcia", 
          telefono: "0424-3166533", 
          datosCarro: "Chery X1 2012",
          placa: "XWI-915",
          ingresaPor: "Falla en cilindro 2",
          fechaSalida: "2017-01-31",
          diasGarantia: 30,
          trabajoRealizado: "Cambio de bujias y cables",
          observaciones: "El motor tiembla y tiene pobre desempeño.",     
          mod: 100,
          mat1: 1000,
          mat2: 0,
          mat3: 0,
          mat4: 0,
          mat5: 0,
          mat6: 0,
          mat7: 0,
          mat8: 0,
          mat9: 0,
          mat10: 0,     
          txtmat1: "Formula",
          txtmat2: "",
          txtmat3: "",
          txtmat4: "",
          txtmat5: "",
          txtmat6: "",
          txtmat7: "",
          txtmat8: "",
          txtmat9: "",
          txtmat10: "",
          inicioGarantia: "2017-03-01",
          finalGarantia: "2017-03-31",
          totalModMat: 1100,
          totalPagos: 0,
          totalSaldo: 1100
        },
        {
          id: 2, 
          fechaIngreso: "2017-01-10", 
          numeroOrden: 31, 
          nombre: "Juan Garcia", 
          telefono: "0424-316-8577", 
          datosCarro: "Chery Arauca 2012",
          placa: "ABC-123",
          ingresaPor: "Bote de humo por paso de aceite",
          fechaSalida: "2017-01-30",
          diasGarantia: 30,
          trabajoRealizado: "Bajar camara, cambio de gomas, asentado de valvulas",
          observaciones: "Tornillos 8 mm en tapa E1 y I4",
          mod: 300,
          mat1: 0,
          mat2: 0,
          mat3: 0,
          mat4: 0,
          mat5: 0,
          mat6: 0,
          mat7: 0,
          mat8: 0,
          mat9: 0,
          mat10: 0,
          txtmat1: "Formula",
          txtmat2: "Teflon",
          txtmat3: "Spray",
          txtmat4: "Correa",
          txtmat5: "Empacadura",
          txtmat6: "Tornillo",
          txtmat7: "Tuerca",
          txtmat8: "Otro",
          txtmat9: "Otro+",
          txtmat10: "Lija",
          inicioGarantia: "2017-03-01",
          finalGarantia: "2017-03-31",
          totalModMat: 300,
          totalPagos: 0,
          totalSaldo: 300
        }
      ];

      return ordenes;

    };

    //Bitacora
    service.getBitacora = function() {
      
      return $http.get(backendUrl + '/bitacora/gets.php');             

      /*
      
        //DATA DE PAGOS
        var bitacora = [
          {
            id: 1, 
            numeroOrden: 30,      
            fecha: "2017-01-10",      
            concepto: "Limieza inyectores"     
          },
          {
            id: 2, 
            numeroOrden: 30,      
            fecha: "2017-02-05",      
            concepto: "Limpieza de bujias"          
          },
          {
            id: 3, 
            numeroOrden: 30,      
            fecha: "2017-02-08",      
            concepto: "Limpieza de tanque gasolina"          
          }
        ];

        return bitacora;

      */
      
    };

    return service;    

});


//FACTORY SERVICE PARA ORDENES
app.factory('SharedOrdenes', function($rootScope,$http) { 

    var sharedOrden = {};

    sharedOrden.sharedMessage  = '';

    sharedOrden.objetoOrden  = {};

    //

    sharedOrden.prepForPublish = function(msg) {
        this.sharedMessage  = msg;
        this.publishItem();
    };

    sharedOrden.publishItem = function() {
        $rootScope.$broadcast('handlePublish',this.sharedMessage);
    };

    //

    sharedOrden.setOrden = function(orden) {
        this.objetoOrden = angular.copy(orden);
    };

    sharedOrden.getOrden = function() {
        return this.objetoOrden;
    };


    return sharedOrden;
    
});

//=========================================================================================================================

//Controller

//Home (/)
app.controller('homeCtrl', function($scope) {

    $scope.message = "NEW HOME PAGE CONTROLLER";

});

//

//Ordenes Controller
app.controller('ordenesCtrl', function($scope,$http,Servidor,$filter,SharedOrdenes)
{ 
    $scope.today = $filter('date')(new Date(), 'yyyy-MM-dd');

    $scope.title = "";

    $scope.totalOrden = 0;

    $scope.objbase = {
        id: "0",
        fechaIngreso: new Date,
        numeroOrden: "",
        nombre: "",
        telefono: "",
        datosCarro: "",   
        placa: "",
        ingresaPor: "",
        fechaSalida: "",
        diasGarantia: 30,
        trabajoRealizado: "",
        observaciones: "",
        mod: 0,
        mat1: 0,
        mat2: 0,
        mat3: 0,
        mat4: 0,
        mat5: 0,
        mat6: 0,
        mat7: 0,
        mat8: 0,
        mat9: 0,
        mat10: 0,     
        txtmat1: "",
        txtmat2: "",
        txtmat3: "",
        txtmat4: "",
        txtmat5: "",
        txtmat6: "",
        txtmat7: "",
        txtmat8: "",
        txtmat9: "",
        txtmat10: "",
        inicioGarantia: "",
        finalGarantia: ""
        /////// SI HAY CAMBIO AQUI, debo modificar el servicio GETORDENES() ////////
    };

    //DATA DE ORDENES
    $scope.ordenes = Servidor.getOrdenes();  
  
    //Asignacion inicial
    $scope.reset = function()
    {
        $scope.obj = angular.copy($scope.objbase);

        $scope.message = "";
    }
    //------------------------------------------------------------------------

    //List general de ordenes
    $scope.list = function(){
        $scope.setvw('list');
    }

    //caja
    $scope.caja = function()
    {
        $scope.setvw('caja');
    } 

    //pagos
    $scope.cargarPagos = function(orden)
    {
        $scope.setvw('pagos');
    } 

    //cxc
    $scope.cxc = function()
    {
        $scope.setvw('cxc');
    } 

    //cxc
    $scope.ingresos = function()
    {
        $scope.setvw('ingresos');   
    }

    //garantias
    $scope.garantias = function()
    {
        $scope.setvw('garantias');    
    }

    //regresar
    $scope.goTo = function(to)
    {
        $scope.setvw(to);   
    }

    //-----------------------------------------------------------------------

    //Add - Click Event
    $scope.add = function(){
        //todo - ajax call to SERVICE 'SERVIDOR' to get next order number
        $scope.obj.id = 0;
        $scope.obj.numeroOrden = 30;
        $scope.setvw('add');
    }

    //Haga peticion al SERVIDOR
    Servidor.getClientes().success(function(resultado){ 
        $scope.objentes = resultado;
    });
  
    //edit
    $scope.edit = function(orden)
    {   
        //SharedOrdenes
        SharedOrdenes.setOrden(orden);    //call to service and set orden object
    
        $scope.obj = angular.copy(orden);

        $scope.message = "Editing...";

        $scope.setvw('add');
    }

    //save
    $scope.save = function()
    {
        $scope.obj.nombre="****";
        $scope.message = "Saved!";
    }

    //anular
    $scope.anular = function(orden)
    {
        var resp = confirm('Confirma anular orden # '  + orden.numeroOrden + '?');

        if(resp)
        {
            //todo - ajaxcal to delete order
            alert("Eliminar....")

            $scope.list();
        }

    }

    //cancel
    $scope.cancel = function()
    {
        $scope.reset();
        $scope.list();
    }

    //ver mas
    $scope.verMas = function(orden)
    {
        //NEW...SharedOrdenes
        SharedOrdenes.prepForPublish('Mensaje para el padre...');

        $scope.setvw('more');

        $scope.obj = angular.copy(orden);
    }

    //materiales y mod
    $scope.costos = function(orden)
    {
        $scope.setvw('costos');

        $scope.obj = angular.copy(orden);

        //totalizar orden
        $scope.recalcular();

    }

    //Totaliza la orden
    $scope.recalcular = function()
    {   
        //totalizar orden
        $scope.obj.totalOrden = $scope.obj.mod + $scope.obj.mat1 + $scope.obj.mat2 + $scope.obj.mat3 + $scope.obj.mat4 + $scope.obj.mat5 + $scope.obj.mat6 + $scope.obj.mat7 + $scope.obj.mat8 + $scope.obj.mat9 + $scope.obj.mat10;  
    }

    //set flag vw  (view)
    $scope.setvw = function(valor)
    {
        $scope.vw = valor;    
    }

    //

    //SharedOrdenes
    $scope.$on('handlePublish', function() {
        $scope.message  = SharedOrdenes.sharedMessage ;        
    });

    //

    //set orden as global
    $scope.setOrden = function(orden){
        SharedOrdenes.setOrden(orden);
    }

    //

    $scope.list();

    $scope.reset();

});

//Clientes Controller
app.controller('clientesCtrl', function($scope,Servidor)
{   
    $scope.title = "Listado de Clientes";

    $scope.objcli = {
        nombre: "",
        direccion: "",
        telefono: "",
        email: "",
        id: ""
    };

    //Asignacion inicial
    $scope.reset = function()
    {
        $scope.cli = angular.copy($scope.objcli);

        $scope.message = "";
    }

    //Haga peticion de bancos al servicio: SERVIDOR
    $scope.refresh = function(){
        Servidor.getClientes().success(function(resultado){ 
            $scope.clientes = resultado;
        });
    }
    
    //edit
    $scope.edit = function(cliente)
    {
        $scope.cli = angular.copy(cliente);
        $scope.message = "Editing...";
        $scope.setvw('add');
    }

    //save
    $scope.save = function()
    {
        $scope.cli.nombre="****";
        $scope.message = "Saved!";
    }

    //delete
    $scope.delete = function()
    {
        var confirm = confirm('Confirma eliminar este registro?');      
    }

    //clear
    $scope.clear = function()
    {
        $scope.reset();
    }

    //set flag vw  (view)
    $scope.setvw = function(valor)
    {
        $scope.vw = valor;      
    }

    //

    $scope.setvw('list');

    $scope.refresh();

    $scope.reset();


});

//Bitacora Controller
app.controller('bitacoraCtrl', function($scope,Servidor,SharedOrdenes) 
{   
    $scope.objbase = {
        id: "0",
        numeroOrden: 30,
        fecha: new Date,
        concepto: "?"       
    };

    $scope.message="jajaja";

    //SharedOrdenes
    $scope.$on('handlePublish', function(event,data) {
        $scope.message = data;        
    });

    //Copy object
    $scope.obj = angular.copy($scope.objbase);
    
    //Get bitacoras    
    Servidor.getBitacora().success(function(resultado){ 
        $scope.bitacoras = resultado;
    });
    
    //save
    $scope.save = function(){
        alert("Save...");
    }
    
    $scope.orden = SharedOrdenes.getOrden();

});

//Bancos
app.controller('bancosCtrl', function($scope,Servidor) 
{   
    $scope.objbase = {
        id: "0",
        numeroOrden: 30,
        fecha: new Date,
        concepto: "?"       
    };

    $scope.message="jajaja";

    //SharedOrdenes
    $scope.$on('handlePublish', function(event,data) {
        $scope.message = data;        
    });

    //Copy object
    $scope.obj = angular.copy($scope.objbase);
    
    //Get bitacoras    
    Servidor.getBitacora().success(function(resultado){ 
        $scope.bitacoras = resultado;
    });
    
    //save
    $scope.save = function(){
        alert("Save...");
    }
    
});
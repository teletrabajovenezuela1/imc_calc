var app = angular.module('myApp', []);

app.directive('myImc', function(){
    return {
      restrict: 'EA',
      templateUrl: 'imc.template.html',
      scope: {
        title: '@',
        list: '='        
      },
      link: function(scope, element, attr)
      {
        scope.peso=0;
        scope.alturamts=1;
        scope.imc = 0;
        scope.msg = "";
        scope.sexo="?";
        
        scope.calcular = function()
        {
          //IMC
          scope.imc = scope.peso / (scope.alturamts * scope.alturamts);           
          
          //Analisis del Resultado
           
          if(scope.imc <= 18.5)
          {
            scope.msg = "Peso Insuficiente";
            scope.url="https://www.personasque.es/obesidad/salud/diagnostico/grados-obesidad-3573";
          }
          else if(scope.imc <= 25.0)
          {
            scope.msg = "Peso Normal";
            scope.url="https://www.personasque.es/obesidad/salud/diagnostico/grados-obesidad-3573";
          }
          else if(scope.imc <= 27.0)
          {
            scope.msg = "Sobrepeso Grado I";
            scope.url="https://www.personasque.es/obesidad/salud/diagnostico/grados-obesidad-3573";
          }
          else if(scope.imc <= 30)
          {
            scope.msg = "Sobrepeso Grado II";
            scope.url="https://www.personasque.es/obesidad/salud/diagnostico/grados-obesidad-3573";
          }
          else if(scope.imc <= 35)
          {
            scope.msg = "Obesidad Tipo I";
            scope.url="http://www.pacientesonline.org/medicina/informes_especiales/hipertension/h30.php";
          }
          else if(scope.imc <= 40)
          {
            scope.msg = "Obesidad Tipo II";
            scope.url="http://www.pacientesonline.org/medicina/informes_especiales/hipertension/h30.php";
          }
          else if(scope.imc <= 45)
          {
            scope.msg = "Obesidad Tipo III (Mórbida)";
            scope.url="https://es.wikipedia.org/wiki/Obesidad_m%C3%B3rbida";
          }
          else if(scope.imc > 45 )
          {
            scope.msg = "Obesidad Tipo IV (Obesidad Extrema)";
            scope.url="https://es.wikipedia.org/wiki/Obesidad_m%C3%B3rbida";
          }
        },
        scope.limpiar= function()
        {
          scope.peso=0;
          scope.alturamts=1;
          scope.imc = 0;
          scope.msg = "";
          scope.sexo="?";
        }
        
      }
    };
});


//Controlador
app.controller('imcCtrl', function($scope)
{   
});
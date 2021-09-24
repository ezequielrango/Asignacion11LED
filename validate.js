 /*
  Función que recibe como parámetro el valor
 a validar. Es un condicional con resultado 
 boolean
  */  
  
  function validate (x)  { 
           if (x<1 || x>7) 
           return true;       
           else 
           return false;
      }
 /*
  Función convertidora, que mediante Switch Case, 
  recibe como parámetro el día y evalúa distintos casos
  (condiciones). El caso que se cumpla es el que 
  se retorna y almacena. 
  */        
    function converterDay  (day)  {

    switch (day) { 
        //En caso de que sea 1, el día será lunes.
        case 1: day = "Lunes"; 
        break; 
        case 2: day = "Martes"; 
        break; 
        case 3: day = "Miércoles"; 
        break; 
        case 4: day = "Jueves"; 
        break; 
        case 5: day = "Viernes"; 
        break; 
        case 6: day = "Sábado"; 
        break; 
        case 7: day = "Domingo"; 
         }
      return day;
    }

 
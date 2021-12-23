const monedaEl_one = document.getElementById('moneda1');
const monedaEl_two = document.getElementById('moneda2');
const cantidadEl_one = document.getElementById('cantidad');
const cantidadEl_two = document.getElementById('resultado');


var moneda = ['Elige tu Moneda','Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina']; 
    
      moneda.forEach(cargar_monedas);

     function cargar_monedas(item,index)
        {
            document.getElementById("moneda1").innerHTML += "<option value='"+moneda[index]+"'>"+moneda[index]+"</option>"; 

            document.getElementById("moneda2").innerHTML += "<option value='"+moneda[index]+"'>"+moneda[index]+"</option>";       
        }
     
    
      function validar() 
      {

        document.getElementById("alert-mensaje").innerHTML= "" ;   

        var a = document.getElementById("cantidad").value;
        var button = document.getElementById("boton");
        button.disabled = false; 
       

        

        var fragment = document.createDocumentFragment();
        var ret = fragment.appendChild(document.createElement('p'));
        var v = document.getElementById("alert-mensaje");


        if (isNaN(a))
        {
            document.getElementById("alert-mensaje").innerHTML= "No es una cantidad valida" ;
            
            ret.innerHTML = "Por favor ingresa una cantidad valida"
            document.getElementById("alert-mensaje").appendChild(ret);

           
            v.setAttribute("style","background:#feb1a4; border-radius: 10px;");
            button.disabled = true; 
        }
        else
        {
             v.setAttribute("style","background:#cecece;");
        }
          
            
         
      }

      function calcular()
      {

             var moneda1 = document.getElementById("moneda1").selectedIndex; 
             var moneda2 = document.getElementById("moneda2").selectedIndex; 
             console.log(moneda1);

             if (moneda1===moneda2 | moneda1===0 | moneda2===0) 
             {
                alert("No se puede hacer la conversion");
             }
             else
             {
                var moneda_one = monedaEl_one.value;
                var moneda_two = monedaEl_two.value;

                console.log(moneda_one);

                //Moneda 1
                    if (moneda_one=== 'Dolar')
                    {
                      console.log('USD');
                      moneda_one='USD';
                    }
                    else if (moneda_one=== 'Peso Mexicano') 
                    {
                      console.log('MXN');
                      moneda_one='MXN';
                    }
                    else if (moneda_one=== 'Peso Colombiano') 
                    {
                      console.log('COP');
                      moneda_one='COP';
                    }
                    else if (moneda_one=== 'Euro') 
                    {
                      console.log('EUR');
                      moneda_one='EUR';
                    }
                    else if (moneda_one=== 'Libra Esterlina') 
                    {
                      console.log('GBP');
                      moneda_one='GBP';
                    }
                 //Moneda2
                 if (moneda_two=== 'Dolar')
                    {
                      console.log('USD');
                      moneda_two='USD';
                    }
                    else if (moneda_two=== 'Peso Mexicano') 
                    {
                      console.log('MXN');
                      moneda_two='MXN';
                    }
                    else if (moneda_two=== 'Peso Colombiano') 
                    {
                      console.log('COP');
                      moneda_two='COP';
                    }
                    else if (moneda_two=== 'Euro') 
                    {
                      console.log('EUR');
                      moneda_two='EUR';
                    }
                    else if (moneda_two=== 'Libra Esterlina') 
                    {
                      console.log('GBP');
                      moneda_two='GBP';
                    }   

    fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[moneda_two];
       console.log(taza);
       //cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

       cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);
       document.getElementById("alert-mensaje").innerHTML= cantidadEl_two.value ;
       var v = document.getElementById("alert-mensaje");
            v.setAttribute("style","background:#85bd62; border-radius: 10px;");
    } );
    


             }//fin del else
      }

     
    
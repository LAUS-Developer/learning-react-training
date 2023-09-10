const persona ={
    nombre:"Tony",
    edad: 45,
    clave:"Ironman"
  };
  
  //const {nombre,clave,edad} = persona;
  
  //console.log (persona);
  
  
  
  const retornaPersona = ({clave,nombre,edad,rango= "capitan"}) => {
    console.log(nombre,edad,rango);
  };
  
  retornaPersona(persona);
  
  
  
  
  const retornaAvenger = ({clave,nombre,edad,rango= "capitan"}) => {
    return{
      nombreClave:clave,
      anios:edad
    }
  };
  
  const avenger = retornaAvenger(persona);
  console.log(avenger);
  
  
  const elContext = ({clave,nombre,edad,rango= "capitan"}) => {
    return{
      nombreClave:clave,
      anios:edad,
      latlng:{
        lat:141413,
        lng:13515
      }
    }
  };
  
  const { nombreClave, anios, latlng:{lat,lng}} = elContext (persona);
  
  console.log(nombreClave,anios);
  console.log(lat,lng);
  
  
  
  
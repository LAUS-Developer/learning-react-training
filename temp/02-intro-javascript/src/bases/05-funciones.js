
const saludar2 = (nombre) => {
    return `hola, ${nombre}`;
  }
  
  const saludar3 = (nombre) => `Hola, ${nombre}`;
  const saludar4 = (nombre) => `Hola Mundo`;
  
  console.log(saludar2("vegeta"));
  console.log(saludar3("goku"));
  console.log(saludar4());
  
  const getUser = () => ({
  
    uid:"ABC123",
    usermane: "Pancho Cristal"
  });
  
  
  const user = getUser();
  
  console.log(user);
  
  const getUsuarioActivo = (nombre) => (
   {
      uid:"ABC#",
      username: nombre
    }
  )
  
  const usuarioActivo = getUsuarioActivo("Fernando");
  console.log (usuarioActivo);
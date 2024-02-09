
import heroes, {owners} from "../data/heroes";

console.log(owners)

const getHeroeByIda = (id) =>{
  return heroes.find ((heroe) => {
    if (heroe.id === id){
      return true;
    }else{
      return false;
    }
  });
};

console.log(getHeroeByIda(5));

// Simplificando lo anterior

const getHeroeById = (id) =>{
  return heroes.find ((heroe) => heroe.id === id );
};

console.log(getHeroeById(3));

const getHeroesByOwner = (owner) =>{
  return heroes.filter ((heroe) => heroe.owner === owner );
};
console.log(getHeroesByOwner("DC"));


export {
    getHeroeById as default,
    getHeroesByOwner
}
import {getHeroeById,getHeroesByOwner} from './../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp',()=>{
    test('getHeroeById debe retornar un héroe por id',()=>{

        const id = 1;
        const hero = getHeroeById(id);

        console.log(hero)

      
        
    });

    test('getHeroesByOwner debe retornar un héroe por owner',()=>{

        const owner = "DC";
        const heroes = getHeroesByOwner(owner);

        console.log(heroes)

      
        
    });
});
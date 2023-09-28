/*
test("Esta prueba no debe fallar",()=>{
    if ( 1===0 ){
        throw new Error("No puede dividir entre 0")
    }
});
*/
describe("Pruebas en <DemoComponent/>",()=>{
    test("Esta prueba no debe fallar",()=>{
        const message1 = "hola mundo";
        const message2 = message1.trim();
        expect(message1).toBe(message2);//validación de jest para pasar la prueba.
    });
});
/*
const getImagenPromesa = () => {
    return new Promise ((resolve,reject)=>{
        resolve ("https://link.com")
    })
}
*/
/*

const getImagePromesa = () => new Promise (resolve=>resolve("https://link.com"))

getImagenPromesa().then(console.log);
*/

/*
const getImagen = async () => {
    return "https://link.com";
};

getImagen().then(console.log)





*/


const getImagen = async()=>{
    try{
        const apiKey = "0AdOmqtLx1Y992217hlJU15biLGP2SyW";
        const respo = await fetch (`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respo.json();

        const {url}=data.images.original;

        const img = document.createElement("img");

        img.src =url;

        document.body.append(img);
    }
    catch(error){
        console.error(error)
    }
}
getImagen();
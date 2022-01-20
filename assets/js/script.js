const url= 'https://jsonplaceholder.typicode.com/photos/'
const getAlbum= async (idAlbum)=>{
    try{

        const resIdAlbum= await fetch(`${url}`)
        const postAlbum =await resIdAlbum.json()
        var arr=[]
        postAlbum.forEach(el => {
           if( el.albumId==idAlbum){
               arr.push({album: el.albumId, id: el.id, titulo: el.title})
           }
        });
        arr.splice(20)
        arr.forEach(el=>{
            console.log(`Album: ${el.album}  Id: ${el.id}  Titulo: ${el.titulo}`)
        })

    } catch(error){
        console.error(error)
    }
}

let mypromise=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(console.log(`Información enviada`))
        },3000)
    })
}
async function funcionAsincrona(){
 await mypromise()
}
funcionAsincrona()
getAlbum(15)

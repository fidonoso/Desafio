const url= 'https://jsonplaceholder.typicode.com/photos/'
const getnombre= async (idAlbum)=>{
    try{

        const resIdAlbum= await fetch(`${url}`)

        const postAlbum =await resIdAlbum.json()
        var arr=[]
        postAlbum.forEach(el => {
           if( el.albumId==idAlbum){
               arr.push({album: el.albumId, id: el.id, tiutlo: el.title})
           }
        });
        arr.splice(20)
        console.log(arr)

    } catch(error){
        console.log(error)
    }
}

getnombre(15)

let mypromise=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(console.log(`Información enviada`))
        },3000)
    })
}
async function otra(){
 await mypromise()
}
otra()

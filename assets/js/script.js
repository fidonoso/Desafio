const url= 'https://jsonplaceholder.typicode.com/photos/'
const getnombre= async (idAlbum)=>{
    try{

        const resIdAlbum= await fetch(`${url}`)

        const postAlbum =await resIdAlbum.json()
        var arr2=[]
        // var arr3=[]
        var arr= postAlbum.forEach(el => {
           if( el.albumId==idAlbum){
               arr2.push({album: el.albumId, id: el.id, tiutlo: el.title})
           }
        });
        arr2.splice(20)
        console.log(postAlbum[0])
        console.log(arr2)

    } catch(error){
        console.log(error)
    }
}

getnombre(15)
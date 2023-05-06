const apiRick=async(pagina)=>{
    let url="https://rickandmortyapi.com/api/character/?page="+pagina;
    const api=await fetch(url);//Asi se consulta una API
    const data= await api.json();// Asi se mira el resultado de la consulta

    console.log(data)
    divRes=document.querySelector("#resultado");
    divRes.innerHTML=""

    //El results es un arreglo que se recorre con map
    data.results.map(item=>{
        divItem=document.createElement('div')
        //Esto es para dar formato a las imagenes que se traeran de la API
        //Los tres puntos debajo nos indican que dicha palabra no ha sido reconocida 
        //QuerySelector=Es para realizar la aplicabilidad a todos los que coincidan
        // El id=#
        //La clase=.


        divItem.innerHTML=`
        <div class="card" style="width: 15em;">
        
            <img src="${item.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text"><b>Estatus: </b>${item.status}</p>
                <p class="card-text"><b>Especie: </b>${item.species}</p>
                <p class="card-text"><b>Gènero: </b>${item.gender}</p>
                
            </div>
        </div>
        
        `
        divRes.appendChild(divItem);


    });

    

}
apiRick(1)
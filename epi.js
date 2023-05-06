const epiRick=async(pagina)=>{
    let url="https://rickandmortyapi.com/api/episode?page="+pagina;
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
        <div class="card" style="width: 18rem;">
        <div class="card-body">

            <h5 class="card-title">${item.name}</h5>
            <p class="card-text"><b>Fecha:</b>${item.air_date}</p>
            <p class="card-text"><b>Episodio:</b>${item.episode}</p>
            <p class="card-text"><b>Fecha Creaciòn:</b>${item.created}</p>
                
                
        </div>
        </div>
        
        `
        divRes.appendChild(divItem);


    });
    

    

}
epiRick(1)
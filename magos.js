//inicio de sesion 
let inicioDeUsuario = false //usuario
let usuario1 = 'sebitas123'

function contenidoDelForm(){
    document.getElementById('form1').style.display = 'none';
    document.getElementById('intro').style.display = 'block';
}

function  inicioDeSecion(){
    let usuario1 = document.getElementById('usuario1').value;
    let contraseña1 = document.getElementById('contraseña1').value;

    if (usuario1 === 'sebitas123' && contraseña1 === 'gaelito777'){
        contenidoDelForm();
        inicioDeUsuario = true;
        alert("buenas " + usuario1);
    }

        else { 
            alert("hay un error")   
            inicioDeUsuario = false;
            }
        }
    




//funcion objetitos 
let cajita = document.getElementById("cajita")
let pelis = [];
//conexion con el json
fetch('nmms.json')

    .then((data) => {
        return data.json()
    })
    .then((data) => {
        pelis = data;
    });




    //funciones y botones
const top3 = () => {
    
    event.preventDefault();

    pelis.sort((x, y) => {
        if (x.Ratings < y.Ratings) {
            return 1;
        } else if (y.Ratings > x.Ratings) {
            return -1;
        } else {
            return 0;
        }

    })

    const top3 = pelis.slice(0, 3);
    

    const top3Div = top3.map((pelis) => {

        cajita.innerHTML = '';

        const otroDiv = document.createElement('div');
        otroDiv.classList.add('pelis'); 

        const tituloP = document.createElement('p')
        tituloP.textContent = pelis.Title;
        otroDiv.appendChild(tituloP);

        const YearP = document.createElement('p')
        YearP.textContent = pelis.Year;
        otroDiv.appendChild(YearP);

        const ActorsP = document.createElement('p')
        ActorsP.textContent = pelis.Actors;
        otroDiv.appendChild(ActorsP);

        const AwardsP = document.createElement('p')
        AwardsP.textContent = pelis.Awards;
        otroDiv.appendChild(AwardsP);

        const ProductionP = document.createElement('p')
        ProductionP.textContent = pelis.Production;
        otroDiv.appendChild(ProductionP);

        const Poster = document.createElement('img');
        Poster.src = pelis.Poster
        otroDiv.appendChild(Poster);




        return otroDiv;
    });

    top3Div.forEach((div) => {
        cajita.appendChild(div)
    })
    //cajita.appendChild(top3Div);

};


const buttontop3 = document.getElementById("mejoresPelis")
buttontop3.addEventListener('click', top3);

const porfechas = () => {




    event.preventDefault();

pelis.sort((x, y) => {
    if (x.Year < y.Year) {
        return 1;
    } else if (y.Year > x.Year) {
        return -1;
        } else {
            return 0;
        }

    })

    const fechasDiv = pelis.map((pelis) => {

        cajita.innerHTML = '';

        const otroDiv = document.createElement('div');
        otroDiv.classList.add('pelis'); 

        const tituloP = document.createElement('p')
        tituloP.textContent = pelis.Title;
        otroDiv.appendChild(tituloP);

        const YearP = document.createElement('p')
        YearP.textContent = pelis.Year;
        otroDiv.appendChild(YearP);

        const ActorsP = document.createElement('p')
        ActorsP.textContent = pelis.Actors;
        otroDiv.appendChild(ActorsP);
 
        const AwardsP = document.createElement('p')
        AwardsP.textContent = pelis.Awards;
        otroDiv.appendChild(AwardsP);

        const ProductionP = document.createElement('p')
        ProductionP.textContent = pelis.Production;
        otroDiv.appendChild(ProductionP);

        const Poster = document.createElement('img');
        Poster.src = pelis.Poster
        otroDiv.appendChild(Poster);




        return otroDiv;
    });

    fechasDiv.forEach((div) => {
        cajita.appendChild(div)
    })
    //cajita.appendChild(top3Div);

};


const fechitas = document.getElementById("fechas-de-lanzamiento")
fechitas.addEventListener('click', porfechas);



const ordenado = () => {

    event.preventDefault();

    pelis.sort((x, y) => {
        if (x.Title < y.Title) {
            return -1;
        } else if (y.Title > x.Title) {
            return 1;
            } else {
                return 0;
            }
    
        })
    
        const ordenadoDiv = pelis.map((pelis) => {
    
            cajita.innerHTML = '';
    
            const otroDiv = document.createElement('div');
            otroDiv.classList.add('pelis'); 
    
            const tituloP = document.createElement('p')
            tituloP.textContent = pelis.Title;
            otroDiv.appendChild(tituloP);
    
            const YearP = document.createElement('p')
            YearP.textContent = pelis.Year;
            otroDiv.appendChild(YearP);
    
            const ActorsP = document.createElement('p')
            ActorsP.textContent = pelis.Actors;
            otroDiv.appendChild(ActorsP);
     
            const AwardsP = document.createElement('p')
            AwardsP.textContent = pelis.Awards;
            otroDiv.appendChild(AwardsP);
    
            const ProductionP = document.createElement('p')
            ProductionP.textContent = pelis.Production;
            otroDiv.appendChild(ProductionP);
    
            const Poster = document.createElement('img');
            Poster.src = pelis.Poster
            otroDiv.appendChild(Poster);
    
    
    
    
            return otroDiv;
        });
    
        ordenadoDiv.forEach((div) => {
            cajita.appendChild(div)
        })
        //cajita.appendChild(top3Div);
    
    };
    
const ordenadito = document.getElementById("ordenar")
ordenadito.addEventListener('click', ordenado);



const todasLasPelis = () => {
    event.preventDefault();
    
    cajita.innerHTML = '';
    
    const pelisdiv = pelis.map((pelis)=>{
       
    
        const otroDiv = document.createElement('div');
        otroDiv.classList.add('pelis'); 

        const tituloP = document.createElement('p')
        tituloP.textContent = pelis.Title;
        otroDiv.appendChild(tituloP);

        const YearP = document.createElement('p')
        YearP.textContent = pelis.Year;
        otroDiv.appendChild(YearP);

        const ActorsP = document.createElement('p')
        ActorsP.textContent = pelis.Actors;
        otroDiv.appendChild(ActorsP);
 
        const AwardsP = document.createElement('p')
        AwardsP.textContent = pelis.Awards;
        otroDiv.appendChild(AwardsP);

        const ProductionP = document.createElement('p')
        ProductionP.textContent = pelis.Production;
        otroDiv.appendChild(ProductionP);

        const Poster = document.createElement('img');
        Poster.src = pelis.Poster
        otroDiv.appendChild(Poster);




        return otroDiv;

   });
   pelisdiv.forEach((div) => {
    cajita.appendChild(div)
})
};

const todito = document.getElementById("todas-las-pelis")
todito.addEventListener('click', todasLasPelis);




//funcion de buscar




const infopelis = (pelisMostrar) => {
    
    
    cajita.innerHTML = '';
    
    
    
    const pelisdiv = pelisMostrar.map((pelis)=>{
        const otroDiv = document.createElement('div');
        otroDiv.classList.add('pelis'); 

        const tituloP = document.createElement('p')
        tituloP.textContent = pelis.Title;
        otroDiv.appendChild(tituloP);

        const YearP = document.createElement('p')
        YearP.textContent = pelis.Year;
        otroDiv.appendChild(YearP);

        const ActorsP = document.createElement('p')
        ActorsP.textContent = pelis.Actors;
        otroDiv.appendChild(ActorsP);
        
        const AwardsP = document.createElement('p')
        AwardsP.textContent = pelis.Awards;
        otroDiv.appendChild(AwardsP);
        
        const ProductionP = document.createElement('p')
        ProductionP.textContent = pelis.Production;
        otroDiv.appendChild(ProductionP);
        
        const Poster = document.createElement('img');
        Poster.src = pelis.Poster
        otroDiv.appendChild(Poster);
        
        
        
        
        return otroDiv;

    });
    pelisdiv.forEach((div) => {
    cajita.appendChild(div)
})

};



const buscarPelis =()=>{
    
    event.preventDefault();

    const inputBusqueda = document.getElementById('busqueda').value.toLowerCase();
    let PelisFiltradas = pelis.filter((pelis)=>{
        return pelis.Title.toLowerCase().includes(inputBusqueda);
    });
    infopelis(PelisFiltradas);
};

const botonBuscar = document.getElementById('BotonDeBuscar')
botonBuscar.addEventListener('click', buscarPelis);

document.addEventListener('DOMContentLoaded', () => {
    infopelis(pelis)
});

const limpiar =()=>{
    event.preventDefault();
    cajita.innerHTML = '';

};
const botonlimpiar = document.getElementById('limpiar')
botonlimpiar.addEventListener('click' , limpiar)

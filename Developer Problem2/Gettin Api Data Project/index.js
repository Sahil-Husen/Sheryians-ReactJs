

let cards= document.querySelector('#parent')

let button = document.getElementById('button')
// let count = -1;
button.addEventListener('click',()=>{

    fetch(`https://randomuser.me/api/`)
    .then(response =>response.json())
    .then(results =>{
        const {name,email,gender,picture} = results.results[0];
        // console.log(count);
         
        
        // console.log(results.results[0]);
        cards.innerHTML +=`<div class="card rounded-md w-[200px] h-[200px] bg-zinc-500  overflow-hidden p-2 ">
            <div class="w-14 h-14 mb-2 bg-blue-100 rounded-full">
                <img class="w-full h-full rounded-full object-cover" src=${picture.large} alt="">
            </div>
            <div>
                <h1 class="text-bold font-semibold text-xl">${name.first}</h1>
                <h3 class="opacity-40 text-semibold mb-1">${email}</h3>
                <h2 class=" text-blue-100 font-bold ">${gender} </h2>
            
            </div>
        </div>`
    })
    
})
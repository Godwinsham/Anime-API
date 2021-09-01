const element = document.createElement('div');
element.setAttribute('id','Div1');
document.body.appendChild(element);
element.innerHTML ='<form id="form1" class="searchbar">  <input type="text" placeholder="Search.." name="search" required><button type="submit"><i class="fa fa-search"></i></button></input></form>';

const form =document.getElementById('form1');
form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const animeName = e.target.search.value
    const url = `https://api.jikan.moe/v3/search/anime?q=${animeName}`
    let response;
   
    try {
      response = await fetch(url).then((res) => res.json());
    } catch (error) {
        alert("Something went wrong / Enter a valid Anime Name")
    }
    const animeData = response.results;
    console.log(animeData);
    }
    
 );
 

    




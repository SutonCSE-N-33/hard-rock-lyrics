
 const searchBtn = document.getElementById('searchBtn');
 searchBtn.addEventListener('click',function(){
    const userInput = document.getElementById('userInput').value;
    document.querySelector('.search-result').innerHTML = '';

    fetch(`https://api.lyrics.ovh/suggest/${userInput}`)
    .then(response => response.json())
    .then(data => {
     const mainData =  data.data.slice(0,5);
     mainData.map(lyric => {
         const title = lyric.title;
         const name = lyric.artist.name;
        const searchResult = document.querySelector('.search-result');
        searchResult.innerHTML += `<div class="single-result row align-items-center my-3 p-3">
        <div class="col-md-9">
            <h3 class="lyrics-name">${title}</h3>
            <p class="author lead">Album by <span>${name}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button class="btn btn-success" onclick="userDetails('${name}','${title}')">Get Lyrics</button>
        </div>
    </div>`;
   }
   
    
    );
    document.getElementById('userInput').value = '';
}
 )
 }
 )


 function userDetails(name,title){
     fetch(`https://api.lyrics.ovh/v1/${name}/${title}`)
     .then(response => response.json())
     .then(data => {
         const singleLyrics = document.querySelector('.single-lyrics');
         singleLyrics.innerHTML=data.lyrics;
     })
 }
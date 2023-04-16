(async function () {
   const move = await fetch("./data.json");
   const movdata = await move.json();
   let result = document.getElementById("result");
   let g = document.getElementById("genre");
   let r = document.getElementById("rating");
   let l = document.getElementById("language");
   let y = document.getElementById("year");
   let g2 = g.value;
   let r2 = r.value;
   let l2 = l.vamue;
   let y4 = y.value;
   console.log(movdata);
//    fetch("data.json")
//   .then(response => response.json())
//   .then(data => {
//     const imagePath = data.poster_path;
//     const imageElement = document.getElementById("movie-poster");
//     imageElement.src = imagePath;
//   });
       
let p =movdata.filter(function(val){
        return(val.original_language==="English",val.genres,val.vote_average==8);
         

});
console.log(p);
   

   dataex(3);
  // console.log( movdata[1]);
   function dataex(a) {
      let langmove = movdata[a].original_language;
      let date = movdata[a].release_date;
      let changdate = date.substring(0, 4);
      let arrygenres = movdata[a].genres// ek arry 
      let rating = movdata[a].vote_average;
     // let poster = movdata[a].poster_path
      let namemove = movdata[a].title
      result.innerHTML =`<hr>
      <p>The name is <b>${namemove}</b> <p>
      <p>Rlease date is ${changdate} </p>
      <p>The language is ${langmove}</p>
      <p>The rating is ${rating}</p> 
      <p>The genres is  ${arrygenres}</p>
      `
      // console.log(poster);
      // console.log(changdate);
      // console.log(langmove);
      // console.log(arrygenres);
      // console.log("the rating is " + rating)
   }





   //function ilyas(h){
   //result.innerHTML="<hr>"
   // console.log(${movdata});
   //}

})();
(async function () {
   
   const move = await fetch("./data.json");
   const movdata = await move.json();
   let anser = document.getElementById("result");
   let g = document.getElementById("genre");
   let r = document.getElementById("rating");
   let l = document.getElementById("language");
   let y = document.getElementById("year");
   let xy = document.getElementById("butt");
   let g2 = g.value;
   let r2 = r.value;
   let l2 = l.value;
   let y4 = y.value;
   console.log(movdata);
  // xy.addEventListener("click",);
  
   function searching(arr,val){
      let arryear=[]; 
   for (let i = 0; i < arr.length; i++) {
       if(arr[i].release_date.substring(0, 4) == val){
         arryear.push(arr[i]);
      }
      }
      //let  arryear=[];
      return arryear; 
   }
   let lang=searching(movdata,y4); 
function language(Arrdata,val){
   let arrlang = [];
      for(let b=0; b<Arrdata.length; b++){
         if(Arrdata[b].original_language === val){
            arrlang.push(Arrdata[b]);
      }
}
return arrlang;
}
let language1 =language(lang,l2);
function rat(Arrdata,val){
   let arrlang = [];
      for(let b=0; b<Arrdata.length; b++){
         if(Arrdata[b].vote_average >= val){
            arrlang.push(Arrdata[b]);
      }
}
return arrlang;
}
let rating = rat(language1,r2);
//console.log(l2);

//console.log(lang);
//console.log(language1);
//console.log(rating);

   //dataex();
   // for (let index = 0; index < rating.length; index++) {
   //    dataex(index,rating);
   // }
//   function dataex(a,da) {
//       let langmove = da[a].original_language;
//       let date = da[a].release_date;
//       let changdate = date.substring(0, 4);
//       let arrygenres = da[a].genres// ek arry 
//       let rating = da[a].vote_average;
//       let poster = da[a].poster_path
//       let namemove = da[a].title
//       result.innerHTML =`<hr>
//       <p>The name is <b>${namemove}</b> <p>
//       <p>Rlease date is ${changdate} </p>
//       <p>The language is ${langmove}</p>
//       <p>The rating is ${rating}</p> 
//       <p>The genres is  ${arrygenres}</p>
//       `
//       console.log(namemove);
//        console.log(poster);
//        console.log(changdate);
//        console.log(langmove);
//        console.log(arrygenres);
//        console.log("the rating is " + rating);
//    }

rating.forEach(function(obj){
      const li = document.createElement("li");
      const listItem = `
      <hr>
      <h2 class="title">${obj.title}</h2>
      <img  src="${obj.poster_path}">
      <div class=" Movie Description"> 
      <p>Rating is ${obj.vote_average}<p>
      <p>The Genres is ${obj.genres}<p>
      <p>The language is ${obj.original_language} <p>
      <p>The certification is ${obj.certification} <p>
      <p>The time is ${( obj.runtime/60).toFixed(1)} h <p>
      
      </div>
  `;
  li.innerHTML = listItem;
  anser.appendChild(li);

})
   
})();
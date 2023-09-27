


let IdIcon = document.getElementById("icon") ;
let myIdElement = document.getElementById("show_list") ;

var link = document.querySelectorAll(' #show_list li ');

console.log(link[0].textContent);

IdIcon.onclick = function(){
   myIdElement.classList.toggle("show");
 }

  for( var i =0 ; i< 6 ; i++){
    link[i].onclick = function(){
        myIdElement.classList.remove("show");
     }

  }


var silderitems = Array.from(document.querySelectorAll('.side-conatine .side-item'));

var silderCountItems = silderitems.length;

var curentsilderItems = 1;

var nextButtounsItem = document.getElementById('nextItme');
var PrevButtounsitems = document.getElementById('pervItme');


nextButtounsItem.onclick = nextSildeItem;
PrevButtounsitems.onclick = PrevSildeItem;

// if(curentsilderItems == 1){
//     setInterval(
//         function () {
//             nextSildeItem()
//         }, 3000);
// }

//else{

// }

// setInterval(
//     function () {
//         PrevSildeItem()
//     }, 9000);

    var paginationElement = document.createElement('ul');

    paginationElement.setAttribute('id','pagination_ul');
    
    for( var i =1 ; i<= silderCountItems ; i++){
    
        var paginationItem = document.createElement('li');
        paginationItem.setAttribute('data-index',i);
    
        paginationItem.appendChild(document.createTextNode(""));
    
        paginationElement.appendChild(paginationItem); 
    }
    
    document.getElementById('indicators').appendChild(paginationElement);
    
    
    var paginationCreatdUl = document.getElementById('pagination_ul');
    
    var paginationBultes = Array.from(document.querySelectorAll('#pagination_ul li'))
    
    
    for( var i= 0 ; i < paginationBultes.length ; i++){
        paginationBultes[i].onclick = function(){
            curentsilderItems = parseInt(this.getAttribute('data-index'));
            itemeChecker();
        }
    }
    
    
itemeChecker();

function nextSildeItem(){
    if(curentsilderItems== 5){
        curentsilderItems = 0
   } else{
    curentsilderItems++;
    console.log(curentsilderItems);
    console.log(silderCountItems);
    itemeChecker();
   }
}


function PrevSildeItem(){
    if(curentsilderItems == 1){
        curentsilderItems = 4;
   } else{
    curentsilderItems--;
    console.log(curentsilderItems);
    console.log(silderCountItems);
    itemeChecker();
   }
}


function  itemeChecker(){

    RemoveAllItemsActive();
    silderitems[curentsilderItems -  1].classList.add('active');

    paginationCreatdUl.children[curentsilderItems - 1].classList.add('active');

    // if(curentsilderItems == 1){
    //     PrevButtounsitems.classList.add('disabled');
    // }else{
    //     PrevButtounsitems.classList.remove('disabled');

    // }
    // if(curentsilderItems == silderCountItems){
    //     nextButtounsItem.classList.add('disabled');
    // }else{
    //     nextButtounsItem.classList.remove('disabled');

    // }



}

function RemoveAllItemsActive(){

    silderitems.forEach(function(item){
        item.classList.remove('active');
    });

    paginationBultes.forEach(function(bullet){
        
        bullet.classList.remove('active');

    });

    
}


  // START SERVERS SECTION
     
  var boxes = Array.from(document.querySelectorAll('#servers .box '));
  var boxessubcontent = Array.from(document.querySelectorAll('#servers .box .sub-content'));
   var sildup = document.getElementById('sildup');
  boxes.forEach(function(box){
      
      box.classList.remove('show');
      
    }); 
    var boxcontitem  = 2    

    for( var i= 0 ; i < boxes.length ; i++){
          boxes[i].onclick = function(){
         boxcontitem = parseInt(this.getAttribute('data-index'));
       BoxesChecker();
      }
  }
  
  boxessubcontent.forEach(function(boxsubcontent){
            
    // boxsubcontent.style.opacity="0";
    boxsubcontent.style.display="none";
   
}); 

  function  BoxesChecker(){

    // boxes.forEach(function(box){
            
    //     box.classList.remove('show');
        
    // }); 

    
    
    
    // sildup.onclick = function(){
    //     //    boxes[boxcontitem -  1].classList.remove('show');
    //     //   boxessubcontent[boxcontitem -  1].classList.add('hidden');
    //}

boxes[boxcontitem -  1].classList.toggle('show');
boxessubcontent[boxcontitem -  1].classList.toggle('hidden');
//  boxessubcontent[boxcontitem -  1].style.opacity="1";
    
   
    

    
    

    // paginationCreatdUl.children[curentsilderItems - 1].classList.add('active');

    // if(curentsilderItems == 1){
    //     PrevButtounsitems.classList.add('disabled');
    // }else{
    //     PrevButtounsitems.classList.remove('disabled');

    // }
    // if(curentsilderItems == silderCountItems){
    //     nextButtounsItem.classList.add('disabled');
    // }else{
    //     nextButtounsItem.classList.remove('disabled');

    // }


}

 
  
  // END SERVERS SECTION 

  // START  VEIDEO  

  var play = document.getElementById('play');
  var cover = document.getElementById('cover');
  var video = document.getElementById('video-play');

   
   play.onclick = function(){
   cover.classList.add('play');
   video.play(); 
  }
   
   
   
  // START  VEIDEO  


  // STRAT NEWS BASEL AHMED

  let scrollcontainer = document.querySelector(".side-container");
  let backbtn = document.getElementById("pervnews");
  let nextbtn = document.getElementById("nextnews");


  scrollcontainer.addEventListener("wheel",(evt)=>{
     evt.preventDefault();
     scrollcontainer.scrollLeft += evt.deltY;
});

nextbtn.addEventListener("click", ()=>
{
  scrollcontainer.style.scrollBehavior ="smooth"
  
  scrollcontainer.scrollLeft += 900;
  
  console.log("slmslm");
}
);
backbtn.addEventListener("click", ()=>
{ 
   scrollcontainer.style.scrollBehavior ="smooth"
  scrollcontainer.scrollLeft -= 900; }
);





    var sildernews = Array.from(document.querySelectorAll('.news .side-container .side-box'));

    var silderCountNews = sildernews.length;

    var curentsildernews = 1;

    var nextButtounsnews = document.getElementById('nextnews');
    
    var PrevButtounsnews = document.getElementById('pervnews');


     nextButtounsnews.onclick = nextSildenews;
     PrevButtounsnews.onclick = PrevSildenews;
     
 
     newsChecker();

     
     function nextSildenews(){
        if(curentsildernews == 2){
            curentsildernews = 1;
       } else{
         curentsildernews++;
         console.log(curentsildernews);
         newsChecker();
       }
        }
        
        function PrevSildenews(){
            if(curentsildernews == 1){
                curentsildernews = 2;
           } else{
            curentsildernews--;
            console.log(curentsildernews);
            newsChecker();
           }
            

     }
     
     
    function  newsChecker(){
         
         sildernews.forEach(function(news){
             news.classList.remove('show');
            });
      sildernews[curentsildernews -  1].classList.add('show');
 
       }
  // END NEWS BASEL AHMED 




    
// START NEWS PAGE  BY BASEL AHMED 



// END NEWS PAGE  BY BASEL AHMED  

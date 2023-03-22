
// Items
var allData=[];

function getAllItems(){

var myHttpReq=new XMLHttpRequest();
myHttpReq.open('GET',`https://www.themealdb.com/api/json/v2/9973533/latest.php`);
myHttpReq.send();

myHttpReq.addEventListener('readystatechange',()=>{
    if(myHttpReq.readyState==4 && myHttpReq.status==200)
    {
        $('.loadingScreen').addClass('d-none')
        allData=JSON.parse(myHttpReq.response).meals;
        displyItems ()
        $('.loadingScreen').addClass('d-none')
      }})}
// getAllItems
getAllItems()

// displyItems
function displyItems (){
for (let i = 0; i < allData.length; i++) {
            $('#allDataInsert').append(` <div class="col-md-4 col-lg-3 col-sm-6 d-flex" >
        <div class="item my-3">
        <img src="${allData[i].strMealThumb}" class="w-100" alt="Not Found This Image">
        <div class="layer" onclick="getItemId(${allData[i].idMeal})">
        <h3 id="strMealName" >${allData[i].strMeal}</h3>
         </div>
   </div>
   </div>`)

}

}

    // Category
    var allCategory=[];
    function getAllCategory(){
        var myHttpReqCategory=new XMLHttpRequest();
    myHttpReqCategory.open('GET',`https://www.themealdb.com/api/json/v1/1/categories.php`);
    myHttpReqCategory.send();
    
    myHttpReqCategory.addEventListener('readystatechange',()=>{
        if(myHttpReqCategory.readyState==4 && myHttpReqCategory.status==200)
        {
            $('.loadingScreen').addClass('d-none')
            allCategory=JSON.parse(myHttpReqCategory.response).categories;
            displyCategory ()
            $('.loadingScreen').addClass('d-none')
          }})}
    // getAllItems
    getAllCategory()
        // displyCategory
    function displyCategory (){
    for (let i = 0; i < allCategory.length; i++) {
      
              $('#allDataInsertCategories').append(` <div class="col-md-4 col-lg-3 col-sm-6 d-flex" >
                <div class="item my-3">
            <img src="${allCategory[i].strCategoryThumb}" class="w-100" alt="Not Found This Image">
            <div class="layerCategory text-center" onclick="searchCategories(this)" >
                  <h3>${allCategory[i].strCategory}</h3>
                  <p class="text-black"> ${allCategory[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                           </div>
       </div>
       </div>`)
    }}

    // allItemsSearchCategory

var allItemsSearchCategory=[];
function searchCategories(term){
  $('#allDataInsertSeCats').empty()
  let strCategorySearch = $(term).find("h3").text();

  var myHttpReqCategorySearch = new XMLHttpRequest();
  myHttpReqCategorySearch.open("GET",`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategorySearch}`);
  myHttpReqCategorySearch.send();
  myHttpReqCategorySearch.addEventListener("readystatechange", () => {
    if (myHttpReqCategorySearch.readyState == 4 && myHttpReqCategorySearch.status == 200) {
      allItemsSearchCategory = JSON.parse(myHttpReqCategorySearch.response).meals;
      
      $('.divVisible').addClass('d-none')
      $('.searchCategories').toggleClass('d-none')

      for (let i = 0; i < allItemsSearchCategory.length; i++) {
          console.log(allItemsSearchCategory);
          $("#allDataInsertSeCats").append(`<div class="col-md-4 col-lg-3 col-sm-6 d-flex" >
            <div class="item my-3">
            <img src="${allItemsSearchCategory[i].strMealThumb}" class="w-100" alt="Not Found This Image">
            <div class="layer" onclick="getItemId(${allItemsSearchCategory[i].idMeal})">
            <h3 id="strMealName">${allItemsSearchCategory[i].strMeal}</h3>
          </div>
          </div>
          </div>`
 );}}});}

// Area
var allArea=[];

function getAllArea(){

var myHttpReqArea=new XMLHttpRequest();
myHttpReqArea.open('GET',`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
myHttpReqArea.send();
myHttpReqArea.addEventListener('readystatechange',()=>{
    if(myHttpReqArea.readyState==4 && myHttpReqArea.status==200)
    {
        $('.loadingScreen').addClass('d-none')
        allArea=JSON.parse(myHttpReqArea.response).meals;
        displyArea ()
        $('.loadingScreen').addClass('d-none')
      }})}
// getArea
getAllArea()
// displyArea
function displyArea (){
for (let i = 0; i < allArea.length; i++) {
  
          $('#allDataInsertArea').append(` <div class="col-md-4 col-lg-3 col-sm-6 d-flex" >
            <div class="item my-3" >
            <div class=" text-white text-center" onclick="searchArea(this)">
            <i class="fa-solid fa-house-circle-exclamation iconIngredient" ></i>
              <h3>${allArea[i].strArea}</h3> </div>   </div>   </div>`   )
}}

// allItemsSearchArea
    var allItemsSearchArea=[];
    function searchArea(term){
      $('#allDataInsertSearchArea').empty()
      let strAreaSearch = $(term).find("h3").text();
    
      var myHttpReqAreaSearch = new XMLHttpRequest();
      myHttpReqAreaSearch.open("GET",`https://www.themealdb.com/api/json/v1/1/filter.php?a=${strAreaSearch}`);
      myHttpReqAreaSearch.send();
      myHttpReqAreaSearch.addEventListener("readystatechange", () => {
        if (myHttpReqAreaSearch.readyState == 4 && myHttpReqAreaSearch.status == 200) {
          allItemsSearchArea = JSON.parse(myHttpReqAreaSearch.response).meals;

          $('.divVisible').addClass('d-none')
          $('.searchArea').toggleClass('d-none')
          for (let i = 0; i < allItemsSearchArea.length; i++) {
          
              $("#allDataInsertSearchArea").append(`<div class="col-md-4 col-lg-3 col-sm-6 d-flex" >
                <div class="item my-3">
                <img src="${allItemsSearchArea[i].strMealThumb}" class="w-100" alt="Not Found This Image">
                <div class="layer" onclick="getItemId(${allItemsSearchArea[i].idMeal})">
                <h3 id="strMealName">${allItemsSearchArea[i].strMeal}</h3>
              </div>
              </div>
              </div>`
     );}}});}




 // Ingredient
 var allIngredient=[];
 function getAllIngredient(){
  var myHttpReqIngredient=new XMLHttpRequest();
 myHttpReqIngredient.open('GET',`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
 myHttpReqIngredient.send();
 
 myHttpReqIngredient.addEventListener('readystatechange',()=>{
     if(myHttpReqIngredient.readyState==4 && myHttpReqIngredient.status==200)
     {
         $('.loadingScreen').addClass('d-none')
         allIngredient=JSON.parse(myHttpReqIngredient.response).meals.slice(0,20);
         displyIngredient ()
         $('.loadingScreen').addClass('d-none')
       }})}
 // getAllIngredient
 getAllIngredient()
 
 // displyItems
 function displyIngredient (){
 for (let i = 0; i < allIngredient.length; i++) {
   
           $('#allDataInsertIngredient').append(` <div class="col-md-4 col-lg-3 col-sm-6 d-flex" >
             <div class="item my-3">
             <div class=" text-white text-center " onclick="searchIngredient(this)">
             <i class="fa-sharp fa-solid fa-cookie-bite iconIngredient"></i>
               <h3>${allIngredient[i].strIngredient}</h3>
               <p> ${allIngredient[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
               
               </div>
    </div>
    </div>`)
 }}

// allItemsSearchIngredient
var allItemsSearchIngredient=[];
function searchIngredient(term){
  $('#allDataInsertSearchIngredients').empty()
  let strIngredientSearch = $(term).find("h3").text();

  var myHttpReqIngredientSearch = new XMLHttpRequest();
  myHttpReqIngredientSearch.open("GET",`https://www.themealdb.com/api/json/v1/1/filter.php?i=${strIngredientSearch}`);
  myHttpReqIngredientSearch.send();
  myHttpReqIngredientSearch.addEventListener("readystatechange", () => {
    if (myHttpReqIngredientSearch.readyState == 4 && myHttpReqIngredientSearch.status == 200) {
      allItemsSearchIngredient = JSON.parse(myHttpReqIngredientSearch.response).meals;

 
      $('.divVisible').addClass('d-none')
      $('.searchIngredients').toggleClass('d-none')

      for (let i = 0; i < allItemsSearchIngredient.length; i++) {
      
          $("#allDataInsertSearchIngredients").append(`<div class="col-md-4 col-lg-3 col-sm-6 d-flex" >
            <div class="item my-3" ">
            <img src="${allItemsSearchIngredient[i].strMealThumb}" class="w-100" alt="Not Found This Image">
            <div class="layer" onclick="getItemId(${allItemsSearchIngredient[i].idMeal})">
            <h3 id="strMealName">${allItemsSearchIngredient[i].strMeal}</h3>
          </div>
          </div>
          </div>`

          // onclick="getItemId(this)
 );

}
}});}

 var itemIdDetails={};
 function getItemId(term){
  //  $('#allDataInsertSearchIngredients').empty()
  //  let itemIdDetails = $(term).find("h3").text();
    let itemId =term

   var myHttpitemId = new XMLHttpRequest();
   myHttpitemId.open("GET",`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`);
   myHttpitemId.send();
   myHttpitemId.addEventListener("readystatechange", () => {
     if (myHttpitemId.readyState == 4 && myHttpitemId.status == 200) {
      itemIdDetails = JSON.parse(myHttpitemId.response).meals;
 
  
       $('.divVisible').addClass('d-none')
       $('.singleItem').toggleClass('d-none')
 
       for (let i = 0; i < itemIdDetails.length; i++) {
       console.log(itemIdDetails[i].strIngredient1+" "+itemIdDetails[i].strMeasure1);
           $("#allDataInsertsingleItemId").html(` <div class="col-sm-12 col-md-5 col-lg-4  d-flex" >
           <div class="item">
         <img src="${itemIdDetails[i].strMealThumb}" class="w-100" alt="Not Found This Image">
            <h3 id="strMealName" class="mt-3" >${itemIdDetails[i].strMeal}</h3>
         </div>
            </div>
     
            <div class="col-sm-12 col-md-7 col-lg-8  d-flex" >
             <div class="item ">
                 <h2 class="text-primary">Instructions </h2>
     <p>${itemIdDetails[i].strInstructions}</p>
       <h4 id="strMealArea" class="text-primary">Area : <span class="spanDetails">${itemIdDetails[i].strArea}</span> </h4>
       <h4 id="strMealArea" class="text-primary" >Category : <span class="spanDetails">${itemIdDetails[i].strCategory}</span> </h4>
       <h4 id="strMealArea"  class="text-primary">Recipes :</h4>
     <div class="ulIngredient">
       <li class="IngredientList">${itemIdDetails[i].strIngredient1+" "+itemIdDetails[i].strMeasure1}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient2+" "+itemIdDetails[i].strMeasure2}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient3+" "+itemIdDetails[i].strMeasure3}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient4+" "+itemIdDetails[i].strMeasure4}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient5+" "+itemIdDetails[i].strMeasure5}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient6+" "+itemIdDetails[i].strMeasure6}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient7+" "+itemIdDetails[i].strMeasure7}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient8+" "+itemIdDetails[i].strMeasure8}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient9+" "+itemIdDetails[i].strMeasure9}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient10+" "+itemIdDetails[i].strMeasure10}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient11+" "+itemIdDetails[i].strMeasure11}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient12+" "+itemIdDetails[i].strMeasure12}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient13+" "+itemIdDetails[i].strMeasure13}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient14+" "+itemIdDetails[i].strMeasure14}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient15+" "+itemIdDetails[i].strMeasure15}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient16+" "+itemIdDetails[i].strMeasure16}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient17+" "+itemIdDetails[i].strMeasure17}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient18+" "+itemIdDetails[i].strMeasure18}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient19+" "+itemIdDetails[i].strMeasure19}</li>
       <li class="IngredientList">${itemIdDetails[i].strIngredient20+" "+itemIdDetails[i].strMeasure20}</li> 

     </div>
     <h2 class="text-primary">Tags: </h2>
     <div class="ulTags">
          <li class="IngredientList">${itemIdDetails[i].strTags}</li>
     </div>
     <div class="source py-3">
     
       <a target="_blank" href="${itemIdDetails[i].strSource}" class="btn btn-success">Source</a>
       <a target="_blank" href="${itemIdDetails[i].strYoutube}" class="btn btn-danger">Youtube</a>
     </div>
                </div>
              </div>`
  )
 
  ;}}});}





 let switchMenue = 0;
 $("#menueIcon").click(() => {
   if (switchMenue == 0) {
     $(".menue1").css("left", "0");
     $(".menue2").css("left", "20%");
     switchMenue = 1;
   } else if (switchMenue == 1) {
     $(".menue1").css("left", "-20%");
     $(".menue2").css("left", "0%");
     switchMenue = 0;
   }
 });


 function menue() {
   if (switchMenue == 0) {
     $(".menue1").css("left", "0");
     $(".menue2").css("left", "20%");
     switchMenue = 1;
   } else if (switchMenue == 1) {
     $(".menue1").css("left", "-20%");
     $(".menue2").css("left", "0%");
     switchMenue = 0;
   }
 }


// Menue Links//////////
$('#logoHome').click(()=>{
    $('.divVisible').addClass('d-none')
    $('.allItems').toggleClass('d-none')
    menue()
})

// Sections //
$('.divVisible').addClass('d-none')
$('.allItems').toggleClass('d-none')




$('#Search').click(()=>{
    $('.divVisible').addClass('d-none')
    $('.Search').toggleClass('d-none')
    menue()
})

$('#Categories').click(()=>{
    $('.divVisible').addClass('d-none')
    $('.Categories').toggleClass('d-none')
    menue()
})

// $('#searchCategories').click(()=>{
//   $('.divVisible').addClass('d-none')
//   $('.searchCategories').toggleClass('d-none')

// })

$('#Area').click(()=>{
    $('.divVisible').addClass('d-none')
    $('.Area').toggleClass('d-none')
    menue()
})

// $('#searchArea').click(()=>{
//   $('.divVisible').addClass('d-none')
//   $('.searchArea').toggleClass('d-none')
// })

$('#Ingredients').click(()=>{
    $('.divVisible').addClass('d-none')
    $('.Ingredients').toggleClass('d-none')
    menue()
})


$('#singleItem').click(()=>{
  $('.divVisible').addClass('d-none')
  $('.singleItem').toggleClass('d-none')
  menue()
})



$('#ContactUs').click(()=>{
    $('.divVisible').addClass('d-none')
    $('.ContactUs').toggleClass('d-none')
    menue()
})



          // <h5>${allData[i].strMeal.split(" ").slice(0,3).join(" ")}</h5> 


  
      // // Category
      // var allItemsSearchByName=[];
      // function getItemsSearchByName(){
      //     var myHttpReqItemsSearchByName=new XMLHttpRequest();
      // myHttpReqItemsSearchByName.open('GET',`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`);
      // myHttpReqItemsSearchByName.send();
      
      // myHttpReqItemsSearchByName.addEventListener('readystatechange',()=>{
      //     if(myHttpReqItemsSearchByName.readyState==4 && myHttpReqItemsSearchByName.status==200)
      //     {
      //         $('.loadingScreen').addClass('d-none')
      //         allItemsSearchByName=JSON.parse(myHttpReqItemsSearchByName.response).categories;
      //         displyItemsSearchByName ()
      //         $('.loadingScreen').addClass('d-none')
      //       }})}
      // // getAllItems
      // getAllCategory()
      //     // displyCategory
      // function displyItemsSearchByName (){
      // for (let i = 0; i < allItemsSearchByName.length; i++) {
        
      //           $('#allDataInsertCategories').append(` <div class="col-md-4 col-lg-3 col-sm-6 d-flex" >
      //             <div class="item my-3">
      //         <img src="${allItemsSearchByName[i].allItemsSearchByName}" class="w-100" alt="Not Found This Image">
      //         <div class="layerCategory text-center" onclick="searchCategories(this)" >
      //               <h3>${allItemsSearchByName[i].strCategory}</h3>
      //               <p class="text-black"> ${allItemsSearchByName[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
      //                        </div>
      //    </div>
      //    </div>`)
      // }}
  

  



   var allItemsSearchByName=[];
  function searchByName(term){
let nameSearch=term
// console.log(nameSearch);

var myHttpReqItemsSearchByName=new XMLHttpRequest();
myHttpReqItemsSearchByName.open('GET',`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
myHttpReqItemsSearchByName.send();

myHttpReqItemsSearchByName.addEventListener('readystatechange',()=>{
    if(myHttpReqItemsSearchByName.readyState==4 && myHttpReqItemsSearchByName.status==200)
    {
     console.log(allItemsSearchByName);
        $('.loadingScreen').addClass('d-none')
        allItemsSearchByName=JSON.parse(myHttpReqItemsSearchByName.response).meals;
        // displyItemsSearchByName ()
        $('.loadingScreen').addClass('d-none')
      }
      else{
     console.log('error');
      }
    }
        
    )



    for (let i = 0; i < allItemsSearchByName.length; i++) {
      if(allItemsSearchByName[i].strMeal.includes(nameSearch))
        // if (allItemsSearchByName[i].strMeal.toLowerCase().includes(nameSearch.toLowerCase()))
        {
        // console.log(nameSearch);
 








      $('#allDataInsertSearch').html(`<div class="col-md-4 col-lg-3 col-sm-6 d-flex" >
      <div class="item my-3">
      <img src="${allItemsSearchByName[i].strMealThumb}" class="w-100" alt="Not Found This Image">
      <div class="layer" onclick="getItemId(${allItemsSearchByName[i].idMeal})">
      <h3 id="strMealName">${allItemsSearchByName[i].strMeal}</h3>
    </div>
    </div>
    </div>`)
             }
      }
}

      
    
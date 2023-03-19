
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
        <div class="layer">
              <h3>${allData[i].strMeal}</h3>
     </div>
   </div>
   </div>`)
}}
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
    
    // displyItems
    function displyCategory (){
    for (let i = 0; i < allCategory.length; i++) {
      
              $('#allDataInsertCategories').append(` <div class="col-md-4 col-lg-3 col-sm-6 d-flex" >
                <div class="item my-3">
            <img src="${allCategory[i].strCategoryThumb}" class="w-100" alt="Not Found This Image">
            <div class="layerCategory text-center">
                  <h3>${allCategory[i].strCategory}</h3>
                  <p class="text-black"> ${allCategory[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                  
         </div>
       </div>
       </div>`)
    }}

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
            <div class="item my-3">
            <div class=" text-white text-center">
            <i class="fa-solid fa-house-circle-exclamation iconIngredient"></i>
              <h3>${allArea[i].strArea}</h3>
</div>
   </div>
   </div>`)
}}




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
             <div class=" text-white text-center">
             <i class="fa-sharp fa-solid fa-cookie-bite iconIngredient"></i>
               <h3>${allIngredient[i].strIngredient}</h3>
               <p> ${allIngredient[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
               
               </div>
    </div>
    </div>`)
 }}























 let switchMenue=0
 $('#menueIcon').click(()=>{
if(switchMenue==0){
    
     $('.menue1').css('left','0')
 $('.menue2').css('left','20%')
 switchMenue=1
}
 else if (switchMenue==1)
 
 {
    $('.menue1').css('left','-20%')
    $('.menue2').css('left','0%')
       switchMenue=0
 }
 })

// Menue Links//////////
$('#logoHome').click(()=>{
    $('.divVisible').addClass('d-none')
    $('.allItems').toggleClass('d-none')
})

// Sections //
$('.divVisible').addClass('d-none')
$('.allItems').toggleClass('d-none')




$('#Search').click(()=>{
    $('.divVisible').addClass('d-none')
    $('.Search').toggleClass('d-none')
})

$('#Categories').click(()=>{
    $('.divVisible').addClass('d-none')
    $('.Categories').toggleClass('d-none')
})

$('#Area').click(()=>{
    $('.divVisible').addClass('d-none')
    $('.Area').toggleClass('d-none')
})

$('#Ingredients').click(()=>{
    $('.divVisible').addClass('d-none')
    $('.Ingredients').toggleClass('d-none')
})

$('#ContactUs').click(()=>{
    $('.divVisible').addClass('d-none')
    $('.ContactUs').toggleClass('d-none')
})



          // <h5>${allData[i].strMeal.split(" ").slice(0,3).join(" ")}</h5> 

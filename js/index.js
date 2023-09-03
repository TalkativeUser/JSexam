
// START ELEMENT HTML

const open_close_toggle=document.querySelector('i.open-close-icon')
let inputByName;
let inputByFirstLetter;

const btnSearsh=document.querySelector('.contentAside .content .searsh')
const btnCategories=document.querySelector('.contentAside .content .Categories')
const btnArea=document.querySelector('.contentAside .content .area')
const btnIngradiants=document.querySelector('.contentAside .content .Ingredients')



// END ELEMENT HTML





// START APP VARIABLE

let mainFood;
let searshResult;
let categoriesResult;
let areaResult;
let ingradiantsResult; 
// END  APP VARIABLE




// START FUNCTIONS

 async function getMainFood() {

let response=await  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
mainFood= await response.json()
  displayMainFood()
  callEvent (mainFood)

    
}

function displayMainFood() {

document.querySelector('.clearAllForNewSectiontClicked').innerHTML=`   <header>
        <main class="main-food bg-black overflow-hidden " >

                <div class="container " >

                        <div class="row mt-5 mb-5 ">

                        </div>

                </div>

        </main>
</header>`

    let mainFoodHtml=``

        for(let i=0;i<mainFood.meals.length;i++ ){

                mainFoodHtml+=`

                <div  class="col-md-6 col-lg-3 mb-4 "   > 
                    
                        <div class="inner-col mainFood-img   position-relative " > 
                                    
                                        <div class='mainFood-lyar ps-2 ' data-index=${i}  ><p> ${mainFood.meals[i].strMeal} </p> </div>
                                        <img class='w-100 ' src="${mainFood.meals[i].strMealThumb}" alt="">
                                        
                                        
                        </div>
                        
                </div>

                `

    
        }

document.querySelector('.main-food .container .row').innerHTML=mainFoodHtml;

    
}

function getAllMealsDesc (foodDesc) {

        
    hide_AsideBar () 

    let Tags= foodDesc.strTags? foodDesc.strTags.split(','):''

    document.querySelector('.clearAllForNewSectiontClicked').innerHTML=` <header></header>  `

    let item=`
        
        <div class="main-food-desc text-white bg-black pb-5 ">

    <div class="container pb-5 ">

        <div class="row pt-5 pb-5 ">

            <div class="col-md-6 col-lg-4 pb-3 ">
                <div class="inner-col1-desc">
                    <img class="w-100 rounded round-3 " src="${foodDesc.strMealThumb}" alt="">
                <h3 class="h2" >${foodDesc.strMeal}</h3>
                </div>
            </div>

            <div class="col-md-6 col-lg-8 pb-3 ">

                <div class="inner-col2-desc">

                <h3 class="h2" >Instructions</h3>
                <p>${foodDesc.strInstructions}</p>
                <h4 class="h3 f-bold " >Area :${foodDesc.strArea }</h4>
                <h4 class="h3 f-bold " >Category : ${foodDesc.strCategory }</h4>
                <h4 class="h3 f-bold " >Recipes :</h4>
                        

   ${foodDesc.strMeasure1?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure1+foodDesc.strIngredient1 }</span>`:'' } 
   ${foodDesc.strMeasure2?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure2+foodDesc.strIngredient2 }</span>`:'' } 
   ${foodDesc.strMeasure3?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure3+foodDesc.strIngredient3 }</span>`:'' } 
   ${foodDesc.strMeasure4?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure4+foodDesc.strIngredient4 }</span>`:'' } 
   ${foodDesc.strMeasure5?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure5+foodDesc.strIngredient5 }</span>`:'' } 
   ${foodDesc.strMeasure6?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure6+foodDesc.strIngredient6 }</span>`:'' } 
   ${foodDesc.strMeasure7?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure7+foodDesc.strIngredient7 }</span>`:'' } 
   ${foodDesc.strMeasure8?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure8+foodDesc.strIngredient8 }</span>`:'' } 
   ${foodDesc.strMeasure9?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure9+foodDesc.strIngredient9 }</span>`:'' } 
   ${foodDesc.strMeasure10?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure10+foodDesc.strIngredient10 }</span>`:'' } 
   ${foodDesc.strMeasure11?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure11+foodDesc.strIngredient11 }</span>`:'' } 
   ${foodDesc.strMeasure12?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure12+foodDesc.strIngredient12 }</span>`:'' } 
   ${foodDesc.strMeasure13?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure13+foodDesc.strIngredient13 }</span>`:'' } 
   ${foodDesc.strMeasure14?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure14+foodDesc.strIngredient14 }</span>`:'' } 
   ${foodDesc.strMeasure15?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure15+foodDesc.strIngredient15 }</span>`:'' } 
   ${foodDesc.strMeasure16?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure16+foodDesc.strIngredient16 }</span>`:'' } 
   ${foodDesc.strMeasure17?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure17+foodDesc.strIngredient17 }</span>`:'' } 
   ${foodDesc.strMeasure18?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure18+foodDesc.strIngredient18 }</span>`:'' } 
   ${foodDesc.strMeasure19?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure19+foodDesc.strIngredient19 }</span>`:'' } 
   ${foodDesc.strMeasure20?`<span class="  me-3 rounded round-2 " >${foodDesc.strMeasure20+foodDesc.strIngredient20 }</span>`:'' } 
            
                    

                <h4  class=" h3 mb-3" >Tags :</h4>
                <div class="mb-4 ps-2 " >
                 
           ${Tags?Tags.map(oneTag => `<span class="  me-3 rounded round-2 " >${oneTag.trim()}</span>`).join(''):''} 

                </div>


                <div class="towBtn ">

                <a href=" ${foodDesc.strSource}">  <div class="btn btn-success py-2  ">source</div></a>
                    <a href=" ${foodDesc.strYoutube}">  <div class="btn btn-danger py-2 ">Youtube</div></a>
                </div>

                </div>
            </div>

        </div>

    </div>
</div> 
        
        
        `
      
        document.querySelector('header').innerHTML=item;

}
    

 async function getSearshResult() {

    

    let textSearsh=inputByName.value?inputByName.value:inputByFirstLetter.value;

    let response=await  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${textSearsh}`)
   searshResult= await response.json()
    displaySearshResult(searshResult.meals)
    callEvent ( searshResult)
}


 function displaySearshResult(data) {

// document.querySelector('.searsh .container').innerHTML=`<div class=" row searsh-result mt-5"></div>`

    let cardsHtml=``
    if(data)  {

            for (var i=0;i<data.length;i++)  {

                cardsHtml+=`

                <div  class="col-md-6 col-lg-3 mb-4 "   > 
                    
                        <div class="inner-col mainFood-img   position-relative " > 
                                    
                                        <div class='mainFood-lyar ps-2 ' data-index=${i}  ><p> ${data[i].strMeal} </p> </div>
                                        <img class='w-100 ' src="${data[i].strMealThumb}" alt="">
                                        
                                        
                        </div>
                        
                </div>

                `

            }
            document.querySelector('.searsh .container .searsh-result').innerHTML=cardsHtml;
        }


 }

 async function getCategories() { 

    let response=await  fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    categoriesResult= await response.json()

    displayCategories(categoriesResult.categories)

}


function displayCategories (data)  {


document.querySelector('.clearAllForNewSectiontClicked').innerHTML=`<div class="categories">

<div class=" container   ">

  <div class="row pt-5  ">


</div>


</div>
</div>`


let cardsHtml=``

for (var i=0;i<data.length;i++)  {

    const words = data[i].strCategoryDescription.split(' ');  
    const extractedWords = words.slice(0, 14);

    cardsHtml+=`

    <div  class="col-md-6 col-lg-3 mb-4 "   > 
        
            <div class="inner-col mainFood-img   position-relative " > 
                        
                            <div class='mainFood-lyar descCat   d-block text-center  ps-2 ' data-index=${i}  ><p class='' > ${data[i].strCategory} </p> <p class='h6' >${extractedWords}</p> </div>
                            <img class='w-100 ' src="${data[i].strCategoryThumb}" alt="">
                            
                            
                            
            </div>
            
    </div>

    `

}


document.querySelector('.categories .container .row').innerHTML=cardsHtml;




}


async function getArea () {

    let response=await  fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    areaResult= await response.json()

    displayArea(areaResult.meals)

}


function displayArea (data) {

    document.querySelector('.clearAllForNewSectiontClicked').innerHTML=`<div class="area  m-auto ">

    <div class=" container   ">
    
      <div class="row pt-5  ">
    
    
    </div>
    
    
    </div>
    </div>`
    
    
    let cardsHtml=``
    
    for (var i=0;i<data.length;i++)  {
    
        cardsHtml+=`
    
        <div  class="col-md-6 col-lg-3 mb-4 "   > 
            
                <div class="inner-col mainFood-img   position-relative " > 
                            
                <i class="fa-solid fa-house-laptop fa-4x text-white "></i>
                              <h2 class='text-white' >${data[i].strArea}</h2> 
                                
                            
                </div>
                
        </div>
    
        `
    
    }
    
    
    document.querySelector('.area .container .row').innerHTML=cardsHtml;

}


async function getIngradiants () {

    let response=await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')  // adit 
    ingradiantsResult= await response.json()

    displayIngradiants(ingradiantsResult.meals)  /// adit 

}

function displayIngradiants (data) {

    document.querySelector('.clearAllForNewSectiontClicked').innerHTML=`<div class="ingradiants  m-auto ">

    <div class=" container   ">
    
      <div class="row pt-5  ">
    
    
    </div>
    
    
    </div>
    </div>`
    
    
    let cardsHtml=``
    
    for (var i=0;i<20;i++)  {
    
        cardsHtml+=`
    
        <div  class="col-md-6 col-lg-3 mb-4 "   > 
            
                <div class="inner-col mainFood-img   position-relative " > 
                            
                             
                              <h2 class='text-white h3 ' >${data[i].strIngredient}</h2>             
                              <i class="fa-solid fa-drumstick-bite fa-5x text-white "></i>
                            
                </div>
                
        </div>
    
        `
    
    }
    
    
    document.querySelector('.ingradiants .container .row').innerHTML=cardsHtml;
    hide_AsideBar()

}


function callEvent (data) {

    $('.mainFood-lyar').click(function (e) {

        let dataIndex = $(this).attr('data-index');
        getAllMealsDesc(data.meals[dataIndex])
        // document.querySelector('.sectionSearsh').innerHTML=''
    
    }
    )
}


function hide_visible_AsideBar () {

    $('.open-close-icon').toggleClass('fa-xmark ')
    $(".contentAside").toggleClass('hideen-visible1')
    $(".innerAside").toggleClass('hideen-visible2')

}
function hide_AsideBar () {

    $('.open-close-icon').removeClass('fa-xmark ')
    $(".contentAside").removeClass('hideen-visible1')
    $(".innerAside").removeClass('hideen-visible2')

}




// END FUNCTIONS






// START EVENT


$('.open-close-icon').click(function () {


    hide_visible_AsideBar ()
} )




btnSearsh.addEventListener('click',function() {

    document.querySelector('.clearAllForNewSectiontClicked').innerHTML=`<div class="sectionSearsh ">
    <div class="searsh vh-100  ">
  
      <div class=" container   ">
  
                <div class="row pt-4 ps-5 pe-5 ">
  
                              <div class="col-6 ps-5  "> <input type="text" class=" w-100 ps-3 pt-2 pb-2 byName "   placeholder="searsh By name" ></div>
                              <div class="col-6 pe-5 "> <input type="text" maxlength="1"  class=" w-100  ps-3 pt-2 pb-2 byFirstLetter "  placeholder="searsh By first letter"  ></div>
                              
                </div>
  
                <div class=" row searsh-result mt-5">
                </div>
        </div>
  
  </div>
  
  </div>`
   


  hide_AsideBar () 


inputByFirstLetter=document.querySelector('.searsh .byFirstLetter')
inputByName=document.querySelector('.searsh .byName')
inputByName.addEventListener('input',function() {

  
    getSearshResult()

} )
inputByName.addEventListener('blur',function() {

  
   inputByName.value=''

} )
inputByFirstLetter.addEventListener('input',function() {

  
    getSearshResult()

} )
inputByFirstLetter.addEventListener('blur',function() {

  
    inputByFirstLetter.value=''

} )

})

btnCategories.addEventListener('click',function() {

    hide_AsideBar () 

getCategories()


})
btnArea.addEventListener('click',function() {

    hide_AsideBar () 

getArea()


})

btnIngradiants.addEventListener('click',function() {

    hide_AsideBar () 

getIngradiants()


})




// END EVENT

  getMainFood() 






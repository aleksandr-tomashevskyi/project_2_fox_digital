"use strict"
// how to read: comments on top, actions below

console.log('hello world!')
//slider code start

// getting block with radio buttons
const radioSwitcherBlock = document.querySelector(".section-column_middle");
// getting collection of objects of radio buttons
const radioSwitcherCollection = radioSwitcherBlock.children;
console.log(radioSwitcherCollection, typeof(radioSwitcherCollection));
// getting values of each radio button (accessing)
const radioKeys = Object.values(radioSwitcherCollection);
// getting colection of objects of images stored in right block
const imagesCollection = document.querySelector(".our-projects .section-column_right").children;
console.log('getting imagesCollection - succesfull');
// accesing each image in the object and storing it in a collections
const imagesCollectionValues = Object.values(imagesCollection);
console.log(imagesCollectionValues);
// setting variable to store number of current checked button
let currentSelection;
// getting information about which button is checked after loading the page
radioKeys.forEach(function(item, i){
   if (item.checked){
      currentSelection = i;
      // toggling appropriate images according to checked button
      if(i == 0){
         imagesCollectionValues[i].classList.add("active");
            // imagesCollectionValues[4].classList.add("active-top");
         imagesCollectionValues[i+1].classList.add("active-bottom");
      } else if(i == 4){
         imagesCollectionValues[i].classList.add("active");
         imagesCollectionValues[i-1].classList.add("active-top");
      } else {
         imagesCollectionValues[i].classList.add("active");
         imagesCollectionValues[i-1].classList.add("active-top");
         imagesCollectionValues[i+1].classList.add("active-bottom");
      }
   }
})
console.log('setting current selection after loading - succesful', 'current selection is:', currentSelection);
// initializing function for toggling appropriate classes to img after user choses another button
function sliderChange(){
   radioKeys.forEach(function(item, i){ //cycle for checking which particular button was checked
      if (item.checked){
         if (i == 0){
            // getting rid of classes in previous state
            imagesCollectionValues.forEach(function(item){
               item.removeAttribute("class");
            })
            // setting up new state
            imagesCollectionValues[i].classList.add("active");
            imagesCollectionValues[i+1].classList.add("active-bottom");
            console.log("code for 'zero' section initialized");
            // remembering new selection
            currentSelection = i;
      } else if(i == 4){
         // getting rid of classes in previous state
         imagesCollectionValues.forEach(function(item){
            item.removeAttribute("class");
         })
         imagesCollectionValues[i].classList.add("active");
         imagesCollectionValues[i-1].classList.add("active-top");
         // imagesCollectionValues[0].classList.add("active-top");
         console.log("code for 'in between' section initialized");
         currentSelection = i;
      } else {
         // getting rid of classes in previous state
         imagesCollectionValues.forEach(function(item){
            item.removeAttribute("class");
         });
         // setting up new state
         imagesCollectionValues[i].classList.add("active");
         imagesCollectionValues[i-1].classList.add("active-top");
         imagesCollectionValues[i+1].classList.add("active-bottom");
         console.log("code for 'end' section initialized");
         // remembering new selection
         currentSelection = i;
      }
   };
});
};
// setting event listener to parent for buttons block
radioSwitcherBlock.addEventListener("click", function(event){
   // checking if the button was clicked or another area of the block
   if(event.target.closest('input')){
      sliderChange(); //calling main function for slider
   }
});

//slider code end

//audit popup form code start

const footerAuditForm = document.querySelector(".section-row-audit-form");
const footerSection = document.querySelector(".footer-section");

function showForm(){
   footerAuditForm.style.display = "block";
   footerSection.scrollIntoView({block: 'start', behavior: 'smooth'});
   console.log('it works!');
}
function hideForm(){
   footerAuditForm.style.display = "none";
   footerSection.scrollIntoView({block: 'end', behavior: 'smooth'});
   console.log('it works again!');
}
footerSection.addEventListener('mouseenter', () => {
   showForm();
});
footerSection.addEventListener('mouseleave', () => {
   hideForm();
});

//audit popup form code end

//header links decoration code start
const menuItemCollection = document.querySelectorAll(".nav-list__item[data-goto]");
const sectionItemCollection = document.querySelectorAll("section");
let navItemClickedVar;
// function getNavItemClicked(){
   
// }
// sectionItemCollection.forEach(function(item, i){
//    if(item.matches(`[class=${varAchievement}]`)){
//       console.log('match-found! It is: ', item, "with number:", i);
//    }
// });
// console.log(sectionItemCollection);

// scroll to ancor function

function ancorScrollFunc(navItemClickedVar, event){
   console.log("here is the event: ", event)
   event.preventDefault();
   const ancorElement = document.querySelector(`${navItemClickedVar}`);
   console.log('Here is the ancor element: ', ancorElement);
   ancorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
};

document.querySelector(".nav-list").addEventListener('click', (event) => {
   if(event.target.closest('.nav-list__item')){
      navItemClickedVar = event.target.getAttribute('data-goto');
      console.log("Just checking the dataset function: ",event.target.dataset.goto)
      if(navItemClickedVar && document.querySelector(`${navItemClickedVar}`)){ //checking if the attribute has any value
         ancorScrollFunc(navItemClickedVar, event); //transfering target and event into a function
         console.log("retrieved ancor name: ", navItemClickedVar);
      }
   }
})
// document.querySelector(".nav-list").addEventListener('click', ancorScrollFunc);
// function ancorScrollFunc(e){
//    console.log(e.target);
//    e.preventDefault();
// }

// showing an arrow on links when mouse is over
document.querySelector(".nav-list").addEventListener('mouseover', showArrow);
function showArrow(event){
   if(event.target.closest('.nav-list__item')){
      console.log(event.target.firstElementChild);
      event.target.firstElementChild.style.display = "inline-block"
   }
}
// showing an arrow on links when mouse is out
document.querySelector(".nav-list").addEventListener('mouseout', hideArrow);
function hideArrow(event){
   if(event.target.closest('.nav-list__item')){
      console.log(event.target.firstElementChild);
      event.target.firstElementChild.style.display = "none"
   }
}


const cardArray = [
{
  name:"fries",
  img:'./images/fries.png',
},
{
  name:"cheeseburger",
  img:'./images/cheeseburger.png',
},
{
  name:"hotdog",
  img:'./images/hotdog.png',

},
{
  name:"ice-cream",
  img:'./images/ice-cream.png',
},
{
  name:"milkshake",
  img:'./images/milkshake.png',
},
{
  name:"pizza",
  img:'./images/pizza.png',
},

// copies it because we need 2 of each card
  
{
  name:"fries",
  img:'./images/fries.png',
},
{
  name:"cheeseburger",
  img:'./images/cheeseburger.png',
},
{
  name:"hotdog",
  img:'./images/hotdog.png',

},
{
  name:"ice-cream",
  img:'./images/ice-cream.png',
},
{
  name:"milkshake",
  img:'./images/milkshake.png',
},
{
  name:"pizza",
  img:'./images/pizza.png',
}
]

// we want to shuffle the cards
//so here we use the random method of javascript to shuffle the cards randomly

cardArray.sort(()=>0.5 -Math.random());

// compare the array elements ,  that they are smaller or larger than 0.5 or not  and randomly shuffle it

 const gridDisplay= document.querySelector('#grid');

 // we want an array to store the cards that are chosen
 // so we create a variable cardsChosen
 // and we want to store the name of the card that is chosen
 let cardsChosen = [];
 let cardsChosenIds=[];
 const cardsWon = [];
 const resultDisplay = document.querySelector('#result');


 function createBorad (){

                       // for 12 images we need 12 cards to show 
                       // so we use a for loop to create 12 cards
                       //because we have 12 images in the array
                       //basically we are creating 12 cards and adding the images to it

  
   for(let i =0 ; i<cardArray.length;i++){

     const card= document.createElement('img');

  card.setAttribute('src','./images/blank.png');

  card.setAttribute('data-id',i);

  card.addEventListener('click',flipCard);

  gridDisplay.appendChild(card);
   }
 }
 console.log(cardArray);

 
 createBorad();

 // this function is used to check the match of the cards 

 function checkMatch(){

  const cards = document.querySelectorAll('img')

    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];


    console.log("checking for match");
    
if(cardsChosen[0]== cardsChosen[1]){

  cards[optionOneId].setAttribute('src','./images/white.png')
  cards[optionTwoId].setAttribute('src','./images/white.png');

  cards[optionOneId].removeEventListener('click',flipCard);
  cards[optionTwoId].removeEventListener('click',flipCard);
  cardsWon.push(cardsChosen);
  
 }
else{
  cards[optionOneId].setAttribute('src','./images/blank.png');
  cards[optionTwoId].setAttribute('src','./images/blank.png');
}
resultDisplay.innerHTML= cardsWon.length;
 cardsChosen=[];
 cardsChosenIds=[];

if(cardsWon.length === 6){
  // alert("hip hip hurray you won");
  resultDisplay.innerHTML="Congratulations you found them all ";
}
 }

// the function below is used to flip the cards 

 function flipCard(){

    let cardId= this.getAttribute('data-id');

    cardsChosen.push(cardArray[cardId].name);

    this.setAttribute('src',cardArray[cardId].img);

cardsChosenIds.push(cardId)

    if(cardsChosen.length===2){

      setTimeout(checkMatch,200);
    }

  
 }

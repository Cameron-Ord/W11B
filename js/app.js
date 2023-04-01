

//the array of objects that will be used//

let products = [
   
    {



        name: `squidikarp`,

        price: `$500`,

        image_url: `/images/squidward.jpg`,

        description: `a horrible byproduct created from the misuse of mutagen`


    },

    {


        name: `magikarp`,

        price: `$100`,

        image_url: `/images/normal.png`,

        description: `a normal magikarp`
    },

    {

        name: `horizontal magikarp`,

        price: `$50`,

        image_url: `/images/horizontal.jpg`,

        description: `a weird magikarp that extists phases in between realities and does not move at all, pretty useless, and probably just dead`

    },
    {


        name: `pixelated magikarp`,

        price: `$325`,

        image_url: `/images/pixelated.gif`,

        description: `This magikarp doesn't seem to conform to the simulation's set resolution. We don't know how its possible and it's pretty rare`

    },


    {

        name: `Uncanny Karp`,

        price: `$3000`,

        image_url: `/images/uncanny.jpg`,

        description: `We don't know how we get these, we just know that we do.`

    },


    {

        name: `Golden karp`,

        price: `$1000`,

        image_url: `/images/golden.png`,

        description: `Just a rare magikarp. THEY ARE NOT MADE OF REAL GOLD`

    },

    {

        name: `Creepy Karp`,

        price: `$1`,

        image_url: `/images/whatingodsname.jpg`,

        description: `its weird, we don't want it. PLEASE BUY IT`

    },

    {

        name: `Real karp`,

        price: `$25`,

        image_url: `/images/literallyafish.jpg`,

        description: `Your average supermarket magikarp`

    },

    {

        name: `Gyro Karp`,

        price: `$250`,

        image_url: `/images/gyrocarp.jpg`,

        description: `A rare case of an evolution gone wrong. Kinda cool looking though.`

    },


    {

        name: `Knife karp`,

        price: `$150`,

        image_url: `/images/knifecarp.jpg`,

        description: `This magikarp is MEAN.`

    },


    {

        name: `Sunglasses karp`,

        price: `$200`,

        image_url: `/images/sunglasseskarp.jpg`,

        description: ` Damn, this karp is cool!`

    },

    {

        name: `Spanish Karp`,

        price: `$500`,

        image_url: `/images/spanish.jpg`,

        description: `The sombrero makes for a spicy Magikarp.`

    }
];


//assigns the cookies//

let json = Cookies.get(`selection`);


let cart = [];





//this function creates on object based on what button was clicked//

function selected(products) {


let product = {

name: `${products[`target`].getAttribute(`product_name`)}`,
price: `${products[`target`].getAttribute(`product_price`)}`,
image_url: `${products[`target`].getAttribute(`product_image`)}`,
description: `${products[`target`].getAttribute(`product_desc`)}`,

}

cart.push(product);
json = JSON.stringify(cart);
Cookies.set(`selection`, json);

//pushes the object onto the cart array, and save it as a cookie//
};


let product_article = document.querySelector(`#main_section`);

for(let counter = 0; counter < products.length; counter = counter +1){
//injects products onto the page//
product_article.insertAdjacentHTML(`beforeend`, 

`<article>
  <span class="main_span">
  <h3>${products[counter][`name`]}</h3>
  <img class="magikarps" src="${products[counter][`image_url`]}">
  <p>${products[counter][`price`]}</p>
  <p>${products[counter][`description`]}</p>
  <button class="clickme"
  product_name="${products[counter][`name`]}"
  product_desc="${products[counter][`description`]}"
  product_price="${products[counter][`price`]}"
  >ADD TO CART</button>
  </span>
  
  </article>`);

}
//the event listener for all the buttons//

let product_choice = document.querySelectorAll(`.clickme`);
for (let counter = 0; counter < product_choice.length; counter = counter + 1) {

    product_choice[counter].addEventListener(`click`, selected);
};




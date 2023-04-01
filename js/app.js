let shopping_cart = [];


let products = [{



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



}
];








function selected(product) {

let Cookies_get = Cookies.get(`selection`);


product[`target`].getAttribute(`product`);


    if (product[`target`].getAttribute(`product`) === `squidward`) {


        let string = JSON.stringify(squidikarp);

        let addition = string + Cookies_get;
    
        Cookies.set(`selection`, addition);

    } else if (product[`target`].getAttribute(`product`) === `normal`) {

        
        let string = JSON.stringify(magikarp_normal);
        
        let addition = string + Cookies_get;

        Cookies.set(`selection`, addition);
        
       
        console.log(`added to cart`);

    } else if (product[`target`].getAttribute(`product`) === `horizontal`) {

        
        let string = JSON.stringify(horizontal_magikarp);
        
        let addition = string + Cookies_get;

        Cookies.set(`selection`, addition);
        
       
        console.log(`added to cart`);


    } else if (product[`target`].getAttribute(`product`) === `pixelated`) {

        let string = JSON.stringify(pixelated_magikarp);
        
        let addition = string + Cookies_get;

        Cookies.set(`selection`, addition);
        
       
        console.log(`added to cart`);

    };

};

let product_choice = document.querySelectorAll(`.magikarps`);
for (let counter = 0; counter < product_choice.length; counter = counter + 1) {

    product_choice[counter].addEventListener(`click`, selected);
};


let squidikarp = {



    name: `squidikarp`,

    price: `$500`,

    image_url: `/images/squidward.jpg`,

    description: `a horrible byproduct created from the misuse of mutagen`


};

let magikarp_normal = {

    
    name: `magikarp`,

    price: `$100`,

    image_url: `/images/normal.png`,

    description: `a normal magikarp`
};

let horizontal_magikarp = {

    name: `horizontal magikarp`,

    price: `$50`,

    image_url: `/images/horizontal.jpg`,

    description: `a weird magikarp that extists phases in between realities and does not move at all, pretty useless, and probably just dead`

};

let pixelated_magikarp = {


    name: `pixelated magikarp`,

    price: `$325`,

    image_url: `/images/pixelated.gif`,

    description: `This magikarp doesn't seem to conform to the simulation's set resolution. We don't know how its possible and it's pretty rare`

};


let squid_string = JSON.stringify(squidikarp);


let normal_string = JSON.stringify(magikarp_normal);


let horzont_string = JSON.stringify(horizontal_magikarp);


let pixelated_string = JSON.stringify(pixelated_magikarp);


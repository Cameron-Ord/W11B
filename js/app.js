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

    let product_array = [];


    
    Cookies.set(`selection`, product[`target`].getAttribute(`product`));

    if (product[`target`].getAttribute(`product`) === `squidward`) {

Cookies.set(`selection`, squid_json);

product_array.push(parse);

    } else if (product[`target`].getAttribute(`product`) === `normal`) {

        Cookies.set(`selection`, normal_json);


        product_array.push(parse);

    } else if(product[`target`].getAttribute(`product`) === `horizontal`){

        Cookies.set(`selection`, horizontal_magikarp);
        product_array.push(parse);
    } else if(product[`target`].getAttribute(`product`) === `pixelated`){

Cookies.set(`selection`, pixel_json);
product_array.push(parse);
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

let normal = {


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

let pixelated_karp = {



    name: `pixelated magikarp`,

    price: `$325`,
    
    image_url: `/images/pixelated.gif`,
    
    description: `This magikarp doesn't seem to conform to the simulation's set resolution. We don't know how its possible and it's pretty rare`
    
    
    

};



let squid_json = JSON.stringify(squidikarp);

let normal_json = JSON.stringify(normal);

let horiz_json = JSON.stringify(horizontal_magikarp);

let pixel_json = JSON.stringify(pixelated_karp);

let get_json = Cookies.get(`selection`);
let parse = JSON.parse(get_json);



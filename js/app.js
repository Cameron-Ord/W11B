







function selected(product) {

    let Cookies_get = Cookies.get(`selection`);


    product[`target`].getAttribute(`product`);


    if (product[`target`].getAttribute(`product`) === `squidward`) {


        let string = JSON.stringify(products[0]);

        let addition = string + Cookies_get;

        Cookies.set(`selection`, addition);

    } else if (product[`target`].getAttribute(`product`) === `normal`) {


        let string = JSON.stringify(products[1]);

        let addition = string + Cookies_get;

        Cookies.set(`selection`, addition);


        console.log(`added to cart`);

    } else if (product[`target`].getAttribute(`product`) === `horizontal`) {


        let string = JSON.stringify(products[2]);

        let addition = string + Cookies_get;

        Cookies.set(`selection`, addition);


        console.log(`added to cart`);


    } else if (product[`target`].getAttribute(`product`) === `pixelated`) {

        let string = JSON.stringify(products[3]);

        let addition = string + Cookies_get;

        Cookies.set(`selection`, addition);


        console.log(`added to cart`);

    } else if (product[`target`].getAttribute(`product`) === `uncannykarp`) {

        let string = JSON.stringify(products[4]);

        let addition = string + Cookies_get;

        Cookies.set(`selection`, addition);


        console.log(`added to cart`);

    } else if (product[`target`].getAttribute(`product`) === `goldenkarp`) {


        let string = JSON.stringify(products[5]);

        let addition = string + Cookies_get;

        Cookies.set(`selection`, addition);


        console.log(`added to cart`);
    } else if (product[`target`].getAttribute(`product`) === `oddkarp`) {

        let string = JSON.stringify(products[6]);

        let addition = string + Cookies_get;

        Cookies.set(`selection`, addition);


        console.log(`added to cart`);


    } else if (product[`target`].getAttribute(`product`) === `realkarp`) {

        let string = JSON.stringify(products[7]);

        let addition = string + Cookies_get;

        Cookies.set(`selection`, addition);


        console.log(`added to cart`);

    } else if (product[`target`].getAttribute(`product`) === `gyrokarp`) {
        let string = JSON.stringify(products[8]);

        let addition = string + Cookies_get;

        Cookies.set(`selection`, addition);


        console.log(`added to cart`);


    } else if (product[`target`].getAttribute(`product`) === `knifekarp`) {
        let string = JSON.stringify(products[9]);

        let addition = string + Cookies_get;

        Cookies.set(`selection`, addition);


        console.log(`added to cart`);


    } else if (product[`target`].getAttribute(`product`) === `sunglasseskarp`) {

        let string = JSON.stringify(products[10]);

        let addition = string + Cookies_get;

        Cookies.set(`selection`, addition);


        console.log(`added to cart`);

    } else if (product[`target`].getAttribute(`product`) === `spanishkarp`) {

        let string = JSON.stringify(products[11]);

        let addition = string + Cookies_get;

        Cookies.set(`selection`, addition);


        console.log(`added to cart`);

    };
    return false;
};

let product_choice = document.querySelectorAll(`.magikarps`);
for (let counter = 0; counter < product_choice.length; counter = counter + 1) {

    product_choice[counter].addEventListener(`click`, selected);
};

let cart = [];


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

        image_url: `/image/literallyafish.jpg`,

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




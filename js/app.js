


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



let cart = [];





function selected(product) {




Cookies.set(`product_selected`, product[`target`].getAttribute(`product`)); 


    if (product[`target`].getAttribute(`product`) === `squidward`) {

        
        cart.push(products[0]);


        Cookies.set(`selection`, product);



    } else if (product[`target`].getAttribute(`product`) === `normal`) {
        cart.push(products[1]);
        
        Cookies.set(`selection`, product);

        
        console.log(`added to cart`);

    } else if (product[`target`].getAttribute(`product`) === `horizontal`) {


        cart.push(products[3]);

        Cookies.set(`selection`, product);

        console.log(`added to cart`);


    } else if (product[`target`].getAttribute(`product`) === `pixelated`) {


        cart.push(products[3]);

        Cookies.set(`selection`, product);
        console.log(`added to cart`);

    } else if (product[`target`].getAttribute(`product`) === `uncannykarp`) {


        cart.push(products[4]);
        Cookies.set(`selection`, product);
        console.log(`added to cart`);

    } else if (product[`target`].getAttribute(`product`) === `goldenkarp`) {


        Cookies.set(`selection`, product);

        cart.push(products[5]);


        console.log(`added to cart`);
    } else if (product[`target`].getAttribute(`product`) === `oddkarp`) {


        cart.push(products[6]);
        Cookies.set(`selection`, product);
        console.log(`added to cart`);


    } else if (product[`target`].getAttribute(`product`) === `realkarp`) {




        cart.push(products[7]);
        Cookies.set(`selection`, product);
        console.log(`added to cart`);

    } else if (product[`target`].getAttribute(`product`) === `gyrokarp`) {





        cart.push(products[8]);
        Cookies.set(`selection`, product);
        console.log(`added to cart`);


    } else if (product[`target`].getAttribute(`product`) === `knifekarp`) {


        cart.push(products[9]);
        Cookies.set(`selection`, product);
        console.log(`added to cart`);


    } else if (product[`target`].getAttribute(`product`) === `sunglasseskarp`) {


        cart.push(products[10]);
        Cookies.set(`selection`, product);

        console.log(`added to cart`);

    } else if (product[`target`].getAttribute(`product`) === `spanishkarp`) {


        cart.push(products[11]);

        Cookies.set(`selection`, product);
        console.log(`added to cart`);

    };
    return false;
};

let product_choice = document.querySelectorAll(`.magikarps`);
for (let counter = 0; counter < product_choice.length; counter = counter + 1) {

    product_choice[counter].addEventListener(`click`, selected);
};






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



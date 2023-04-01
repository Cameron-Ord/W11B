
//these variables grab the cookies `selection` then parse the json data stored in the cookie//


let get_cookie = Cookies.get(`selection`);
let chosen_products = Cookies.get(`selection`);

//this if statement injects tags based on your cookies//

if (chosen_products === undefined) {

    let product_article = document.querySelector(`#main_section`);
    product_article.insertAdjacentHTML(`afterbegin`,`<h1>Please select a product</h1>`);



} else {

    //an else if statement looping through all the selected products and displaying them//

    let product_article = document.querySelector(`#main_section`);

    for (let counter = 0; counter < parse_the_json.length; counter = counter + 1) {


        let parse_the_json = JSON.parse(get_cookie);

        product_article.insertAdjacentHTML(`beforeend`,

            `<article>
        <span class="main_span">
        
        <h3>${parse_the_json[counter][`name`]}</h3>
    
        <img class="magi" src="${parse_the_json[counter][`image_url`]}">
        
        <p>${parse_the_json[counter][`description`]}</p>
        
        <p>${parse_the_json[counter][`price`]}</p>
        
        </span>
        </article>
        
        
        
        `);



    }
};



//these variables grab the cookies `selection` then parse the json data stored in the cookie//

let get_cookie = Cookies.get(`selection`);
let parse_json = JSON.parse(get_cookie);
let chosen_products = Cookies.get(`selection`);


//this if statement injects tags based on your cookies//

if (chosen_products === undefined) {

    product_article.insertAdjacentHTML(`afterbegin`, `<h1>Please select a product</h1>`);


} else if (chosen_products !== undefined) {

    //an else if statement looping through all the selected products and displaying them//

    let product_article = document.querySelector(`#main_section`);

    for (let counter = 0; counter < chosen_products.length; counter = counter + 1) {


        product_article.insertAdjacentHTML(`beforeend`,

            `<article>
        <span class="main_span">
        
        <h3>${parse_json[counter][`name`]}</h3>
    
        <img class="magi" src="${parse_json[counter][`image_url`]}">
        
        <p>${parse_json[counter][`description`]}</p>
        
        <p>${parse_json[counter][`price`]}</p>
        
        </span>
        </article>
        
        
        
        `);



    }
};
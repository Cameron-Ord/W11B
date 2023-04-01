
let get_cookie = Cookies.get(`selection`);
let parse_json = JSON.parse(get_cookie);
let chosen_products = Cookies.get(`selection`);


if(chosen_products === undefined){
    document.body.insertAdjacentHTML(`afterbegin`,`<h1>Please select a product</h1>`);


}else{

    let product_article = document.querySelector(`#main_section`);

    for(let counter = 0; counter <chosen_products.length; counter = counter +1){


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
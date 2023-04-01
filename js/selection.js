
let get_cookie = Cookies.get(`selection`);
let parse_json = JSON.parse(get_cookie);
let chosen_products = Cookies.get(`selection`);

let cart = [];

cart.push(parse_json);


if(chosen_products === undefined){
    document.body.insertAdjacentHTML(`afterbegin`,`<h1>Please select a product</h1>`);


}else{

    let product_article = document.querySelector(`#main_section`);

    for(let counter = 0; counter < cart.length; counter = counter +1){


        product_article.insertAdjacentHTML(`beforeend`, `<img src="${cart[counter][`image_url`]}" width="100px" height="150px">`);
    }
};
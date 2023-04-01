
let get_cookie = Cookies.get(`selection`);
let parse_json = JSON.parse(get_cookie);
let chosen_products = Cookies.get(`selection`);


if(chosen_products === undefined){
    document.body.insertAdjacentHTML(`afterbegin`,`<h1>Please select a product</h1>`);


}else{

    let product_article = document.querySelector(`#main_section`);

    for(let counter = 0; counter <chosen_products.length; counter = counter +1){


        product_article.insertAdjacentHTML(`beforeend`, `<h1>${parse_json[counter][`name`]}</h1>`);

        product_article.insertAdjacentHTML(`beforeend`, `<img src="${parse_json[counter][`image_url`]}" width="100px" height="150px">`);

        product_article.insertAdjacentHTML(`beforeend`, `<p>${parse_json[counter][`description`]}</p>`);

        product_article.insertAdjacentHTML(`beforeend`, `<p>${parse_json[counter][`price`]}</p>`);

    }
};
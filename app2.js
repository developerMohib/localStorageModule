
const addtoCart = () => {
    const productName = document.getElementById('Product-name');
    const productQuantity = document.getElementById('Product-quantity');

    const inputName = productName.value ;
    const inputQuantity = productQuantity.value ;
    productName.value = '';
    productQuantity.value = '';
    console.log(inputName, inputQuantity);

    displayProductList(inputName,inputQuantity);
    saveProductLocal(inputName, inputQuantity);
};

// display product 

const displayProductList = (productName,productQuantity) => {
    const ul = document.getElementById('list-contaniner');
    const li = document.createElement('li');
    li.innerText = ` ${productName} : ${productQuantity} `
    ul.appendChild(li);

};



const storedCart = () => {
    let cart= {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart ;
}


const saveProductLocal = (product, quantity) => {
    const cart = storedCart();
    cart[product] = quantity ;
    console.log(cart);
    const cartStringify = JSON.stringify(cart);
    console.log(cartStringify);
    localStorage.setItem('cart', cartStringify);
}

const displayProductLocal = () => {
    const saveCart = storedCart();
    const cartStringify = JSON.stringify(saveCart); // string 
    const cartParse = JSON.parse(cartStringify);
    console.log(saveCart);
    console.log(cartParse);
    for (const product in cartParse) {
        const quantity = saveCart[product];
        console.log(product, quantity);
        displayProductList(product, quantity);
    }
}
displayProductLocal();
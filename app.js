

const addtoCart = () => {
    const productName = document.getElementById('Product-name');
    const productQuantity = document.getElementById('Product-quantity');

    const inputName = productName.value ;
    const inputQuantity = productQuantity.value ;
    productName.value = '';
    productQuantity.value = '';
    console.log(inputName, inputQuantity);

    displayProductList(inputName,inputQuantity);
    storeDataInLocalStorage(inputName, inputQuantity);
};

// display product 

const displayProductList = (productName,productQuantity) => {
    const ul = document.getElementById('list-contaniner');
    const li = document.createElement('li');
    li.innerText = ` ${productName} : ${productQuantity} `
    ul.appendChild(li);

};

// get data from user
  
const getData = () => { // get store cart 
    const data = localStorage.getItem('data');
    // data will be string , so convert it object 
    let cart = {};
    if(data){
        cart = JSON.parse(data); // to make array
    }
    return cart ;
}
// store data 
const storeDataInLocalStorage = (productName, productQuantity) => {
    const cart = getData();
    cart[productName] = cart ;
    console.log( cart);
    let cartName = JSON.stringify(cart);
    localStorage.setItem('data', cartName);
    console.log(cartName);
};
const displayDataInLocalStorage = () =>{
    const saveCart = getData();
//     for (const name in cart) {
//             const quantity = cart[name];
            console.log(saveCart)
//     }
}
displayDataInLocalStorage();
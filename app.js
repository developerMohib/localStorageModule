

const addtoCart = () => {
    const productName = document.getElementById('Product-name');
    const productQuantity = document.getElementById('Product-quantity');

    const inputName = productName.value ;
    const inputQuantity = productQuantity.value ;
    productName.value = '';
    productQuantity.value = '';
    console.log(inputName, inputQuantity);

    displayProductList(inputName,inputQuantity)
};

// display product 

const displayProductList = (productName,productQuantity) => {
    const ul = document.getElementById('list-contaniner');
    const li = document.createElement('li');
    li.innerText = ` ${productName} : ${productQuantity} `
    ul.appendChild(li);

};
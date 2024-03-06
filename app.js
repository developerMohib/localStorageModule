

const addtoCart = () => {
    const productName = document.getElementById('Product-name');
    const productQuantity = document.getElementById('Product-quantity');

    const inputName = productName.value ;
    const inputQuantity = productQuantity.value ;
    inputName.value = '';
    inputQuantity.value = '';
    console.log(inputName, inputQuantity);
}
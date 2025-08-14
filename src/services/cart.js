async function addItem(userCart, item) {
    userCart.push(item);
}

async function calculateTotal(userCart) {
    console.log('\nshopee cart total is:');
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(` 🛒 Total: ${result}`);
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex(item => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    } 
}

async function displayCart(userCart) {
    console.log('\nshope cart list:');
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} x |Subtotal = $${item.subtotal()}`);
    }); 
}

async function removeItem(userCart, item) {
    // Find the index of the item 
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    //caso não encontre o item
    if (indexFound === -1) {
        console.log('item não encontrado')
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if (userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
        return;
}

}


//remove item from cart by index
// async function removeItem(userCart, index) {
//     const deleteIndex = index - 1; // Adjust for zero-based index
//     if (index >= 0 && index < userCart.length) {
//         userCart.splice(deleteIndex, 1);
//     }
// }

export { 
    addItem, 
    calculateTotal, 
    deleteItem, 
    removeItem, 
    displayCart
};


document.addEventListener('DOMContentLoaded', function() {
    const productName = document.getElementById('productName');
    const productDescription = document.querySelector('#productDescription');
    const price = document.getElementById('price');
    const status = document.getElementById('status');

    const btnAdd = document.getElementById('btnAdd');


    async function add() {
        const name = productName.value;
        const description = productDescription.value;
        const priceValue = parseFloat(price?.value || 0);
        const statusValue = status.value;

    const example = new Product(0, name, description, priceValue,statusValue);
        console.log(example);
        const apiProduct = new ApiProduct();
        await apiProduct.register(example);
        window.location.href = "./product.html"

    }
    btnAdd.addEventListener('click', function (event) {
        event.preventDefault();
        add();
    })
})
document.addEventListener('DOMContentLoaded', function () {
    const btnCancel = document.getElementById('btnCancel');

    btnCancel.addEventListener('click', function () {
        window.location.href = './product.html';
    });
});
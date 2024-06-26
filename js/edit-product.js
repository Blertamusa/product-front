document.addEventListener('DOMContentLoaded', function () {
    const productName = document.getElementById('productName');
    const productDescription = document.querySelector('#productDescription');
    const price = document.getElementById('price');
    const status = document.getElementById('status');

    const btnAdd = document.getElementById('btnAdd');

    async function add() {
        const productId = window.location.search.split("=")[1].trim();
        const name = productName.value;
        const description = productDescription.value;
        const priceValue = parseFloat(price?.value || 0);
        const statusValue = status.value;

        if (!name) {
            productName.style.borderColor = "red";
            productName.focus();
            return;
        }
        const example = new Product(0, name, description, priceValue, statusValue);
        console.log(example);
        const apiProduct = new ApiProduct();
        await apiProduct.modify(productId, example);
        window.location.href = "./product.html"

    }
    btnAdd.addEventListener('click', function (event) {
        event.preventDefault();
        add();
    })
    const loadingData = async () => {
        const productId = window.location.search.split("=")[1].trim();
        const apiProduct = new ApiProduct();
        const result = await apiProduct.findById(productId);

        if (result && result.id) {
            console.log(result);
            productName.value = result.productName;
            productDescription.value = result.productDescription;
            price.value = result.price;
            status.value = result.status;
        }
    }
    loadingData();
});
document.addEventListener('DOMContentLoaded', function () {
    const btnCancel = document.getElementById('btnCancel');

    btnCancel.addEventListener('click', function () {
        window.location.href = './product.html';
    });
});

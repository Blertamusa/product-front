document.addEventListener("DOMContentLoaded", function () {

    const product = document.getElementById('product');
    const btnDeleteProduct = document.getElementById('btnDeleteProduct');

    async function loadingData() {
        console.log(window.location.search);
        const productId = window.location.search.split("=")[1].trim();
        const apiProduct = new ApiProduct();

        const data = await apiProduct.findById(productId);

        console.log(data);
            product.innerHTML = `
            <p><b>Product: </b><i>${data.productName}</i></p>
            <p><b>Description: </b><i>${data.productDescription}</i></p>
            <p><b>Price: </b><i>${data.price}</i></p>
            <p><b>Status: </b><i>${data.status}</i><p>
        `;  
            
            btnDeleteProduct.style.display = 'block';
    }

    loadingData();
    
    

    async function deleteData() {
        const apiProduct = new ApiProduct();
        const productId = window.location.search.split("=")[1].trim();
        if (productId) {
            if (confirm("Are you sure you want to delete the product? " + productId)) {
                const response = await apiProduct.removeById(productId);
                if (!response) {
                    window.location.href = "./product.html";
                }
            }
        }
    }

    btnDeleteProduct.addEventListener('click', function () {
        deleteData();
    })
 
    
});


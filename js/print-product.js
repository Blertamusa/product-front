document.addEventListener('DOMContentLoaded', function () {

    async function loadingData() {
        console.log("Loading Data...");
        const productTableBody = document.getElementById('productTableBody');
        productTableBody.innerHTML = "";
        const apiProduct = new ApiProduct();
        const data = await apiProduct.getAll();
        console.table(data);
        data.forEach(product => {
            const tableRow = `<tr>
            <td>${product.id}</td>
            <td>${product.productName}</td>
            <td>${product.productDescription}</td>
            <td>${product.price}</td>
            <td>${product.status}</td>
            <td>
              <button type="button" class="btn btn-secondary btnBack">Back</button>
            </td>
          </tr>`;
            productTableBody.innerHTML += tableRow;
        });
        const backButtons = document.querySelectorAll('.btnBack');
        backButtons.forEach(button => {
            button.addEventListener('click', function () {
                window.location.href = './product.html';
            });
        });
    }

    loadingData();

});



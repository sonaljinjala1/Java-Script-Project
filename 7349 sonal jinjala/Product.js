
let products = JSON.parse(localStorage.getItem('products')) || [];


const renderTable = () => {
    const productTableBody = document.getElementById('Body');
    let tbl = '';
    let totalPrice = 0;

    products.map((product, index) => {
        totalPrice += product.price;
        tbl += `
            <tr>
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td><button class="btn " onclick="deleteProduct(${index})"  style="padding:0 !important; text-align:center; justify-content: center;"> <img src="bin.png" alt="" width="30px"  "></button></td>
            </tr>
        `;
    });

    productTableBody.innerHTML = tbl;
    document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);
};


const addProduct = (event) => {
    event.preventDefault();

    const productName = document.getElementById('Name').value;
    const productPrice = parseFloat(document.getElementById('Price').value);

    const newProduct = {
        name: productName,
        price: productPrice,
    };

    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    renderTable();
    document.getElementById('productForm').reset();
};


const deleteProduct = (index) => {
    products.splice(index, 1);  // splice remove   karva mate use thay che.
    localStorage.setItem('products', JSON.stringify(products));
    renderTable();
};


document.getElementById('productForm').addEventListener('submit', addProduct);


renderTable();

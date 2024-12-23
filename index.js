const productContainer = document.getElementById("product-container")

console.log(productContainer);


async function fetchProduct() {

    try {

        const response = await fetch('https://fakestoreapi.com/products')
        

        if (!response.ok) {
            throw new Error('something went wrong')
        }
         const products = await response.json()
         document.getElementById("loading").style.display = 'none'
         displayProducts(products)


         } catch (error) {
        console.log(error);

    }

    function displayProducts(products){ 
        
        products.forEach((product) => {
        let productCard = ` 
        
        <div class="col-md-4 col-lg-3 d-flex">
       
        <div class="card">
            
                <img src=${product.image} 
                class="Imagefit container" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">${product.description.slice(0, 100)}...</p>
                  
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="fw-bold fs-5">$${product.price}</span>
                    <a href= "productdetails.html?id=${product.id}" class="btn btn-primary" >View Details</a>
                </div>
                </div>
              </div>
        
    </div>
    `
     productContainer.innerHTML += productCard
        });


    }

}
fetchProduct()
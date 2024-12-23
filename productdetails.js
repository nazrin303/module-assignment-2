const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const productContainers = document.getElementById('product-details')
const loadingElement = document.getElementById('loading');

console.log(productId, "id");

async function productDetails(){
    try {

       const response = await fetch(`https://fakestoreapi.com/products/${productId}`)

       if(!response.ok){
        throw new Error("something went wrong")
       }

       const details = await response.json()
       loadingElement.style.display = 'none';

       
       displayProductsDetails(details)
       
       console.log(details, "details");
        
    } catch (error) {
        console.log(error);
        
    }
}

function displayProductsDetails(details) {

    const productData = `<div class="col-md-6 container ">
                <img src=${details.image} class="imagefit2" alt="camera">
                  
            </div>

            <div class="col-md-6 ">
                <h2>${details.title}</h2>
                <p>${details.category}</p>
                <p>${details.description}</p>
                <h3 class="text-primary">$${details.price}</h3>
                <button class="btn btn-success">Buy Now</button>

            </div>`

            productContainers.innerHTML = productData
    
}
productDetails()

//Form to add to cart

//  <iframe name="dummyframe" id="dummyframe" style="display: none;"></iframe>
// <form method="post" action="/cart/add" target="dummyframe">
//         <input type="hidden" id="quantity1" name="id" value="" />
//  <input min="1" type="number" id="quantity" name="quantity" value="1"/>
//         <input type="submit" value="Add to cart" class="btn"/>
// </form> 

//Function of popup from API

function myFunction20() {
    let x, y, z, t, cart;
    document.getElementById("popup").style.visibility = "visible";
    x = document.getElementById("imag1").alt;
   // console.log(x);
    jQuery.getJSON('/products/'+x+'.js', function(product) {
  //alert('The title of this product is ' + product.title);
     // console.log(y);
    y = product.images[0];
    z = product.title;
    t = product.title;
    cart = product.variants[0].id;
      //console.log(t);
    document.getElementById("imag12").src = y;
    document.getElementById("popuptitle").textContent = z;
    document.getElementById("popuptext").textContent = t;
    document.getElementById("quantity1").value = cart;
      //console.log(product);
      //console.log(document.getElementById("quantity1").value);
      //console.log(product.variants[0].id);
      
} );
  }
  function myFunction21() {
    let x, y, z, t, cart;
    document.getElementById("popup").style.visibility = "visible";
    x = document.getElementById("imag2").alt;
   // console.log(x);
    jQuery.getJSON('/products/'+x+'.js', function(product) {
  //alert('The title of this product is ' + product.title);
     // console.log(y);
    y = product.images[0];
    z = product.title;
    t = product.title;
      cart = product.variants[0].id;
      //console.log(t);
    document.getElementById("imag12").src = y;
    document.getElementById("popuptitle").textContent = z;
    document.getElementById("popuptext").textContent = t;
      document.getElementById("quantity1").value = cart;
      //console.log(product);
      
} );
  }
  function myFunction22() {
    let x, y, z, t, cart;
    document.getElementById("popup").style.visibility = "visible";
    x = document.getElementById("imag3").alt;
    //console.log(x);
    jQuery.getJSON('/products/'+x+'.js', function(product) {
  //alert('The title of this product is ' + product.title);
     // console.log(y);
    y = product.images[0];
    z = product.title;
    t = product.title;
      cart = product.variants[0].id;
      //console.log(t);
    document.getElementById("imag12").src = y;
    document.getElementById("popuptitle").textContent = z;
    document.getElementById("popuptext").textContent = t;
      document.getElementById("quantity1").value = cart;
      //console.log(product);
      
} );
  }
  function myFunction23() {
    let x, y, z, t, cart;
    document.getElementById("popup").style.visibility = "visible";
    x = document.getElementById("imag4").alt;
    //console.log(x);
    jQuery.getJSON('/products/'+x+'.js', function(product) {
  //alert('The title of this product is ' + product.title);
     // console.log(y);
    y = product.images[0];
    z = product.title;
    t = product.title;
      cart = product.variants[0].id;
      //console.log(t);
    document.getElementById("imag12").src = y;
    document.getElementById("popuptitle").textContent = z;
    document.getElementById("popuptext").textContent = t;
      document.getElementById("quantity1").value = cart;
     // console.log(product);
      
} );
  }

//Carousel from API

//   <div id="testcarousel">
//     <div class="cont" id="testcarousel0"><button onclick="myFunction1()"><</button></div>  
//     <div id="testcarousel1"><img onclick="myFunction20()" id="imag1" class="go" src="" alt=""></div>
//     <div id="testcarousel2"><img onclick="myFunction21()" id="imag2" class="go" src="" alt=""></div>
//     <div id="testcarousel3"><img onclick="myFunction22()" id="imag3" class="go" src="" alt=""></div>
//     <div id="testcarousel4"><img onclick="myFunction23()" id="imag4" class="go" src="" alt=""></div>
//       <div id="testcarousel5"><button onclick="myFunction()">></button></div>
//   </div>

//API

fetch("/recommendations/products.json?product_id=6700434358381&limit=4")
  .then(response => response.json())
  .then(({ products }) => {
    if (products.length > 0) {
      const firstRecommendedProduct = products[0];
      const x = products[0].images[0];
      const y = products[1].images[0];
      const z = products[2].images[0];
      const t = products[3].images[0];  
      const a = products[0].handle;
      const b = products[1].handle;
      const c = products[2].handle;
      const d = products[3].handle; 
console.log(products);
      console.log(document.getElementById("imag1").src);
      document.getElementById("imag1").src = x;
      document.getElementById("imag2").src = y;
      document.getElementById("imag3").src = z;
      document.getElementById("imag4").src = t;
      // в alt передається handle продукту
      document.getElementById("imag1").alt = a;
      document.getElementById("imag2").alt = b;
      document.getElementById("imag3").alt = c;
      document.getElementById("imag4").alt = d;
      console.log(
        `The title of the first recommended product is: ${firstRecommendedProduct.id}`
      );
    }
  }
);
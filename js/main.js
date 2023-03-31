
var productName = document.getElementById("productName")
var productPrice = document.getElementById("productPrice")
var productCategory = document.getElementById("productCategory")
var productDescription = document.getElementById("productDescription")
var count = document.getElementById("count")
var totalPrices=document.getElementById("TotalPrice")
var mm;

var productContainer ;

if( localStorage.getItem("ourProducts") == null ) {
    productContainer = []
}
else {
    productContainer = JSON.parse( localStorage.getItem("ourProducts") )
    displayProduct()

}


function addProduct() {
    var product = {
        name: productName.value,
        price: productPrice.value,
        categ: productCategory.value,
        desc: productDescription.value,
        count: count.value // 10 20 30 
    }
    if(product.name !='' && product.price !=''){
        if(product.count>1){
            productContainer.push(product);
           }
           else{
            product.count=1;
            productContainer.push(product);
           }
        
            localStorage.setItem("ourProducts" ,JSON.stringify(productContainer))
            //  console.log(productContainer)
            displayProduct()
            clearInp()

    }

  

  
}

function displayProduct() {
    var count= document.getElementById("count")
    
   
    var total=0;
   
    var productList = ""
    for (var i = 0; i < productContainer.length; i++) {
        productList += `
        <tr>
        <td>${i + 1}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].categ}</td>
        <td>${productContainer[i].desc}</td>
        <td>${productContainer[i].count}</td>

        <td>
        <button class="btn btn-danger" onclick="deleteRow(${i})">Delete</button>
        </td>
        <td>
        <button class="btn btn-warning" onclick="editrow(${i})">Edit</button>
        </td>
       

        </tr>`
        total +=parseInt(productContainer[i].price);

    }
    document.getElementById("tottal").innerHTML=total;
    document.getElementById("tBody").innerHTML = productList;
    // if(productContainer[i].name==productContainer[i+1].name){
    //     for(var i = 0; i < productContainer.length; i++){
    //         count++;
            

    //     }
    //     document.getElementById("count").innerHTML=count;
        
    // }

}

//clear
function clearInp() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDescription.value = "";
    count.value = "";
}
//deleteAll
function deleteAll() {
    productContainer.splice(0);/////
    localStorage.setItem("ourProducts" ,JSON.stringify(productContainer))

    displayProduct()
}
//deleteRow
function deleteRow(i) {
    if(productContainer[i].count>1){
        productContainer[i].count-=1
    }
    else{
        productContainer.splice(i,1);
    }
  
    localStorage.setItem("ourProducts" ,JSON.stringify(productContainer))

    displayProduct()
}
// search
function searchProduct(term){
    var productList1 = ""
    for(var i = 0 ; i < productContainer.length ; i++){
        if(productContainer[i].name.includes(term) == true ){
             productList1 += `
            <tr>
            <td>${i + 1}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].categ}</td>
            <td>${productContainer[i].desc}</td>
            <td>${productContainer[i].count}</td>
            <td>
            <button class="btn btn-danger" onclick="deleteRow(${i})">Delete</button>
            </td>
            <td>
            <button class="btn btn-warning">Edit</button>
            </td>
            </tr>`
    
     
        document.getElementById("tBody").innerHTML = productList1;
        }
        
    }
}
function update(){
    var product = {
        name: productName.value,
        price: productPrice.value,
        categ: productCategory.value,
        desc: productDescription.value,
        count: count.value 
    }


    productContainer[mm]=product;
    displayProduct()
    clearInp()

}
function editrow(i){
   
   productName.value=productContainer[i].name;
   productPrice.value=productContainer[i].price;
   productCategory.value=productContainer[i].categ;
   productDescription.value=productContainer[i].desc;
   mm=i;
   
   


}


















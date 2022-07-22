// <!-- Mkulima Platform
// Mkulima is new Kenyan business-to-business (B2B) agro-startup focusing on connecting 
// grocery vendors to rural farmers. This is through their online marketplace where farmers
//  can trade vegetables and fruits with grocery vendors. To begin with, farmers have to register 
// on the platform and login. Thereafter, they can upload their products with respective prices. 
// On the other hand, grocery vendors can signup and login to the platform to place their bulk order requests. 
// Create a class Mkulima that will keep a list of farms, grocery vendors and products. A single farm record
//  should contain id, farm name, farmer, phone number and address. A single grocery vendor record should contain id,
//  store name and phone number. A product should have id, name and price fields. 
// Users of the system should be able to:
//  addFarm - params: farmId, name, farmer, phone, address
//  removeFarm - params: farmId
//  updateFarm - params: farmId, name, farmer, phone, address
//  getFarm - params: farmId - returns a farm object
//  addProduct - params: productId, name, price
//  removeProduct - params: productId
//  updateProduct - params: productId, name, price
//  getProduct - params: productId - returns a product object
//  printProducts - No param, console logs a list of product items with their prices.
// calculateOrderCost - params: productId, quantity -->

class Mkulima{
    constructor(){
        this.farms = [];
        this.groceryVendor = [];
        this.product = [];
        this.addFarm = (farmId, farmName, farmer, phone, address) => {
            this.farms.push({farmId,farmName,farmer,phone,address})
        }
        this.removeFarm = (farmId) => {
            let specific = this.farms.find(item => item.farmId ===farmId);
            let farmIndex = this.farms.indexOf(specific);
            this.farms.splice(farmIndex, 1); 
        }
        this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
            let selectedFarm = this.farms.find(item => item.farmId ===farmId)
            selectedFarm.farmId =newFarmId;
            selectedFarm.farmName =newFarmName;
            selectedFarm.farmer =newFarmerName;
            selectedFarm.phone =newPhone;
            selectedFarm.address =newAddress;
        }
        this.getFarm = (Id)=>{
            console.log(this.farms.find(object=>object.farmId===Id))
        }
        this.addProduct = (productId, productName, price) => {
            this.product.push({productId,productName,price})

        }
        this.removeProduct = (productId) => {
            let selected = this.product.find(item => item.productId ===productId);
            let productIndex = this.product.indexOf(selected);
            this.product.splice(productIndex, 1); 
        }
        this.updateProduct = function(productId,newProductId,newProductName,newPrice){
            let selectedProduct = this.product.find(item => item.productId ===productId)
            selectedProduct.productId =newProductId;
            selectedProduct.productName = newProductName;
            selectedProduct.price = newPrice;
        }
        this.getProduct = (Id)=>{
            console.log(this.product.find(object=>object.productId===Id))
        }
        this.printProducts = ()=>{
            console.log(this.product)
        }
        this.calculateOrderCost = (productId,quantity)=>{
            let selectedProduct = this.product.find(object=>object.productId===productId);
            console.log(`${quantity} ${selectedProduct.productName} for KES ${quantity*selectedProduct.price}`);
        }
    }
}

let farm1 = new Mkulima();
farm1.addFarm("X453","FarmSmart","Conslate","0785363752", "456 Bungoma");
farm1.addFarm("W564","LimaNuki","Amondi","0723456744", "616 Korongo");
farm1.addFarm("H234","Cheseva","Koyo","0722345643", "729 Naivasha");
console.log(farm1.farms);

farm1.removeFarm("W564");
console.log(farm1.farms);

farm1.updateFarm("H234","A123","NukiFarm","Arlene","0722987643","769 Naivasha");

farm1.getFarm("A123");

farm1.addProduct("765","Cheese",79);
farm1.addProduct("988","Millet",10);
farm1.addProduct("009","Pork",5);
farm1.addProduct("675","Sorghum",7);
console.log(farm1.product);

farm1.removeProduct("988");
console.log(farm1.product);

farm1.updateProduct("765","274","Milk",30);
console.log(farm1.product);

farm1.getProduct("274");

farm1.printProducts();

farm1.calculateOrderCost("675",20); 
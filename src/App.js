import React from 'react';
import './App.css';
import Product from './components/Product';
import Cart from './components/Cart';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      cart : [],
      products: [
        {
          id: 1, name: 'Apple', description: 'Apple fruit.', img: 'images/apple.jpg', price: 20
        },
        {
          id: 2, name: 'Banana', description: 'Banana fruit.', img: 'images/banana.jpg', price: 5
        },
        {
          id: 3, name: 'Watermelon', description: 'Watermelon fruit.', img: 'images/watermelon.jpg', price: 80
        },
        {
          id: 4, name: 'Mango', description: 'Mango fruit.', img: 'images/mango.jpg', price: 50
        },
        {
          id: 5, name: 'Pineapple', description: 'Pineapple fruit.', img: 'images/pineapple.jpg', price: 50
        },
        {
          id: 6, name: 'JackFruit', description: 'Jack fruit.', img: 'images/jackfruit.jpg', price: 50
        }
      ]
    };
  }

addProductToCart(product){
    var index = this.state.cart.findIndex(p => p.id === product.id);
    if(index >= 0)
    {
      var cartProducts = this.state.cart.slice();
      var selectedProduct = cartProducts[index];
      var updatedProduct = { ...selectedProduct, units : selectedProduct.units + product.units};
      cartProducts[index] = updatedProduct;
      this.setState({ cart : cartProducts });
    }
    else
    {      
      this.setState({ cart : [...this.state.cart, product] });
    }
}

removeProductFromCart(product){
  let index = this.state.cart.findIndex(p => p.id === product.id);

  if (index !== -1) {
    var cartProducts = this.state.cart.slice();
    cartProducts.splice(index, 1);
    this.setState({ cart : cartProducts });
  }
}

modifyProductQuantity(evt, product){
  if(evt.target.value < 1) return;
  var index = this.state.cart.findIndex(p => p.id === product.id);
 
  if(index >= 0){
    var cartProducts = this.state.cart.slice();
    var updatedProduct = cartProducts[index];
    updatedProduct.units = parseInt(evt.target.value);
    cartProducts[index] = updatedProduct;
    this.setState({ cart : cartProducts });
  }
}

totalPriceFunc(){
  if(this.state.cart.length === 0) return 0;

  var tp = 0;
  for(var i =0; i< this.state.cart.length; i++)
  {
    tp += this.state.cart[i].units * this.state.cart[i].price;
  }

  return tp;
}

  render(){
    return (
      <div className="container">
      <h2>E Commerse Application</h2>
      <div class="row">
        <div class="col-sm-7">
        <div class="row">
        <div class="card-deck">
        { this.state.products.map(p => <Product key= {p.id} {...p} addProduct = {this.addProductToCart.bind(this)} />)}
        </div>            
          </div>
                  
        </div>
        <div class="col-sm-5">
         <Cart cartItems={this.state.cart} totalPriceFunc={this.totalPriceFunc.bind(this)} modifyProductQuantity={this.modifyProductQuantity.bind(this)} removeProductFromCart={this.removeProductFromCart.bind(this)}/>
        </div>
      </div>
      </div>
      );
  }
}

export default App;

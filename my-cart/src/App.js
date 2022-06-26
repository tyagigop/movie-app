import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import {db} from './Firebase.js';



class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: 
      [
        {
          price: 9999,
          title: 'Watch',
          qty: 1,
          img: 'https://hips.hearstapps.com/esquireuk.cdnds.net/16/26/768x632/audemars-piguet-royal-oak-offshore-grand-complication-marcus-watches-ablogtowatch-19.jpg?resize=480:*',
          id: 1
        },
        {
          price: 66999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346295',
          id: 2
        },
        {
          price: 235999,
          title: 'Laptop',
          qty: 4,
          img: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
 


  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    var x=products[index].qty;
    if(x<1){
        return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteProduct=(id)=>{
    const { products } = this.state;
    const item= products.filter((item)=> item.id!=id);

    this.setState({
      products : item
    })

  }
  handleTotalQty=()=>{
    const {products}=this.state;
    let count=0;

    products.forEach((product)=>{
      count+=product.qty;
    })



    return count;
  }
  totalPrice=()=>{
    const {products}=this.state;
    let count=0;

    products.forEach((product)=>{
      count+=product.qty*product.price;
    })



    return count;

  }


render(){
  const {products}=this.state;
  return (
    
    <div className="App">
      {/* <h1>Cart</h1> */}
      <Navbar 
      totalCount={this.handleTotalQty()}
      />
      <Cart
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDelete={this.handleDeleteProduct}
      />
      <div>Total Price:{this.totalPrice()}</div>
    </div>
  );
}
}

export default App;

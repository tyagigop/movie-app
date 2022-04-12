import React from 'react';

class CartItem extends React.Component{
    

    // increaseqty =() =>{
    //     // this.state.qty=this.state.qty+1;
    //     console.log('this',this.state.qty);
    //     this.setState({
    //         qty: this.state.qty+1
    //     })
    // }
    // decreaseqty =() =>{
    //     // this.state.qty=this.state.qty-1;
    //     const {qty}=this.state;
    //     if(qty<1){
    //         return;
    //     }
    //     console.log('this',this.state.qty);
    //     this.setState((prevState)=>{
    //         return {
    //             qty:this.state.qty-1
    //         }
    //     });
 
        
    // }
    render (){
        const {price,title,qty}=this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>

                </div>
                <div className="right-block">
                    <div style={ { height:15}}>{title}</div>
                    <div style={ { color:'blue'}}>Rs. {price}</div>
                    <div style={ { color:'blue'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                    { /*button */}
                    <img alt='increase' className="action-icons" src='https://cdn-icons.flaticon.com/png/512/1665/premium/1665629.png?token=exp=1649337473~hmac=e1a4c0155a67116128db94e57cf988d7'
                    onClick={()=> this.props.onIncreaseQuantity(this.props.product)}
                    />
                    <img alt='decrease' className="action-icons" src='https://cdn-icons.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1649337473~hmac=f71f9f3cdef1e9870fcdf6c7749bb611'
                    onClick={()=> this.props.onDecreaseQuantity(this.props.product)}
                    />
                    <img alt='delete' className="action-icons" src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
                    onClick={() => this.props.onDelete(this.props.product.id)}/>
                    
                </div>
                </div>
              
            </div>
        )
    }
}
const styles={
    image :{
        height :110,
        width:110,
        borderRadius:4,
        background: '#ccc'
    }
}

export default CartItem;
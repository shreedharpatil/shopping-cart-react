import React from 'react';

const Cart = ({cartItems, totalPriceFunc, modifyProductQuantity, removeProductFromCart }) =>{
    const width50 = {width : '50%'};
    const width10 = {width : '10%'};
    const width20 = {width : '20%'};
    const width8 = {width : '1%'};
    const width22 = {width : '22%'};
    const productStyle = { height : '50px', width : '50px'};   

const Body = cartItems.map((p, i) => (<tr>
    <td data-th="Product">
        <div class="row">
            <div class="col-sm-2 hidden-xs"><img src={p.img} alt="..." class="img-responsive" style={productStyle}/></div>
            <div class="col-sm-10">
                <h5 class="nomargin">{p.name}</h5>
                {/* <p>{p.description}</p> */}
            </div>
        </div>
    </td>
    <td data-th="Price">&#8377;{p.price}</td>
    <td data-th="Quantity">
        <input type="number" class="form-control text-center" value={p.units} onChange={(e) => modifyProductQuantity(e, p)} />
    </td>
    <td data-th="Subtotal" class="text-center"><strong>&#8377;{p.units * p.price}</strong></td>  
    <td class="actions" data-th="">
        <button class="btn btn-danger btn-sm" onClick={() => removeProductFromCart(p)}><i class="fa fa-trash-o"></i></button>								
	</td>  
</tr>));

    return(
        <div>
                <table id="cart" class="table table-hover table-condensed">
    				<thead>
						<tr>
							<th style={width50}>Product</th>
							<th style={width10}>Price</th>
							<th style={width20}>Quantity</th>
							<th style={width22} class="text-center">Subtotal</th>
							<th style={width8}></th>
						</tr>
					</thead>
					<tbody>
                           {Body}
					</tbody>
					<tfoot>
						<tr>
							{/* <td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td> */}
							<td colspan="2" class="hidden-xs"></td>
							<td class="hidden-xs text-center"><strong>Total &#8377;{totalPriceFunc()}</strong></td>
							<td><button href="#" class="btn btn-success btn-block">Checkout</button></td>
                            
						</tr>
					</tfoot>
				</table>
        </div>
    );
};

export default Cart;
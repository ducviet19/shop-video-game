import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MessageBox from '../components/MessageBox';

function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;


  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);


  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping');
  };
  return (
    <div>
      <h1>Giỏ Hàng</h1>

      <div className="row top">
        <div className="col-12">
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
              <ul className="Info_cart">
                {cartItems.map((item) => (
                  <li key={item.product}>
                    <div className="row">
                      <div> 
                        
                        <img
                          src={item.image}
                          alt={item.name}
                          className="small"
                        ></img>
                      </div>
                      <div className="min-30">
                       
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </div>
                      <div>
                     
                        <select
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                         ${item.price}</div>
                      <div>
                        <button
                          type="button"
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          Xóa
                    </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
        </div>
        <div className="col-12">
          <div className="card card-body">
            <h3>Thông Tin Thanh Toán</h3>
            <ul>
              <li>
                <h2>
                  Tổng Tiền ({cartItems.reduce((a, c) => a + c.qty, 0)} Sản Phẩm) : $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                </h2>
              </li>
            </ul>
          </div>
        </div> 
      </div>
      <div className="col cart_bot">
        <button
                  type="button"
                  onClick={checkoutHandler}
                  disabled={cartItems.length === 0}
                >
                  Thanh Toán
        </button>
        <button
                  type="button"
                  onClick={checkoutHandler}
                  disabled={cartItems.length === 0}
                >
                  Tiếp Tục Mua Sắm
        </button>


        </div>
       
    </div>
  );
}

export default CartScreen;
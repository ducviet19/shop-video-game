import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import CartScreen from "./screens/CartScreen";
import HomeScreen from './screens/HomeScreen'
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import ProductListScreen from './screens/ProductListScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import { signout } from './actions/userActions';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="header-nav row p-3 border shadow fixed-top bg-white">
            <div className="header-top col-2 col-md-2 col-sm-2 col-lg-2 w-100 ">
              <img className="head-img p-2" src="//bizweb.dktcdn.net/100/339/085/themes/699262/assets/logo.png?1600143709781" alt="" />
            </div>
            <div className="header-nav-mid col-5 col-md-5 col-sm-5  col-lg-5 w-100">
              <ul className="list-inline d-flex mt-3 justify-content-between">
                <li className="list-inline-item">
                  <div className="dropdown pb-3">
                    <Link to="/">Trang Chủ</Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <div className="dropdown pb-3">
                    <Link className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontWeight: 'bold !important', color: 'rgba(102,102,102,0.85)' }}>
                      Sản Phẩm
                  </Link>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <Link className="dropdown-item" >Game</Link>
                      <Link className="dropdown-item" >Thẻ Game</Link>
                      <Link className="dropdown-item" >Vật phẩm game</Link>
                    </div>
                  </div>
                </li>
                <li className="list-inline-item"><Link style={{ fontWeight: 'bold !important', color: 'rgba(102,102,102,0.85)' }} >
                  Liên Hệ</Link> </li>
              </ul>
            </div>
            <div className="header-nav-bot col-5 col-md-5 col-sm-5 col-lg-5 h-100 w-100">
              <ul className="list-inline d-flex justify-content-end mt-3">
                <li className="list-inline-item  border border-bottom-0 border-left-0 border-top-0 pl-3 pr-3"><Link to="signin" className="pb-2" data-toggle="modal" data-target="#exampleModal" style={{ fontWeight: 'bold !important', color: 'rgba(102,102,102,0.85)' }}></Link>  {userInfo ? (
                  <div className="dropdown">
                    <Link to="#">
                      {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                    </Link>
                    <ul className="dropdown-content">
                      <li>
                        <Link to="/orderhistory">Order History</Link>
                      </li>
                      <li>
                        <Link to="/profile">User Profile</Link>
                      </li>
                      <li>
                        <Link to="#signout" onClick={signoutHandler}>
                          Sign Out
                    </Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                    <Link to="/signin">Đăng Nhập </Link>
                  )}  </li>

                <li className="red-tooltip list-inline-item  " data-toggle="tooltip" data-placement="top" title="Chưa có sản phẩm trong giỏ hàng"><Link to="/cart" className="pb-2" style={{ fontWeight: 'bold !important', color: 'rgba(102,102,102,0.85)' }} >Giỏ Hàng {cartItems.length > 0 && (<span className="badge">{cartItems.length}</span>)}  <img src="https://img.icons8.com/material-sharp/24/000000/favorite-cart.png" alt="" /></Link> </li>
                <li>
                {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
                </li>
              </ul>
            </div>
          </div>
          <div className="header-drop">
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex w-100">
              <button className="navbar-toggler navbar-toggler-right " type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <Link className="navbar-brand" to="/"><img className="head-img p-2" src="//bizweb.dktcdn.net/100/339/085/themes/699262/assets/logo.png?1600143709781" /></Link>
              <Link className="pb-2" style={{ fontWeight: 'bold !important', color: 'rgba(102,102,102,0.85)' }} >Giỏ Hàng <img src="https://img.icons8.com/material-sharp/24/000000/favorite-cart.png" /></Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Trang Chủ <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" >Giỏ Hàng</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

        </header>
        <main>
          <Route path='/cart/:id?' component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
           <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>
           <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
          ></AdminRoute>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer>
          <div className="footer row">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <h3>Giới Thiệu</h3>
              <ul className="list-footer">
                <li>Hướng Dẫn mua hàng</li>
                <li>Hướng Dẫn Thanh toán</li>
                <li>Hướng Dẫn giao nhận</li>
                <li>Điều khoản dịch vụ</li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <h3>Dịch vụ</h3>
              <ul className="list-footer">
                <li>Chính Sách bảo mật</li>
                <li>Chính Sách vận chuyển</li>
                <li>Chính sách đổi trả</li>
                <li>Quy định sử dụng</li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <h3>Hỗ Trợ</h3>
              <p>Tư vấn 24/7, hiện tại cửa hàng đang sửa chữa mặt bằng nên chỉ bán online</p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <h3>Kết Nối Với Chúng Tôi</h3>
              <div className="connect">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-google-plus"></i>
              </div>

            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

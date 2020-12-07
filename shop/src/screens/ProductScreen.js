import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';


function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId))
    }, [dispatch, productId]);

    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    }
    return (

        <div>
            {
                loading ?
                    (<LoadingBox></LoadingBox>) : error ?
                        (<MessageBox variant="danger">{error}</MessageBox>) :
                        (
                            <div>
                                <Link to="/">Home</Link>
                                <div className="row top">
                                    <div className="col-lg-6 col-12">
                                        <img className="medium" src={product.image} alt={product.name} />
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <div className="col">
                                            <ul>
                                                <li className="productName"><h1>{product.name}</h1></li>
                                                <li>
                                                    <Rating rating={product.rating} numReviews={product.numReviews} ></Rating>
                                                </li>
                                                <li>Giá Sản Phẩm :  {product.price} $ </li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <div className="card card-body">
                                                <ul>
                                                    <li>
                                                        <div className="row">
                                                            <div>
                                                                Tình Trạng :
                                                                {product.countInStock > 0 ? (<span className="success">Còn Hàng</span>) :
                                                                    (<span className="error">Unavailable</span>)
                                                                }
                                                            </div>
                                                        </div>
                                                    </li>
                                                    {
                                                        product.countInStock > 0 && (
                                                            <>
                                                                <li>
                                                                    <div className="row">
                                                                        <div>Số Lượng</div>
                                                                    </div>
                                                                    <select
                                                                        value={qty}
                                                                        onChange={(e) => setQty(e.target.value)}
                                                                    >
                                                                        {[...Array(product.countInStock).keys()].map(
                                                                            (x) => (
                                                                                <option key={x + 1} value={x + 1}>
                                                                                    {x + 1}
                                                                                </option>
                                                                            )
                                                                        )}
                                                                    </select>
                                                                </li>
                                                            </>
                                                        )
                                                    }

                                                </ul>

                                            </div>
                                        </div>
                                        <div className="col btn_add top">
                                            <button onClick={addToCartHandler} className="primary block" >Thêm Vào Giỏ</button>
                                            <button className="btn_add">Mua Ngay</button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
            }
            <div>
            </div>

        </div>




    );
}

export default ProductScreen;
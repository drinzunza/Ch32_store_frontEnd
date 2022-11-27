import './admin.css';
import { useState } from 'react';

const Admin = () => {
  const [product, setProduct] = useState({});
  const [allProducts, setAllProducts] = useState([]);

  const [couponCode, setCouponCode] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);

  const saveProduct = () => {
    console.log(product);

    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  };

  const saveCoupon = () => {
    console.log(couponCode);

    // add the coupon to the allCoupons array
    let copy = [...allCoupons];
    copy.push(couponCode);
    setAllCoupons(copy);
  };

  const productValChange = (e) => {
    // e = event information
    let name = e.target.name;
    let value = e.target.value;

    // copy, modify the copy, set the copy back
    let copy = { ...product };
    copy[name] = value;
    setProduct(copy);
  };

  const couponValChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    let copy = { ...couponCode };
    copy[name] = value;
    setCouponCode(copy);
  };

  return (
    <div className="admin">
      <h3>Store Administration</h3>

      <div className="content">
        <div className="products-form">
          <h5>Save Product</h5>

          <div className="my-control">
            <label>Title</label>
            <input name="title" onBlur={productValChange} type="text" />
          </div>

          <div className="my-control">
            <label>Image</label>
            <input name="image" onBlur={productValChange} type="text" />
          </div>

          <div className="my-control">
            <label>Category</label>
            <input name="category" onBlur={productValChange} type="text" />
          </div>

          <div className="my-control">
            <label>Price</label>
            <input name="price" onBlur={productValChange} type="number" />
          </div>

          <div className="my-control center">
            <button onClick={saveProduct} className="btn btn-sm btn-dark">
              Save Product
            </button>
          </div>

          <hr />

          <ul>
            {allProducts.map((p) => (
              <li key={p.title}>
                {p.title} - ${parseFloat(p.price).toFixed(2)}
              </li>
            ))}
          </ul>
        </div>

        <div className="coupons-form">
          <h5>Register Coupon Codes</h5>

          <div className="my-control">
            <label>Code</label>
            <input name="code" onBlur={couponValChange} type="text" />
          </div>

          <div className="my-control">
            <label>Discount</label>
            <input name="discount" onBlur={couponValChange} type="number" />
          </div>

          <div className="my-control center">
            <button onClick={saveCoupon} className="btn btn-sm btn-dark">
              Save Coupon
            </button>
          </div>

          <hr />

          <h5>Valid Coupon Codes</h5>

          <ul>
            {allCoupons.map((c) => (
              <li key={c.code}>
                {c.code} - {c.discount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;

/**
 * create a coupon state variable
 * cretea a couponValChange function
 * input fields on the coupon form will call your couponValChange
 * when the user click on the save coupon button, console log the coupon state variable
 */

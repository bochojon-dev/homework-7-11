import "../products/Products.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../context/wishlistSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

const Products = ({ data }) => {
  let wishlist = useSelector((state) => state.wishlist.value);
  let cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const product = data?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.images[0]} alt="product" />
      <div className="card_texts">
        <h3>{el.title}</h3>
        <p>${el.price}.00</p>
      </div>
      <div className="buttons">
        <button onClick={() => dispatch(toggleLike(el))}>
          {cart?.some((item) => item.id === el.id) ? (
            <IoCartOutline />
          ) : (
            <FaShoppingCart />
          )}
        </button>
        <button onClick={() => dispatch(toggleLike(el))}>
          {wishlist?.some((item) => item.id === el.id) ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button>
          <FiSearch />
        </button>
      </div>
    </div>
  ));
  return (
    <div className="products">
      <div className="container">
        <div className="product_title">
          <div></div>
          <div className="product_items">
            <ul>
              <li>All Plants</li>
              <li>New Arrivals</li>
              <li>Sale</li>
            </ul>
          </div>
          <div className="product_sort">
            <p>Sort by: </p>
            <select>
              <option value="Default sorting">Default sorting</option>
              <option value="Price sorting">Price sorting</option>
              <option value="Flowers">Flowers</option>
            </select>
          </div>
        </div>
        <div className="wrapper">{product}</div>
      </div>
    </div>
  );
};

export default Products;

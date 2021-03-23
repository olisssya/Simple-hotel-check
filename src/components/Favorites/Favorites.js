import styles from "./Favorites.module.scss";
import { useSelector, useDispatch } from "react-redux";
import Hotels from "../Hotels/Hotels";
import { ratingSortAC, priceSortAC } from "../../redux/actionCreators";

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.main.favorites);
  function ratingSort() {
    dispatch(ratingSortAC());
  }
  function priceSort() {
    dispatch(priceSortAC());
  }

  return (
    <section className={styles.favorites}>
      <h2>Избранное</h2>
      <button onClick={ratingSort}>
        <span>Рейтинг</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4999 7.24264L12.4392 8.3033L9.25724 5.12132L6.07526 8.3033L5.0146 7.24264L9.25724 3L13.4999 7.24264Z"
            fill="#41522E"
          />
          <path
            d="M13.4999 10.8324L12.4392 9.77179L9.25724 12.9538L6.07526 9.77179L5.0146 10.8324L9.25724 15.0751L13.4999 10.8324Z"
            fill="#41522E"
            fillOpacity="0.3"
          />
        </svg>
      </button>
      <button onClick={priceSort}>
        <span>Цена</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4999 7.24264L12.4392 8.3033L9.25724 5.12132L6.07526 8.3033L5.0146 7.24264L9.25724 3L13.4999 7.24264Z"
            fill="#41522E"
          />
          <path
            d="M13.4999 10.8324L12.4392 9.77179L9.25724 12.9538L6.07526 9.77179L5.0146 10.8324L9.25724 15.0751L13.4999 10.8324Z"
            fill="#41522E"
            fillOpacity="0.3"
          />
        </svg>
      </button>
      {favorites && favorites.map((el) => <Hotels key={el.hotelId} props={el} />)}
    </section>
  );
}

export default Favorites;

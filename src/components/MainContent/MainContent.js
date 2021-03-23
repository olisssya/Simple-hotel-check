import styles from "./MainContent.module.scss";
import { useSelector } from "react-redux";
import Carousel from "../Carousel/Carousel";
import moment from "moment";
import Hotels from "../Hotels/Hotels";

function MainContent() {
  const lastSearchInfo = useSelector((state) => state.main.lastSearchInfo);
  const hotels = useSelector((state) => state.main.hotels);
  const favorites = useSelector((state) => state.main.favorites);

  return (
    <main className={styles.main}>
      <div className={styles.main_title}>
        <div className={styles.main_title_location}>
          <span>Отели</span>
          <svg
            width="11"
            height="20"
            viewBox="0 0 11 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.999878 1.33334L9.66654 10L0.999878 18.6667"
              stroke="#A7A7A7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            {" "}
            {lastSearchInfo && lastSearchInfo[0].location
              ? lastSearchInfo[0].location
              : "Москва"}
          </span>
        </div>
        <div className={styles.main_title_date}>
          <div>
            {lastSearchInfo && lastSearchInfo[0].startDate
              ? moment(lastSearchInfo[0].startDate).format("DD MMMM YYYY")
              : moment().format("DD MMMM YYYY")}
          </div>
        </div>
      </div>
      <div className={styles.main_carousel}>
        <Carousel />
      </div>
      <div className={styles.main_favorites}>
        <span>Добавлено в Избранное:</span>{" "}
        <strong>{favorites ? favorites.length : 0}</strong> <span>отелей</span>
      </div>
      {hotels && hotels.map((el) => <Hotels key={el.hotelId} props={el} />)}
    </main>
  );
}

export default MainContent;

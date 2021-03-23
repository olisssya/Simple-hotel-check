import styles from "./MainContent.module.scss";
import { useDispatch, useSelector } from "react-redux";
import StarRatings from "react-star-ratings";
import Carousel from "../Carousel/Carousel";
import moment from "moment";

function MainContent() {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.main.hotels);
  const lastSearchInfo = useSelector((state) => state.main.lastSearchInfo);
  console.log(lastSearchInfo);
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span> {lastSearchInfo ? lastSearchInfo[0].location : "Москва"}</span>
        </div>
        <div className={styles.main_title_date}>
          <div>
            {lastSearchInfo&&lastSearchInfo[0].startDate
              ? moment(lastSearchInfo[0].startDate).format('DD MMMM YYYY')
              : moment().format('DD MMMM YYYY')}
          </div>
        </div>
      </div>
      <div className={styles.main_carousel}>
        <Carousel />
      </div>
      <div className={styles.main_favorites}>
        <span>Добавлено в Избранное:</span> <strong>3</strong>{" "}
        <span>отеля</span>
      </div>
      {hotels &&
        hotels.map((el) => (
          <div key={el.hotelId} className={styles.hotel}>
            <div className={styles.hotel_left}>
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M15.9358 1.33499C15.1647 2.06053 12.0585 4.98008 9.03699 7.82127C6.01277 10.6596 3.11707 13.3847 2.59753 13.8722C2.078 14.3598 1.33972 15.0534 0.956909 15.4104C0.574097 15.7702 0.202222 16.1214 0.131128 16.1939L-0.00012207 16.3245L0.902222 17.3983C1.39714 17.9875 1.82097 18.4692 1.84011 18.4692C1.86199 18.4663 3.48894 16.9572 5.45769 15.1143C15.7882 5.44442 17.4561 3.88887 17.4753 3.89468C17.4862 3.90048 18.7604 5.09326 20.3081 6.54723C21.853 8.0012 25.3448 11.2806 28.0628 13.8374C30.7807 16.3942 33.0175 18.4866 33.0311 18.4866C33.0448 18.4866 33.0639 18.4721 33.0721 18.4576C33.0858 18.4344 33.1022 18.4373 33.1296 18.4605C33.1815 18.504 33.1022 18.5911 34.0565 17.4419C34.4749 16.9398 34.8577 16.4813 34.9096 16.4232L35.0026 16.3187L32.7112 14.1741C31.4507 12.9929 28.4893 10.2184 26.1268 8.00991C23.7671 5.79848 20.8796 3.09659 19.7093 2.00248L17.5874 0.0145168H17.4643H17.3413L15.9358 1.33499Z"
                    fill="#41522E"
                  />
                  <path
                    d="M15.605 8.00708C14.6096 8.94157 11.8589 11.5274 9.49363 13.7504L5.19519 17.7931L5.20066 26.1281L5.20886 34.4631L5.26902 34.5821C5.30183 34.6489 5.38113 34.7504 5.44402 34.8056C5.67097 35.0145 5.37839 35 9.71238 35H13.6171L13.6225 31.3056C13.6307 27.6315 13.6307 27.614 13.6882 27.4834C13.7593 27.3151 13.896 27.17 14.0546 27.0946C14.1776 27.0336 14.1968 27.0336 17.4014 27.0249C20.9671 27.0162 20.8139 27.0104 21.0163 27.199C21.1585 27.3325 21.2378 27.4805 21.2706 27.6721C21.2925 27.7882 21.3007 28.9897 21.3007 31.4217V35L25.3585 34.9942L29.419 34.9855L29.501 34.9014C29.5475 34.8549 29.6241 34.7185 29.6733 34.5966L29.7635 34.3761L29.769 26.0759L29.7745 17.7757L23.6495 12.044C20.1768 8.79356 17.4999 6.30932 17.4698 6.30932C17.4343 6.30642 16.7944 6.88975 15.605 8.00708Z"
                    fill="#41522E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="35"
                      height="35"
                      fill="white"
                      transform="translate(-0.00012207)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className={styles.hotel_left_info}>
                <span>{el.hotelName}</span>
                <div className={styles.hotel_left_info_date}>
                  <span>28 June, 2020</span>
                  <span> - 1 день</span>
                </div>
                <StarRatings
                  className={styles.rating}
                  rating={el.stars}
                  starRatedColor="#CDBC1E"
                  numberOfStars={5}
                  name="rating"
                />
              </div>
            </div>
            <div className={styles.hotel_right}>
              <svg
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3806 1.59133C18.8675 1.08683 18.2582 0.686629 17.5877 0.413583C16.9171 0.140537 16.1984 0 15.4726 0C14.7467 0 14.028 0.140537 13.3574 0.413583C12.6869 0.686629 12.0776 1.08683 11.5645 1.59133L10.4996 2.63785L9.4347 1.59133C8.39822 0.572757 6.99246 0.000527962 5.52667 0.000527973C4.06087 0.000527984 2.65511 0.572757 1.61864 1.59133C0.582163 2.6099 -0.000122059 3.99139 -0.00012207 5.43187C-0.000122081 6.87235 0.582163 8.25383 1.61864 9.2724L2.68355 10.3189L10.4996 18L18.3157 10.3189L19.3806 9.2724C19.8939 8.76814 20.3012 8.16942 20.579 7.51045C20.8569 6.85148 20.9999 6.14517 20.9999 5.43187C20.9999 4.71857 20.8569 4.01225 20.579 3.35328C20.3012 2.69431 19.8939 2.09559 19.3806 1.59133Z"
                  fill="#E55858"
                />
              </svg>
              <div className={styles.hotel_right_price}>
                <span>Price:</span>
                <span>{el.priceAvg} ₽</span>
              </div>
            </div>
          </div>
        ))}
    </main>
  );
}

export default MainContent;

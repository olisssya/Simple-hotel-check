import { useEffect } from "react";
import { initFetchAC } from "../../redux/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Main.module.scss";
import Header from "../../components/Header/Header";
import SearchForm from '../../components/SearchForm/SearchForm'
import Favorites from '../../components/Favorites/Favorites'
import MainContent from '../../components/MainContent/MainContent'

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initFetchAC());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Header/>
      <main className={styles.container}>
        <div className={styles.container_left}>
            <SearchForm/>
            <Favorites/>
        </div>
        <div className={styles.container_center}>
            <MainContent/>
        </div>
      </main>
    </div>
  );
}

export default Main;

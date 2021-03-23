import styles from './Favorites.module.scss'
import { useSelector } from "react-redux";
import Hotels from '../Hotels/Hotels';


function Favorites() {
    const favorites = useSelector((state) => state.main.favorites);

    return (
        <section className={styles.favorites}>
            {favorites&&favorites.map(el=><Hotels props={el}/>)}
        </section>
    );
}

export default Favorites;
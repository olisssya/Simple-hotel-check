import Form from '../../components/Form/Form'
import styles from './Home.module.scss'

function Home(props) {
    return (
        <div className = {styles.home}>
            <div className={styles.background}></div>
            <Form/>
        </div>
    );
}

export default Home;
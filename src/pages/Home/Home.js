import Form from '../../components/Form/Form'
import styles from './Home.module.scss'

function Home(props) {
    return (
        <main className = {styles.home}>
            <div className={styles.background}></div>
            <Form/>
        </main>
    );
}

export default Home;
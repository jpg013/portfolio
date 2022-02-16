import HomeGreeting from './HomeGreeting';
import HomeButtons from './HomeButtons';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <HomeGreeting />
      <HomeButtons />
    </section>
  )
}

export default Home;

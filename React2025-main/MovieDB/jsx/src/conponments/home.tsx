import mb from '../assets/pics/mb.jpg';

function Home() {
  return (
    <div className="container">
      <h1 className="text-center">Welcome to the Movie Finder App!</h1>
      <img src={mb} alt="front" />
    </div>
  );
}

export default Home;
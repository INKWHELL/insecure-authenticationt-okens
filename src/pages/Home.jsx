import { useNavigate } from 'react-router-dom';

function Home() {
  const nav = useNavigate();
  const navigateToStart = () => { nav('/') };

  return (
    <div>
      <h1>HOMEPAGE</h1>
      <button onClick={navigateToStart}>Back to start</button>
    </div>
  );
}

export default Home;
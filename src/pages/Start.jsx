import { useNavigate } from 'react-router-dom';
import img1 from '../images/cardboard box.png';

function Start() {
  const nav = useNavigate();
  const navigateToHome = () => { nav('/home') };

  return (
    <div>
      <h1>!BUY OUR BOXES!</h1>
      <img src={img1} alt="" style={{ width: '300px', height: 'auto' }} />
      <button onClick={navigateToHome}>go to Home</button>
    </div>
  );
}

export default Start;
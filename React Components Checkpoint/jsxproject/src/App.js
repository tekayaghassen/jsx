
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js';
import FullName from './Component/Profile/FullName.js';
import Adress from './Component/Profile/Adress.js'

function App() {
  return (
    <div className="App">
      <FullName />
      <Adress />
      <ProfilePhoto />
</div>

  );
}

export default App;

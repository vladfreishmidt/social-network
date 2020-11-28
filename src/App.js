import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Sidebar from './components/Siderbar';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;


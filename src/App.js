import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import Messages from './components/Messages/Messages';
import News from './components/News/News';


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar />
        {/* </Profile /> */}
        <div className='app-wrapper-content'>
          <Route path='/profile' component={Profile} />
          <Route path='/chats' component={Messages} />
          <Route path='/news' component={News} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


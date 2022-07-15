import './App.css';
import Auth from './components/Auth';
import Counter from './components/Counter'
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';
import { RootState } from './store/index'


function App() {

  const authState = useSelector((state: RootState) => state.auth)

  return (
    <div >
      <Header />
      {!authState.isAuthenticated && <Auth />}
      {authState.isAuthenticated && <UserProfile />}
      {/* <Counter /> */}
    </div>
  );
}

export default App;

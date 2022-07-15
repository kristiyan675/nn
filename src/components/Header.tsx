import classes from './Header.module.css';
import { useSelector } from 'react-redux';
import { RootState, authActions } from '../store/index'
import { useDispatch } from 'react-redux';

const Header = () => {

  const authState = useSelector((state: RootState) => state.auth)
  
  const dispatch = useDispatch();

  const logoutSubmitHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch(authActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authState.isAuthenticated && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutSubmitHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;

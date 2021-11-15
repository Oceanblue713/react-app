import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';
import url from '../../url';

const MainNavigation = () => {

  const favoritesCtx = useContext(FavoritesContext);
  const [allMeetups, setAllMeetups] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await fetch(url);
    let count = 0
    data = data.json();
    data.then((value) => {
      for(const i in value)
      {
        const item = value[i]
        count += 1;
      }
    setAllMeetups(count);
    });
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups<span className={classes.badge}>{allMeetups}</span></Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New Meetup</Link>
          </li>
          <li>
            <Link to='/favorites'>
              My Favorites
              <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation;
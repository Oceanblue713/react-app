import { useContext, useState } from 'react';

import classes from './MeetupItem.module.css'
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';
import {Link} from 'react-router-dom';

const MeetupItem = (props) => {

  const favoritesCtx = useContext(FavoritesContext);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const itemIsFavorite = favoritesCtx.itemIsFovorite(props.id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      })
    }
  }

  const toggleDeleteHandler = () => {
    if(deleteModalOpen){
      setDeleteModalOpen(false);
    } else {
      setDeleteModalOpen(true);
    }
  }

  const deleteMeetup = () => {
    console.log("OK button");
  }

  let deleteConfirmationModal;
  if (deleteModalOpen) {
    deleteConfirmationModal = (
      <div>
        <h1>Are you sure to delete this Meetup?</h1>
        <button onClick={deleteMeetup}><Link to="/">OK</Link></button>
        <button onClick={toggleDeleteHandler}>NO</button>
      </div>
    )
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
          <button onClick={toggleDeleteHandler}>Delete</button>
          {deleteConfirmationModal}
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem;
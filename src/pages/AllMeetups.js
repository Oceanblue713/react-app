import MeetupList from "../components/meetups/MeetupList";
import url from '../url';
import {useState} from 'react';

function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  fetch(
    url,
  ).then(reponse => {
    return reponse.json();
  }).then (data => {
    setIsLoading(false);
    setLoadedMeetups(data)
  });

  if (isLoading) {
    return <section><p>Loading...</p></section>
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  )
}

export default AllMeetupsPage;
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import url from '../url';

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    fetch(url,
          {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
              'Content-Type': 'application/json'
            }
          }
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetupPage;
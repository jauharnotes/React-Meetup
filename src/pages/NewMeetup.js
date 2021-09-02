import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetupPage() {
  const history = useHistory();
  function addMeetupHandler(meetuoData) {
    fetch(
      "https://react-meetup-5d446-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetuoData),
        header: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <div>
      <h2>This New Meetup Page</h2>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </div>
  );
}

export default NewMeetupPage;

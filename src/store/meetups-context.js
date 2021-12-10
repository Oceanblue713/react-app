import { createContext, useState, useEffect } from "react";
//import url from '../../url';

const MeetupsContext = createContext({
  allMeetups: [],
  totalMeetups: 0
});

const MeetupsProvider = (props) => {

  const [allMeetups, setAllMeetups] = useState([]);

  useEffect(() => {
    getAllMeetups();
  }, []);

  const getAllMeetups = async () => {
    let data = await fetch('https://react-getting-start-bec19-default-rtdb.firebaseio.com/meetups.json');
    let allData = data.json();
    setAllMeetups(allData);
  }

  const meetupsData = {
    allMeetups: allMeetups,
    totalMeetups: allMeetups.length
  }

  return <MeetupsContext.Provider value={meetupsData}>
    {props.children}
  </MeetupsContext.Provider>
}

export default MeetupsContext;
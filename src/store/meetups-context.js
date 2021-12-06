import { createContext, useState } from "react";
import url from '../../url';

const MeetupsContext = createContext({
  allMeetups: []
});

const MeetupsProvider = () => {
  const [allMeetups, setAllMeetups] = useState([]);

  useEffect(() => {
    getAllMeetups();
  }, []);

  const getAllMeetups = async () => {
    let data = await fetch(url);
    let allData = data.json();
    console.log(allData);
  }
}
import axios from "axios";
// npm install --save axios

const KEY = "AIzaSyAw8ABIjeV4j9Ajb0tWQOB97jBchQj4mdw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  // baseURL: "https://www.googleapis.com/youtube/v3" + '/search' or when we use it in other component by simply saying youtube.get("/search");
  // "https://www.googleapis.com/youtube/v3?key={Key Here}"
  params: {
    part: "snippet",
    maxResults: 5,
    // q: "surfing", => we are gonna make the access to query only when we actually make a use of this axios at instance and send it over to google api
    key: KEY
    //always make sure to put the key value
  }
});

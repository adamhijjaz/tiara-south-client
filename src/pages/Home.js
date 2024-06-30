import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
    
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get("https://tiara-south-server.onrender.com").then((resp) => {
          setListOfPosts(resp.data);
          try {
            
            console.log("Response: " + resp);
          } catch (error) {
            console.log("Error :" + error);
          }
        });
      }, []);
  
    return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <div className="posts">
            <div className="title">{value.title}</div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;

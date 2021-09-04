import { CircularProgress, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Post from "./Post";

function DivBy3() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [err, setErr] = useState(null);
  const [errMsg, setErrMsg] = useState("");
  const [divBy3, setDivBy3] = useState([]);
  useEffect(() => {
    async function fetchAPI() {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          return res.json();
        })
        .then(
          (res) => {
            setDivBy3(res.filter((post) => post.id % 3 === 0));
            console.log(divBy3);
            setIsLoaded(true);
          },
          (err) => {
            setErr(true);
            setErrMsg(err);
            setIsLoaded(true);
          }
        );
    }
    fetchAPI();
  }, []);

  return (
    <div>
      <Nav />
      {isLoaded && !err ? (
        <div style={{margin:20}}>
          <Grid container spacing={2}>
          {divBy3.map(({ id, userId, title, body }) => (
               
                   <Grid key={id} item xs={12} lg={4} sm={6} md={4}>
                
                     <Post id={id} userId={userId} title={title} body={body}/>
                 </Grid>
             ))}
         </Grid>
        </div>
      ) : (
        <center style={{ margin: 30 }}>
          <CircularProgress color="primary" />
        </center>
      )}

      {isLoaded && err ? <center><div>Error Occured During Fetch</div></center> : null}
    </div>
  );
}

export default DivBy3;

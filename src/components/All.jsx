import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Post from "./Post";

function All() {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    async function fetchAPI() {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          return res.json();
        })
        .then(
          (res) => {
            setPosts(res);
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
        <div style={{ margin: 20 }}>
          <Grid container spacing={2}>
            {posts.map(({ id, userId, title, body }) => (
              <Grid key={id} item xs={12} lg={4} sm={6} md={4}>
                <Post id={id} userId={userId} title={title} body={body} />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <center style={{ margin: 30 }}>
          <CircularProgress color="primary" />
        </center>
      )}
      {isLoaded && err ? (
        <center>
          <div>Error Occured While Fetch</div>
        </center>
      ) : null}
    </div>
  );
}

export default All;

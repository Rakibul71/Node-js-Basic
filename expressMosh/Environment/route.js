// const express = require("express");
// const app = express();

// const course = [
//   { id: 1, name: "rakib" },
//   { id: 2, name: "sakib" },
//   { id: 3, name: "akib" },
// ];
// app.get("/api/courses", (req, res) => {
//   res.send(course);
// });
// app.get("/api/courses/:id", (req, res) => {
//   res.send(req.params.id);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`listing port ${port}`);
// });

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("First simple Express server");
});

const allPost = {
  2020: [
    {
      id: 1,
      title: "One",
    },
    {
      id: 2,
      title: "Two",
    },
  ],
  2021: [
    {
      id: 3,
      title: "Three",
    },
    {
      id: 4,
      title: "Four",
    },
  ],
};

app.get("/api/posts", (req, res) => {
  res.send(allPost);
});

//shimanto's solution
// app.get("/api/posts/:year/:id", (req, res) => {
//   const data = allPost[req.params.year].find(
//     (item) => item.id === parseInt(req.params.id)
//   );
//   res.send(data);
// });

app.get("/api/posts/:id", (req, res) => {
  // const post = allPost.find((c) => c.id === parseInt(req.params.id));
  // const post = allPost.forEach((year) => {
  //   year.find((c) => c.id === parseInt(req.params.id));
  // });
  // if (!post) res.status(404).send("there was no valid data");
  const post = allPost.forEach((element, index));

  res.send(post);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "580571",
    database: "smartBraine",
  },
});

const app = express();
//block use
app.use(bodyParser.json());
app.use(cors());

const foundIdUsers = (req, res) => {
  const { id } = req.params;
  knex
    .select("*")
    .from("users")
    .where({
      id: id,
    })
    .then((user) => {
      if (user.length) {
        res.json(user[0]);
      } else {
        res.status(400).json("User not found");
      }
    })
    .catch((err) => {
      res.status(400).json("Erro geting profile");
      console.log(err);
    });
};

app.get("/", (req, res) => {
  res.json("some info...");
});

// signin:
app.post("/signin", (req, res) => {

  knex
    .select("*")
    .from("login")
    .where("email", "=", req.body.email)
    .then((data) => {
      let passwordLoginTrue;
      console.log(data.length);
      if (data.length) {
        passwordLoginTrue = bcrypt.compareSync(req.body.password, data[0].hash);
      } 
      if (passwordLoginTrue) {
        knex
          .select("*")
          .from("users")
          .where("email", "=", req.body.email)
          .then((dataUser) => {
            res.json(dataUser[0]);
          })
          .catch((err) => res.json("password ok but...", err));
      } else if (data.length === 0 ){
        res.status(400).json("signin work but please register!");
      } else {
        res.status(400).json("signin work but bad password");
      } // end if
//end then->
    }) 
    .catch((err) => {
      res.json("Bad email");
      console.log(err);
    });
});

//register
app.post("/register", (req, res) => {
  // console.log(req.body);
  const { email, name, password } = req.body;

  const saltRounds = 10;
  let hash = bcrypt.hashSync(password, saltRounds);

  // returning("*") - send data back to server
  knex
    .transaction((trx) => {
      trx
        .insert({
          hash: hash,
          email: email,
        })
        .into("login")
        .returning("email")
        .then((loginemail) => {
          return trx("users")
            .returning("*")
            .insert({
              email: email,
              name: name,
              joined: new Date(),
            })
            .then((response) => {
              res.json(response[0]);
            });
        })
        .then(trx.commit)
        .catch(trx.rollback);
    })
    .catch((err) => {
      res.json(err);
    });

  // database.users.push(pushObj);
  // res.json(database.users[database.users.length - 1]);

  // console.log(database.users);
});

app.get("/profile/:id", (req, res) => {
  foundIdUsers(req, res);
});

app.put("/image", (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  knex("users")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then((entries) => res.json(entries[0]))
    .catch((err) => res.status(400).json("somgonewrong", err));
});

app.listen(3000, () => {
  console.log("server work at 3000");
});
/*
/chek list for work
/ -- res - work
/signin - post = ok/fail
/register - post = user
/profile / :user ID - get -user
/image -- put - user rank
*/
//

// https://PROJECT_ID.REGION_ID.r.appspot.com
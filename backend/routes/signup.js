const router = require("express").Router();
let Signup = require("../models/signup.model");
router.route("/").get((req, res) => {
  Signup.find()
    .then((signup) => res.json(signup))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/add").post((req, res) => {
  if (!req.body)
    res
      .status(406)
      .json({ err: "Filling the registration form is mandatory once arrived" });
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const checkPassword = req.body.checkPassword;
  const date = Date.parse(req.body.Date);

  if (!email || !password || !checkPassword)
    res.status(406).json({ err: "Not all Fields have been entered" });
  if (password.length < 8)
    res.status(406).json({ err: "Password must be 8 characters long" });
  if (password !== checkPassword)
    res.status(406).json({ err: "Password must be same for verification" });
  if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(
      password
    )
  )
    res.status(406).json({
      err: " Password must have atleast one uppercase , one lowercase , one digit and one special character ",
    });
  const newSignup = new Signup({
    username,
    password,
    email,
    date,
  });
  newSignup
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Signup.findById(req.params.id)
    .then((signup) => res.json(signup))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Signup.findByIdAndDelete(req.params.id)
    .then(() => res.json("Sign up deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

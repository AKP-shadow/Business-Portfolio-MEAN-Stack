const { Router } = require("express"); // import Router from express
const Todo = require("../models/quo"); // import Todo model
const { isLoggedIn } = require("./middleware"); // import isLoggedIn custom middleware
const Service = require("../models/services")

// service_data = {
//   "On-line Leak": {
//     alias: "online leak", des: "", img: "https://leaksealing.com/wp-content/uploads/2016/06/DSC00049.jpg"
//   },
//   "On-line Leak": {
//     alias: "online leak", des: "", img: "https://leaksealing.com/wp-content/uploads/2016/06/DSC00049.jpg"
//   },
//   "On-line Leak": {
//     alias: "online leak", des: "", img: "https://leaksealing.com/wp-content/uploads/2016/06/DSC00049.jpg"
//   },
//   "Grinding and Machining": {
//     alias: "grinding", des: "", img: "https://ravimachines.com/wp-content/uploads/2016/07/Bench-Grinder-0.5-HP-scaled.jpg"
//   },
//   "Cold Welding": {
//     alias: "welding", des: "", img: "https://www.reliance-foundry.com/wp-content/uploads/Bearings-1.jpg"
//   },
//   "Gear and shaft desiging": {
//     alias: "", des: "", img: "https://www.reliance-foundry.com/wp-content/uploads/Bearings-1.jpg"
//   },
//   "Gear and shaft desiging": {
//     alias: "", des: "", img: "https://www.reliance-foundry.com/wp-content/uploads/Bearings-1.jpg"
//   },
//   "Gear and shaft desiging": {
//     alias: "", des: "", img: "https://www.reliance-foundry.com/wp-content/uploads/Bearings-1.jpg"
//   },  "Gear and shaft desiging": {
//     alias: "", des: "", img: "https://www.reliance-foundry.com/wp-content/uploads/Bearings-1.jpg"
//   }
// }
function changeJSON(service_data){
  serviceData = []
  for (const [key, value] of Object.entries(service_data)) {
    serviceData.push({
      name: key,
      desc: value.alias,
      image: value.img,
    });
  }
  return serviceData
}


const router = Router();
router.get('/populate', async (req, res) => {
  // Array of product data in JSON format
    const productData = changeJSON(service_data);
  console.log(productData);

  try {
    // Save the product data to the database using async/await
    const products = await Service.create(productData);
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error populating products');
  }
});

router.get('/services', async (req, res) => {
  try {
    const services = await Service.find({});
    console.log("services sent")
    res.status(200).json(services);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving services');
  }
});

//custom middleware could also be set at the router level like so
// router.use(isLoggedIn) then all routes in this router would be protected

// Index Route with isLoggedIn middleware
router.get("/", isLoggedIn, async (req, res) => {
  const { username } = req.user; // get username from req.user property created by isLoggedIn middleware
  //send all todos with that user
  res.json(
    await Todo.find({ username }).catch((error) =>
      res.status(400).json({ error })
    )
  );
});

// Show Route with isLoggedIn middleware
router.get("/:id", isLoggedIn, async (req, res) => {
  const { username } = req.user; // get username from req.user property created by isLoggedIn middleware
  const _id = req.params.id; // get id from params
  //send target todo
  res.json(
    await Todo.findOne({ username, _id }).catch((error) =>
      res.status(400).json({ error })
    )
  );
});

// create Route with isLoggedIn middleware
router.post("/request-quotation", isLoggedIn, async (req, res) => {
  console.log(req.body)
  const { username } = req.user; // get username from req.user property created by isLoggedIn middleware
  req.body.username = username; // add username property to req.body
  //create new todo and send it in response
 
  dataStruct = {unameExist: false,loggedin:true, success: false ,data: `Quotation request sent successfully`}
   console.log(req.body)
    await Todo.create(req.body)
    res.render('index',{dataStruct})
  
});

// update Route with isLoggedIn middleware
router.put("/:id", isLoggedIn, async (req, res) => {
  const { username } = req.user; // get username from req.user property created by isLoggedIn middleware
  req.body.username = username; // add username property to req.body
  const _id = req.params.id;
  //update todo with same id if belongs to logged in User
  res.json(
    await Todo.updateOne({ username, _id }, req.body, { new: true }).catch(
      (error) => res.status(400).json({ error })
    )
  );
});

// update Route with isLoggedIn middleware
router.delete("/:id", isLoggedIn, async (req, res) => {
  const { username } = req.user; // get username from req.user property created by isLoggedIn middleware
  const _id = req.params.id;
  //remove todo with same id if belongs to logged in User
  res.json(
    await Todo.remove({ username, _id }).catch((error) =>
      res.status(400).json({ error })
    )
  );
});

module.exports = router
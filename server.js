const express = require("express");
const mongoose = require ('mongoose');
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "janithrangana097@gmail.com",
    pass: "ikfa dxqa yasl tmqf"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "janithrangana097@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

//server use for blogs
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection (replace with your connection string)
mongoose.connect('mongodb+srv://janithrangana097:sjxsZD69mFn4OpbC@cluster0.qvbpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Blog Post Schema and Model
const BlogPostSchema = new mongoose.Schema({
  title: String,
  date: String,
  excerpt: String,
  imageUrl: String,
  link: String,
});

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

// API endpoint to get blog posts
app.get('/api/blog-posts', async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
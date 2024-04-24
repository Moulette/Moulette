import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// Import routes
import movieRoutes from "./routes/api.js";

// import authRoutes from "./routes/auth";
// import listRoutes from "./routes/list";

const app = express();
const PORT = 4000;
console.log('server starting');

// Middleware
app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", movieRoutes);
// app.use("/auth", authRoutes);
// app.use("/list", listRoutes);

// // Use the status routes
// app.use('/api/status', statusRoutes);

app.get('/', (req, res) => {
  res.send('Here is the Movie API server!')
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

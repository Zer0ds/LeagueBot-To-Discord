import "dotenv/config";
import express from "express";

// Express instance && port
const app = express();
const port = process.env.PORT ?? 3000;

// Middleware
app.use(express.json());

// Routes
import webhookRoute from "./routes/api/webhook";

app.use(webhookRoute);

// Start the server
app.listen(port, () => {
	console.log(`Server is listening on port: ${port}`);
});

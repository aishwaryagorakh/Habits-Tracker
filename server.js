import app from "./app.js";
import { connectDB } from "./config/db.js";

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at PORT- ${process.env.PORT}`);
  connectDB();
});

import dotenv from "dotenv";
dotenv.config();

console.log("API_KEY:", process.env.API_KEY);
// top-level await
const response = await fetch("http://google.com");
console.log(response);

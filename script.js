import OpenAI from "openai";
import { config } from "dotenv";
config()
import prisma from "./prisma.js";
import express from "express"

const app = express()

app.listen(8080, () => {
    console.log("server started");
    main()
  });

function main()
{
    // Initial date set to March 2, 2024. Note that months are 0-indexed in JavaScript Date (0-11 for Jan-Dec).
let currentDate = new Date(2024, 2, 2);

const openai = new OpenAI({apiKey: process.env.API_KEY});



// Function to check if the current day is seven days after the currentDate
async function checkAndUpdateDate() {
  const today = new Date();
  // Calculate the difference in days
  const differenceInTime = today.getTime() - currentDate.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  // Check if difference is 7 days
  if (differenceInDays >= 7) {
    console.log(`Updating date from ${currentDate.toDateString()} to ${today.toDateString()}`);
    // Update currentDate to today
    currentDate = today;
   
        const article = await openai.chat.completions.create({
          messages: 
          [
            { role: "system", content: "You are a talanted article write with SEO content and creative text" },
            {
                role:"user", content: "Generate a 4-7 paragraph article about a RIGHT NOW trending on Google news report or another article. Create SEO optimzed content and be creative, engage with the reader by asking and answering questions or joking. Create title and an intro."
            }
        ],
          model: "gpt-4-0125-preview",
        });

        const image = await openai.images.generate(
            fs.createReadStream("sunlit_lounge.png"),
            fs.createReadStream("mask.png"),
            "dall-e-3",
            "A sunlit indoor lounge area with a pool containing a flamingo",
            1,
            "1024x1024"
          );
          console.log(image.data.data[0].url)
      }
    
   else {
    console.log('Not 7 days after the last update yet.');
  }

  // Schedule the next check for the next day
  setTimeout(checkAndUpdateDate, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
}

// Start the first check
checkAndUpdateDate();

}

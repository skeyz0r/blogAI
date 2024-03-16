import OpenAI from "openai";
import { config } from "dotenv";
config()
import uploadFile from './google.js'
import prisma from "./prisma.js";
import express from "express"
import updateDate from "./date.js";
import download from "./download.js";
import fs from 'fs'

const app = express()

app.listen(8080, () => {
    console.log("server started");
    main()
  });

function main()
{
  // Define the string
let date = process.env.DATE;

// Split the string into an array of words
let dateArray = date.split('/');


    // Get date.
    let currentDate = new Date(parseInt(dateArray[2]), parseInt(dateArray[0] - 1), parseInt(dateArray[1]));

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
    let formattedToday = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    updateDate('DATE', formattedToday)
   
       const article = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are a talented article writer with SEO content and creative text."
          },
          {
            role: "user",
            content: "Generate a 1 paragraph article about a RIGHT NOW trending on Google news report or another article. Create SEO optimized content and be creative, engage with the reader by asking and answering questions or joking. Make the first text be the article name. DO NOT USE NUMBERS IN THE NAME, seperate the name by using ** on each side, do not write anything else but the text"
          }
        ],
          model: "gpt-4-0125-preview",
        });
         console.log(article.choices[0].message.content)
        const firstIndex = article.choices[0].message.content.indexOf("**");
        const secondIndex = article.choices[0].message.content.indexOf("**", firstIndex + 2);
        const name = article.choices[0].message.content.slice(0, secondIndex + 2).replaceAll('*', '')
        const text = article.choices[0].message.content.slice(secondIndex + 2)
                let url = name.replaceAll(' ', '_') + '.png'
        if (name.includes(':')) {
          const i = name.indexOf(':');
          // Use slice to get the part of the string after the colon
          const imageName = name.slice(i + 1).replaceAll(' ', '_');
          // Assuming you want to construct a URL with .png at the end
          url = imageName + '.png';
      }
        console.log('Name:' + name, 'Url:'+ url, "text: " + text)

        const image = await openai.images.generate(
          {
          model: "dall-e-3",
          prompt: `Generate a pciture for this article: ${name}`,
          n: 1,
          size: "1024x1024",
        },
        );

        function downloadImage(url, path) {
          return new Promise((resolve, reject) => {
            download(url, path, (err) => {
              if (err) {
                reject(err);
              } else {
                console.log('Download completed');
                resolve();
              }
            });
          });
        }
        
      await downloadImage(image.data[0].url, url);
            // Once the download is complete, proceed to upload
            await uploadFile(process.env.BUCKET_NAME, url, url).then(()=>{
              // Function to remove a file by name from the 'src' folder
    
                // Assuming the file is in the same directory as this script

              
                try {
                  fs.unlinkSync(`./${url}`.trim());
                  console.log('File was deleted successfully');
                } catch (err) {
                  console.error('An error occurred:', err);
                }
      }) 
      .then(async()=>{
        const imageUrl = 'https://storage.googleapis.com/minimalist/'+url
        await prisma.news.create({
          data:{
            name: name,
            url: url,
            image: imageUrl
          }
        })
      })
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

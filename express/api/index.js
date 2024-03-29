const OpenAI = require('openai')
require('dotenv').config()
const uploadFile = require('./google.js')
const prisma = require('../src/prisma.js')
const cron = require('node-cron')
const download = require('./download.js')
const Write = require('./json.js')
const fs = require('fs')
const app = require('../src/app.js')



  const data = {
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: process.env.PRIVATE_KEY,
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    type: "service_account",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/blogai%40minimalist-415400.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
};

function start()
{
  console.log("We started")
cron.schedule("0 0 * * *",() => {
  checkAndUpdateDate()
  });

const openai = new OpenAI({apiKey: process.env.API_KEY});



// Function to check if the current day is seven days after the currentDate
async function checkAndUpdateDate() {


      Write(data)
   
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

            try{
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
      }).then(()=>Write(null))
    }catch(error)
    {
      console.log(error)
    }

}

}

start()


module.exports= app;
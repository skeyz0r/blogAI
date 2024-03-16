import fs from 'fs'


// Convert file URL to directory name

// Function to update an existing environment variable in the .env file
export default function updateEnvVariable(key, newValue) {
  const envPath = new URL('.env', import.meta.url);
  if (!fs.existsSync(envPath)) {
    console.log('.env file does not exist.');
    return;
  }

  const envContent = fs.readFileSync(envPath, 'utf8');
  const keyRegex = new RegExp(`^${key}=.*`, 'm');
  
  if (envContent.match(keyRegex)) {
    // Key exists, update the value
    const updatedContent = envContent.replace(keyRegex, `${key}=${newValue}`);
    fs.writeFileSync(envPath, updatedContent, 'utf8');
    console.log(`Updated ${key} value in .env file.`);
  } else {
    // Key does not exist
    console.log(`${key} does not exist in .env file.`);
  }
}

  
 
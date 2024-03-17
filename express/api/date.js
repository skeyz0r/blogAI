import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Determine the directory of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to update an existing environment variable in the .env file located in the root directory
export default function updateEnvVariable(key, newValue) {
  // Construct the path to the .env file located in the root directory, assuming this script is in the 'src' folder in the root
  const envPath = path.join(__dirname, '..', '.env');
  
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

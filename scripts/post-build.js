import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define paths
const distDir = path.join(__dirname, '..', 'dist');
const clientDir = path.join(distDir, 'client');
const publicDir = path.join(__dirname, '..', 'public');
const assetsDir = path.join(publicDir, 'assets');
const themeAssetsDir = path.join(publicDir, 'theme-assets');

// Ensure directory exists
async function ensureDirectory(dir) {
  try {
    await fs.promises.access(dir);
  } catch (error) {
    // Directory doesn't exist, create it
    await fs.promises.mkdir(dir, { recursive: true });
  }
}

// Copy file
async function copyFile(source, destination) {
  try {
    await ensureDirectory(path.dirname(destination));
    await fs.promises.copyFile(source, destination);
    console.log(`Copied: ${path.basename(source)}`);
    return true;
  } catch (error) {
    console.error(`Error copying ${source}: ${error.message}`);
    return false;
  }
}

// Copy theme assets
async function copyThemeAssets() {
  // Define theme assets
  const themeAssets = {
    'kunai-mark.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FFD700" d="M12 2L2 22h20L12 2zm0 4l6 16H6l6-16z"/></svg>',
    'chainsaw-pattern.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FF4500" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L20 9v6l-8 4-8-4V9l8-4.2z"/></svg>',
    'infinity-symbol.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#4169E1" d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L14.8 9.62c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"/></svg>'
  };
  
  // Ensure theme assets directory exists in both public and client
  await ensureDirectory(themeAssetsDir);
  const clientThemeAssetsDir = path.join(clientDir, 'theme-assets');
  await ensureDirectory(clientThemeAssetsDir);
  
  // Create theme asset files and copy to client
  for (const [filename, content] of Object.entries(themeAssets)) {
    const publicFilePath = path.join(themeAssetsDir, filename);
    const clientFilePath = path.join(clientThemeAssetsDir, filename);
    
    // Write to public directory
    await fs.promises.writeFile(publicFilePath, content);
    
    // Copy to client directory
    await fs.promises.writeFile(clientFilePath, content);
    
    console.log(`Copied theme asset: ${filename}`);
  }
}

// Copy CSS files specifically
async function copyCssFiles() {
  // Find all CSS files in the dist directory
  const findCssFiles = async (dir) => {
    const results = [];
    const items = await fs.promises.readdir(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        // Recursively search subdirectories
        const subResults = await findCssFiles(fullPath);
        results.push(...subResults);
      } else if (path.extname(item.name) === '.css') {
        // Add CSS file to results
        results.push(fullPath);
      }
    }
    
    return results;
  };
  
  // Find all CSS files
  const cssFiles = await findCssFiles(distDir);
  
  // Copy each CSS file to client directory
  for (const cssFile of cssFiles) {
    const relativePath = path.relative(distDir, cssFile);
    const destPath = path.join(clientDir, relativePath);
    
    // Copy the file
    await copyFile(cssFile, destPath);
    console.log(`Copied CSS file: ${relativePath}`);
  }
}

// Copy public assets to client directory
async function copyPublicAssets() {
  // Ensure client directory exists
  await ensureDirectory(clientDir);
  
  // Copy specific files from public to client
  const filesToCopy = [
    { src: path.join(publicDir, 'background.svg'), dest: path.join(clientDir, 'background.svg') },
    { src: path.join(publicDir, 'favicon.svg'), dest: path.join(clientDir, 'favicon.svg') }
  ];
  
  // If assets directory exists, copy its contents
  try {
    await fs.promises.access(assetsDir);
    const assetFiles = await fs.promises.readdir(assetsDir);
    for (const file of assetFiles) {
      filesToCopy.push({
        src: path.join(assetsDir, file),
        dest: path.join(clientDir, 'assets', file)
      });
    }
  } catch (error) {
    // Assets directory doesn't exist, that's okay
    console.log('Assets directory not found, skipping');
  }
  
  // Copy each file
  for (const { src, dest } of filesToCopy) {
    try {
      await fs.promises.access(src);
      await copyFile(src, dest);
    } catch (error) {
      // File doesn't exist, skip it
      console.log(`File not found, skipping: ${src}`);
    }
  }
}

// Main function
async function main() {
  try {
    // Create client directory if it doesn't exist
    await ensureDirectory(clientDir);
    await ensureDirectory(path.join(clientDir, 'assets'));
    
    // Copy assets
    await copyThemeAssets();
    await copyPublicAssets();
    await copyCssFiles();
    
    console.log('Post-build processing completed successfully!');
  } catch (error) {
    console.error('Error during post-build processing:', error);
    process.exit(1);
  }
}

// Run the main function
main();
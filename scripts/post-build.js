import { readdir, copyFile, mkdir, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const sourceDir = fileURLToPath(new URL('../dist/', import.meta.url));
const clientDir = fileURLToPath(new URL('../dist/client/', import.meta.url));
const publicDir = fileURLToPath(new URL('../public/', import.meta.url));

async function ensureDirectory(dir) {
  try {
    await mkdir(dir, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
  }
}

// Recursively copy files and directories
async function copyRecursive(src, dest) {
  const stats = await stat(src);
  
  if (stats.isDirectory()) {
    await ensureDirectory(dest);
    const entries = await readdir(src, { withFileTypes: true });
    
    for (const entry of entries) {
      const srcPath = join(src, entry.name);
      const destPath = join(dest, entry.name);
      await copyRecursive(srcPath, destPath);
    }
  } else if (stats.isFile()) {
    await ensureDirectory(dirname(dest));
    await copyFile(src, dest);
  }
}

async function copyAssets() {
  try {
    // Ensure client directory exists
    await ensureDirectory(clientDir);
    
    const entries = await readdir(sourceDir, { withFileTypes: true });
    
    // Copy all assets recursively, excluding _worker.js
    for (const entry of entries) {
      const srcPath = join(sourceDir, entry.name);
      const destPath = join(clientDir, entry.name);
      
      // Skip _worker.js and the client directory itself
      if (entry.name === '_worker.js' || entry.name === 'client') {
        continue;
      }
      
      // Copy directories and files recursively
      if (entry.isDirectory()) {
        await copyRecursive(srcPath, destPath);
      } else if (entry.isFile()) {
        await copyFile(srcPath, destPath);
      }
    }
    
    // Make sure _astro directory exists in client folder
    const astroSourceDir = join(sourceDir, '_astro');
    const astroDestDir = join(clientDir, '_astro');
    
    try {
      // Check if _astro directory exists in source
      await stat(astroSourceDir);
      await ensureDirectory(astroDestDir);
      
      // Copy all files from _astro directory
      const astroEntries = await readdir(astroSourceDir, { withFileTypes: true });
      for (const entry of astroEntries) {
        const srcPath = join(astroSourceDir, entry.name);
        const destPath = join(astroDestDir, entry.name);
        
        if (entry.isFile()) {
          await copyFile(srcPath, destPath);
        } else if (entry.isDirectory()) {
          await copyRecursive(srcPath, destPath);
        }
      }
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
      // _astro directory doesn't exist, that's okay
    }

    // Copy SVG theme assets from public to client
    const themeAssets = [
      'kunai-mark.svg',
      'chainsaw-pattern.svg',
      'infinity-symbol.svg'
    ];

    for (const asset of themeAssets) {
      try {
        const srcPath = join(publicDir, asset);
        const destPath = join(clientDir, asset);
        await copyFile(srcPath, destPath);
        console.log(`Copied theme asset: ${asset}`);
      } catch (error) {
        if (error.code !== 'ENOENT') {
          throw error;
        }
        console.warn(`Theme asset not found: ${asset}`);
      }
    }

    // Ensure assets directory exists in client
    const assetsDestDir = join(clientDir, 'assets');
    await ensureDirectory(assetsDestDir);

    // Copy public/assets to client/assets
    const publicAssetsDir = join(publicDir, 'assets');
    try {
      const assetEntries = await readdir(publicAssetsDir, { withFileTypes: true });
      for (const entry of assetEntries) {
        const srcPath = join(publicAssetsDir, entry.name);
        const destPath = join(assetsDestDir, entry.name);
        
        if (entry.isFile()) {
          await copyFile(srcPath, destPath);
          console.log(`Copied asset: ${entry.name}`);
        } else if (entry.isDirectory()) {
          await copyRecursive(srcPath, destPath);
          console.log(`Copied asset directory: ${entry.name}`);
        }
      }
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
      console.warn('Public assets directory not found');
    }
    
  } catch (error) {
    console.error(`Error copying assets: ${error.message}`);
    process.exit(1);
  }
}

// Run the asset copy process
await copyAssets();

console.log('Post-build processing completed successfully!');
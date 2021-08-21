const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'instaclone29', 
  api_key: '995183297881192', 
  api_secret: 'LAgcgWVW1Y0xwRJuIX_FkoV9lXw',
  secure: true
});

function uploadFile(imageName) {
  try {
    return cloudinary.uploader.upload(imageName, (error, result) => {
      if (error) return {error};

      return result;
    });
  } catch (e) {
    return {error: e.message};
  }
}

async function main() {
  const result = await uploadFile('wall12.jpg');
  
  if (result.error) {
    console.log('Error occurred');
  } else {
    console.log(result.secure_url);
  }
}

main();
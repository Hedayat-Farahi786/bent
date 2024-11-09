// File: netlify/functions/get-content.js
const { readFile } = require('fs').promises;
const path = require('path');

exports.handler = async (event) => {
  try {
    // Get the requested file path
    const filePath = event.path.replace('/.netlify/functions/get-content/', '');
    const fullPath = path.join(__dirname, '../../content', filePath);

    // Read the file
    const content = await readFile(fullPath, 'utf8');

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/plain',
      },
      body: content,
    };
  } catch (error) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'Content not found' }),
    };
  }
};
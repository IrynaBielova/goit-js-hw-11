const axios = require('axios').default;
export default async function fetchImages(name, page, per_page) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=27697316-9cc45c303ea5cb91afbaa3e72&q=${name}&page=${page}&per_page=${per_page}&image_type=photo&orientation=horizontal&safesearch=true`,
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
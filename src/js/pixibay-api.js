const KEY = "47124764-867379346a6bcd25da110daf2";
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {  
  const searchParams = new URLSearchParams({
    key: KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json(); 
    });
}

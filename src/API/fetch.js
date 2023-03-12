export function getAllVideos(searchTerm) {
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=10&key=${REACT_APP_API_KEY}`).then((response) => response.json())
}
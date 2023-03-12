export function getAllVideos(searchTerm) {
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=10&key=AIzaSyAiAM4YfR9rlIqsR47JTCsFnnYR4BgqJG4`).then((response) => response.json())
}
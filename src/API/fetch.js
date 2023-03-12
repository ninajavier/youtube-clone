export function getAllVideos(searchTerm) {
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&maxResults=10&key=AIzaSyAx57IX5X24MyPXeqkir7fzwCSlV_wnyBg`).then((response) => response.json())
}
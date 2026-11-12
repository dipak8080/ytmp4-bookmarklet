// YT to MP4 bookmarklet: opens the YouTube video you are watching in https://yt-to-mp4.net/
// Minified version is in README.md and index.html.
(() => {
  const url = location.href;
  const isYouTube = /^https?:\/\/((www|m|music)\.)?(youtube\.com|youtu\.be)\//.test(url);
  const target = "https://yt-to-mp4.net/" + (isYouTube ? "?url=" + encodeURIComponent(url) : "");
  window.open(target, "_blank", "noopener");
})();

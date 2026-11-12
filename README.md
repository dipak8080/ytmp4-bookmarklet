# YTMP4 bookmarklet: YouTube to MP4 in one click

A tiny bookmarklet that sends the YouTube video you are watching straight to [YT to MP4](https://yt-to-mp4.net/), a free YouTube to MP4 converter (360p to 1080p, no sign-up, no app). Click the bookmark on any YouTube page and the converter opens with the video already loaded, so you only pick a quality and save the MP4.

**Install page:** https://dipak8080.github.io/ytmp4-bookmarklet/

## Install

**Desktop (Chrome, Edge, Firefox, Brave, Safari)**

1. Show your bookmarks bar (Ctrl+Shift+B, or Cmd+Shift+B on Mac).
2. Open the [install page](https://dipak8080.github.io/ytmp4-bookmarklet/) and drag the **YT to MP4** button onto the bookmarks bar.

Or create a new bookmark by hand, name it `YT to MP4`, and paste this as the URL:

```
javascript:(()=>{const u=location.href;const y=/^https?:\/\/((www|m|music)\.)?(youtube\.com|youtu\.be)\//.test(u);window.open('https://yt-to-mp4.net/'+(y?'?url='+encodeURIComponent(u):''),'_blank','noopener')})()
```

## Use

1. Open any video or Short on youtube.com.
2. Click the **YT to MP4** bookmark.
3. A new tab opens on yt-to-mp4.net with the video found. Pick 360p, 480p, 720p or 1080p and the MP4 starts downloading.

Clicked on a page that is not YouTube? It just opens the converter so you can paste a link.

## No bookmark? Use the address bar trick

On any YouTube video, replace `youtube.com` in the address bar with `yt-to-mp4.net` and press Enter:

```
https://www.youtube.com/watch?v=VIDEO_ID
https://yt-to-mp4.net/watch?v=VIDEO_ID
```

The same works for Shorts (`/shorts/VIDEO_ID`) and short links (`yt-to-mp4.net/youtu.be/VIDEO_ID`). On a phone this is often the fastest way.

## How it works

The bookmarklet reads the current page URL, checks that it is a YouTube link, and opens `https://yt-to-mp4.net/?url=<that link>` in a new tab. It sends nothing anywhere else, stores nothing and needs no permissions. The readable source is in [bookmarklet.js](bookmarklet.js).

## About the converter

- MP4 (H.264 video, AAC audio) that plays on any phone, PC, TV or editor
- 360p, 480p, 720p and 1080p, with the file size shown before you download
- HD for videos up to 60 minutes, standard quality up to 2 hours
- Works with youtube.com, youtu.be and Shorts links

Please only download videos you own or have permission to save. YT to MP4 is an independent tool and is not affiliated with YouTube or Google.

## License

MIT

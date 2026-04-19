Images are grouped by site section (paths match index.html):

  home/                  — profile photo: 1-profile.jpg
  latest-post/           — home “latest post” hero: 1.png (tokenomics article card on index.html)
  my-book/               — banner: 1-banner.jpeg
  featured-videos/       — optional; the “featured videos” section uses YouTube thumbs in HTML unless you switch to local files
  my-courses/            — “my course” banner photo: 1-presenter.jpg (add 2-presenter.jpg, … if you add more courses)
  talks-keynotes-teaching/ — talks / keynotes / teaching: 1.jpg … 9.jpg (numbered in order).
    Thumbnails use a 16:9 frame (same shape as featured video cards).
    iPhone HEIC files: export as JPEG in Photos first, or run  sips -s format jpeg YourFile.heic --out 3.jpg
    and confirm the output opens in Preview before deleting the .heic.

  timeline-logos/ — optional real logos (SVG/PNG) for timeline if you use img.tl-logo-img again; files kept on disk.
    brainlabs.svg, verse-innovation.png, nabler.png, time-magazine.svg. Default timeline uses CSS text tiles on index.

Replace placeholder PNGs with your own JPG/PNG/WebP; if you change filenames, update the src paths in index.html.

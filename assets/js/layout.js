/**
 * Shared nav + footer. <body data-site-root=""> or data-site-root=".."
 */
(function () {
  var root = document.body.getAttribute("data-site-root") || "";
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  }

  var title = document.title || "Site";
  var homeHref = root ? root + "/index.html" : "index.html";

  var headerHtml =
    '<header class="site-header">' +
    '<nav class="site-nav" aria-label="Primary">' +
    '<a href="' +
    esc(homeHref) +
    '">home</a>' +
    '<a href="' +
    esc(homeHref) +
    '#bio">bio</a>' +
    '<a href="' +
    esc(homeHref) +
    '#my-book">my book</a>' +
    '<a href="' +
    esc(homeHref) +
    '#talks">featured videos</a>' +
    '<a href="' +
    esc(homeHref) +
    '#talks-keynotes-teaching">talks / keynotes / teaching</a>' +
    '<a href="' +
    esc(homeHref) +
    '#writing">writing</a>' +
    '<a href="' +
    esc(homeHref) +
    '#my-course">my course</a>' +
    '<a href="' +
    esc(homeHref) +
    '#publications">publications</a>' +
    '<a href="' +
    esc(homeHref) +
    '#timeline">timeline</a>' +
    '<a href="' +
    esc(homeHref) +
    '#favorite-quotes">favorite quotes</a>' +
    "</nav>" +
    "</header>";

  var year = new Date().getFullYear();
  var footerHtml =
    '<footer class="site-footer">' +
    "<p>" +
    esc(title) +
    " · " +
    year +
    " · Static HTML/CSS/JS.</p>" +
    "</footer>";

  var h = document.getElementById("site-header");
  var f = document.getElementById("site-footer");
  if (h) {
    h.innerHTML = headerHtml;
  }
  if (f) {
    f.innerHTML = footerHtml;
  }

  // Open external links in new tabs.
  try {
    var links = document.querySelectorAll('a[href^="http://"], a[href^="https://"], a[href^="mailto:"]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i];
      var href = a.getAttribute("href") || "";
      if (!href) continue;

      // Keep internal same-page anchors and site-relative links untouched.
      if (href.charAt(0) === "#" || href.indexOf("/") === 0) continue;

      // Only treat absolute URLs + mailto as external.
      if (href.indexOf("http://") === 0 || href.indexOf("https://") === 0 || href.indexOf("mailto:") === 0) {
        a.setAttribute("target", "_blank");
        var rel = (a.getAttribute("rel") || "").toLowerCase();
        if (rel.indexOf("noopener") === -1) rel = (rel ? rel + " " : "") + "noopener";
        if (rel.indexOf("noreferrer") === -1) rel = rel + " noreferrer";
        a.setAttribute("rel", rel.trim());
      }
    }
  } catch (e) {
    // no-op
  }
})();

const version = document.body.getAttribute("data-version");
const badge = document.getElementById("versionBadge");

badge.innerText = "Deployment Version: " + version;

if (version === "v1") {
  badge.style.background = "linear-gradient(90deg,#00c6ff,#0072ff)";
}
if (version === "v2") {
  badge.style.background = "linear-gradient(90deg,#00ff99,#00cc66)";
}
if (version === "v3") {
  badge.style.background = "linear-gradient(90deg,#ff4e50,#f9d423)";
}
const version = document.body.getAttribute("data-version");
const badge = document.getElementById("versionBadge");

badge.innerText = "Deployment Version: " + version;

/* Dynamic Color Switch for Blue-Green Demo */

if (version === "v1") {
  badge.style.background = "linear-gradient(90deg,#00c6ff,#0072ff)";
  badge.style.boxShadow = "0 0 15px rgba(0,114,255,0.6)";
}

if (version === "v2") {
  badge.style.background = "linear-gradient(90deg,#00ff99,#00cc66)";
  badge.style.boxShadow = "0 0 15px rgba(0,255,128,0.6)";
}

if (version === "v3") {
  badge.style.background = "linear-gradient(90deg,#ff4e50,#f9d423)";
  badge.style.boxShadow = "0 0 15px rgba(255,100,0,0.6)";
}

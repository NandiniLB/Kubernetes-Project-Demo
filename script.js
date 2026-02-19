const version = document.body.getAttribute("data-version");
const badge = document.getElementById("versionBadge");

badge.innerText = "Deployment Version: " + version;

/* 🔥 Deployment Strategy Color Map */

const versionStyles = {
  v1: {
    background: "linear-gradient(90deg,#00c6ff,#0072ff)",
    shadow: "0 0 15px rgba(0,114,255,0.6)"
  },
  v2: {
    background: "linear-gradient(90deg,#00ff99,#00cc66)",
    shadow: "0 0 15px rgba(0,255,128,0.6)"
  },
  v3: {
    background: "linear-gradient(90deg,#ff4e50,#f9d423)",
    shadow: "0 0 15px rgba(255,100,0,0.6)"
  }
};

/* Apply Style Dynamically */
if (versionStyles[version]) {
  badge.style.background = versionStyles[version].background;
  badge.style.boxShadow = versionStyles[version].shadow;
}

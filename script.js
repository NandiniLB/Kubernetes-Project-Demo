const versionBadge = document.getElementById("versionBadge");

const version = "v1";  // Change to v2 for blue-green demo

versionBadge.innerText = "Deployment Version: " + version;

if(version === "v2"){
    versionBadge.style.background = "linear-gradient(45deg, #00ff87, #60efff)";
}

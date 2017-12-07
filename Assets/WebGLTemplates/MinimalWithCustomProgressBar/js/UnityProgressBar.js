
function UnityProgress(gameInstance, progress) {

    if(!gameInstance.Module) return;

    var container = document.getElementById("loadingBox");

    bar = container.querySelectorAll("#progressBar")[0];
    loadingInfo = container.querySelectorAll("#loadingInfo")[0];
    bgBar = container.querySelectorAll("#bgBar")[0];

    var length = 200 * Math.min(progress, 1);
    bar.style.width = length + "px";

    if (progress == 1) {
    //   loadingInfo.innerHTML = "Preparing..."

      bgBar.style.display = "none";
      bar.style.display = "none";
      loadingInfo.style.display = "none";
    } 
    else{
        loadingInfo.innerHTML = "Loading...";
    }

}
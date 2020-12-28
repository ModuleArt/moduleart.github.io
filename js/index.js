$(document).ready(function () {
    let apps = ["quick-picture-viewer", "quick-color-picker", "quick-screen-recorder"];
    let setups = ["QuickPictureViewer-Setup.exe", "QuickColorPicker-Setup.msi", "QuickScreenRecorder-Setup.msi"];

    for (let i = 0; i < apps.length; i++) {
        $.getJSON("https://api.github.com/repos/ModuleArt/" + apps[i] + "/releases/latest").done(function(json) {

            // download link
            let downloadLink = document.getElementById(apps[i]);
            downloadLink.href = "https://github.com/ModuleArt/" + apps[i] + "/releases/download/" + json.tag_name + "/" + setups[i];

            // copyright year
            document.getElementById("copyright").innerHTML = "Copyright © " + new Date().getFullYear() + " Module Art";
        });
    }
});

function scrollToId(id) {
	$("body,html").animate({ scrollTop: document.getElementById(id).offsetTop }, 800);
}
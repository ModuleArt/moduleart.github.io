$(document).ready(function () {
    $('.screenshot').magnificPopup({
        type:'image',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });

    GetLatestReleaseInfo();
});  

function GetLatestReleaseInfo() {
    let repositories = [ "quick-picture-viewer", "quick-screen-recorder", "quick-color-picker" ];
    let filenames = [ "QuickPictureViewer", "QuickScreenRecorder", "QuickColorPicker" ];

    $.each(repositories, function(key, value) {
        $.getJSON("https://api.github.com/repos/ModuleArt/" + value + "/tags").done(function (json) {
            let link = document.getElementById(value + "-link");
            link.href = "https://github.com/ModuleArt/" + value + "/releases/download/" + json[0].name + "/" + filenames[key] + "-Setup.msi";
            link.getElementsByClassName("version")[0].innerHTML = json[0].name;
        });
    });
} 
$(document).ready(function () {
    $(".screenshot").magnificPopup({
        type: "image",
        removalDelay: 300,
        mainClass: "mfp-fade",
        gallery: {
            enabled: true,
            tCounter: ""
          },
        image: {
            titleSrc: function(item) {
                let icon = item.el[0].parentNode.getElementsByClassName("icon")[0];
                let title = item.el[0].parentNode.getElementsByClassName("title")[0];
                let links = item.el[0].parentNode.getElementsByClassName("links")[0];

                return icon.outerHTML + title.outerHTML + links.outerHTML;
            }
        }
    });

    GetReposInfo();
});  

function GetReposInfo() {
    let repositories = [ "quick-picture-viewer", "quick-screen-recorder", "quick-color-picker" ];
    let filenames = [ "QuickPictureViewer", "QuickScreenRecorder", "QuickColorPicker" ];

    // download link
    $.each(repositories, function(key, value) {
        $.getJSON("https://api.github.com/repos/ModuleArt/" + value + "/tags").done(function (json) {
            let link = document.getElementById(value).getElementsByClassName("download-windows")[0];
            link.href = "https://github.com/ModuleArt/" + value + "/releases/download/" + json[0].name + "/" + filenames[key] + "-Setup";
            if (key == 0) {
                link.href += ".exe";
            } else {
                link.href += ".msi";
            }
            link.getElementsByClassName("version")[0].innerHTML = json[0].name;
        });
    });

    // repo description
    $.each(repositories, function(key, value) {
        $.getJSON("https://api.github.com/repos/ModuleArt/" + value).done(function (json) {
            let desc = document.getElementById(value).getElementsByClassName("desc")[0];
            desc.innerHTML = json.description;
        });
    });
} 
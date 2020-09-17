$(document).ready(function () {
    updateMasonry();

    $(window).resize(function() {
        updateMasonry();
    });

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

    let converter = new showdown.Converter();

    $.each(repositories, function(key, value) {
        $.getJSON("https://api.github.com/repos/ModuleArt/" + value + "/releases/latest").done(function (json) {
            // latest release info
            let relInfo = document.getElementById(value).getElementsByClassName("release-info")[0];
            relInfo.innerHTML = converter.makeHtml("#" + json.name + "\n" + json.body);
            let relBtn = document.getElementById(value).getElementsByClassName("release-btn")[0];
            relBtn.innerHTML = json.tag_name + " - Release notes";

            // download link
            let link = document.getElementById(value).getElementsByClassName("download-windows")[0];
            link.href = "https://github.com/ModuleArt/" + value + "/releases/download/" + json.tag_name + "/" + filenames[key] + "-Setup";
            if (key == 0) {
                link.href += ".exe";
            } else {
                link.href += ".msi";
            }
            link.getElementsByClassName("version")[0].innerHTML = json.tag_name;
        });

        // repo description
        $.getJSON("https://api.github.com/repos/ModuleArt/" + value).done(function (json) {
            let desc = document.getElementById(value).getElementsByClassName("desc")[0];
            desc.innerHTML = json.description;
        });
    });
} 

function toggleReleaseInfo(btn) {
    btn.classList.toggle("show");
    let relInfo = btn.parentNode.getElementsByClassName("release-info")[0];
    relInfo.classList.toggle("show");
    updateMasonry(btn.parentNode.parentNode);
}

function updateMasonry(section) {
    if (section != null) {
        $(section).masonry();
    } else {
        $(".tile-section").each(function(index, element) {
            $(element).masonry();
        });
    }
}
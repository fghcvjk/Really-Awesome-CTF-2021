function oneElementInit(e,n){if(null!==document.querySelector(e))return new n(document.querySelector(e))}function initElement(e,n){var a=document.getElementsByClassName(e);if(null!==a[0])for(var r=0;r<a.length;r++)n(a[r])}function loadNewPage(e){window.open(e,"_blank")}function registerListener(e,n){document.querySelector(e).addEventListener("click",n)}var appbar=oneElementInit(".mdc-top-app-bar",mdc.topAppBar.MDCTopAppBar);initElement("mdc-button",mdc.ripple.MDCRipple.attachTo),initElement("mdc-icon-button",mdc.ripple.MDCRipple.attachTo),initElement("mdc-card__primary-action",mdc.ripple.MDCRipple.attachTo);var snackbar=oneElementInit(".mdc-snackbar",mdc.snackbar.MDCSnackbar);function displayMDCSnackbar(e,n){snackbar.timeoutMs=n,snackbar.labelText=e,snackbar.closeOnEscape=!0,snackbar.open()}let lpbar='\n<div role="progressbar" class="mdc-linear-progress mdc-linear-progress--indeterminate" aria-label="Uploading Video" aria-valuemin="0" aria-valuemax="1" aria-valuenow="0">\n  <div class="mdc-linear-progress__buffer">\n    <div class="mdc-linear-progress__buffer-bar"></div>\n    <div class="mdc-linear-progress__buffer-dots"></div>\n  </div>\n  <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">\n    <span class="mdc-linear-progress__bar-inner"></span>\n  </div>\n  <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">\n    <span class="mdc-linear-progress__bar-inner"></span>\n  </div>\n</div>';async function uploadContent(e){let n=new FormData,a=e.files[0];n.append("file",a),n.append("source","external");const r=new AbortController;try{document.getElementById("card-actions-first").innerHTML=lpbar,initElement("mdc-linear-progress",mdc.linearProgress.MDCLinearProgress.attachTo),displayMDCSnackbar("Uploading Video, please wait",1e4);await fetch("/upload/content",{method:"POST",body:n,signal:r.signal}).then(e=>e.json()).then(e=>displayMDCSnackbar(e.message,4e3));setTimeout(function(){location=""},5e3)}catch(e){setTimeout(function(){location=""},4e3),displayMDCSnackbar("Upload Failed: "+e,4e3)}}window.mdc.autoInit();
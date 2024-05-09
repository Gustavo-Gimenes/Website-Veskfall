function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}
if (isMobileDevice()) {
    document.getElementById("thelobangbanner").style.height = "170px";
    document.getElementById("voidbanner").style.height = "170px";
} else {
    document.getElementById("thelobangbanner").style.height = "400px";
    document.getElementById("voidbanner").style.height = "400px";
}
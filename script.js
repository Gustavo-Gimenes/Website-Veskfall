function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}
if (isMobileDevice()) {
    document.getElementById("thelobangbanner").style.height = "150px";
    document.getElementById("voidbanner").style.height = "150px";
} else {
    document.getElementById("thelobangbanner").style.height = "300px";
    document.getElementById("voidbanner").style.height = "300px";
}
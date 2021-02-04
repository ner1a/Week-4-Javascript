var root = document.documentElement
var darkSwitch = document.getElementById("dark");

darkSwitch.addEventListener('change', function() {
    if (this.checked) {
        root.style.setProperty('--color-title','#c7c9ff');
        root.style.setProperty('--color-font','#cecece');
        root.style.setProperty('--color-bg-top','#000000');
        root.style.setProperty('--color-bg-bottom','#727272');
        root.style.setProperty('--color-bg-pink','#f063b893');
    } 
    else {
        root.style.setProperty('--color-title','#212353');
        root.style.setProperty('--color-font','#4B5D68');
        root.style.setProperty('--color-bg-top','#F6FAFD');
        root.style.setProperty('--color-bg-bottom','#FFFFFF');
        root.style.setProperty('--color-bg-pink','#f063b826');
    }
});
$body = $("body");
var waiting = {
    Show: function () {
        d = document;
        if (d.getElementById('show-waiting')) return;
        mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement('div'));
        mObj.id = 'show-waiting';
    },
    Hide: function () {
        document.getElementsByTagName("body")[0].removeChild(document.getElementById("show-waiting"));
    }
}
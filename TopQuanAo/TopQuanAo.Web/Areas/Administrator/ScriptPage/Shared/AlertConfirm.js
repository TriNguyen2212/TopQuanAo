/*
    Cách sử dụng alert và confirm thông báo client
    - jAlert('Thông tin đăng nhập không đúng', 'warning', 'Thông báo', ' fa-shield');
    - jAlert('Thêm mới không thành công', 'error', 'Thông báo', ' fa-times');
    - jAlert('Thêm mới thành công', 'success', 'Thông báo', ' fa-check');
    - jConfirm('Xác nhận', 'Bạn có muốn xóa ?',function(isOK){ });
*/

//Alert
var ALERT_TITLE = "Oops!";
var ALERT_BUTTON_TEXT = "Xác nhận";

if (document.getElementById) {
    window.jAlert = function (txt, clas, loaiThongBao, icon, callback) {
        createCustomAlert(txt, clas, loaiThongBao, icon, callback);
    }
}

function createCustomAlert(txt, clas, loaiThongBao, icon, callback) {
    d = document;
    if (d.getElementById("modalContainer")) return;
    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    //mObj.style.height = d.documentElement.scrollHeight + "px";
    mObj.className = "lockscreenCustom";

    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if (d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    //alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px";
    //alertObj.style.visiblity = "visible";
    alertObj.className = "SmallBox animated fadeInRight fast " + clas;

    imageObj = alertObj.appendChild(d.createElement("div"));
    imageObj.id = "imageBox"
    imageObj.className = "foto";

    i = imageObj.appendChild(d.createElement("i"));
    i.className = "fa fa- " + icon + " swing animated";

    titleObj = alertObj.appendChild(d.createElement("div"));
    titleObj.className = "textoFoto";

    span = titleObj.appendChild(d.createElement("span"));
    span.appendChild(d.createTextNode(loaiThongBao));
    p = titleObj.appendChild(d.createElement("p"));
    p.style.maxHeight = 300 + "px";
    p.style.overflow = "auto";
    p.innerHTML = txt;

    p1 = titleObj.appendChild(d.createElement("p"));
    p1.className = "text-align-right";

    btn = p1.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.className = "btn btn-primary btn-sm";
    btn.onclick = function () {
        removeCustomAlert();
        if (callback != undefined)
            callback(callback);
        return false;
    }

    alertObj.style.display = "block";
}
function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}

//Confirm
function jConfirm(caption, message, callback) {
    caption = caption || 'Confirmation'
    d = document;
    if (d.getElementById("modalContainer")) return;
    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.className = "lockscreenCustom";
    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";

    if (d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.className = "SmallBox animated fadeInRight fast msgwarning";

    imageObj = alertObj.appendChild(d.createElement("div"));
    imageObj.id = "imageBox"
    imageObj.className = "foto";

    i = imageObj.appendChild(d.createElement("i"));
    i.className = "fa fa-question-circle swing animated";

    titleObj = alertObj.appendChild(d.createElement("div"));
    titleObj.className = "textoFoto";

    span = titleObj.appendChild(d.createElement("span"));
    span.appendChild(d.createTextNode(caption));
    p = titleObj.appendChild(d.createElement("p"));
    p.style.maxHeight = 300 + "px";
    p.style.overflow = "auto";
    p.innerHTML = message;

    p1 = titleObj.appendChild(d.createElement("p"));
    p1.className = "text-align-right";

    btn = p1.appendChild(d.createElement("a"));
    btn.id = "agreeBtn";
    btn.appendChild(d.createTextNode("Đồng ý"));
    //btn.href = "#";
    btn.focus();
    btn.style.marginRight = "10px";
    btn.className = "btn btn-primary btn-sm";
    btn.onclick = function () {
        removeCustomAlert();
        //console.log('Đồng ý');
        callback(true);
    }
    btn = p1.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode("Hủy"));
    //btn.href = "#";
    btn.focus();
    btn.className = "btn btn-primary btn-sm";
    btn.onclick = function () {
        removeCustomAlert();
        callback(false);
    }
    alertObj.style.display = "block";
}
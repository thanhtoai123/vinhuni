function showTime() {
    var date = new Date(); //Lấy ngày tháng hiện tại
    var h = date.getHours(); //Giờ 0 - 23
    var m = date.getMinutes(); //Phút 0 - 59
    var s = date.getSeconds(); //Giây 0 - 59
    var d = date.getDate();
    var M = date.getMonth() + 1;
    var y = date.getFullYear();

    //lấy thứ
    const weekday = new Array(7);
    weekday[0] = "Chủ nhật";
    weekday[1] = "Thứ hai";
    weekday[2] = "Thứ ba";
    weekday[3] = "Thứ tư";
    weekday[4] = "Thứ năm";
    weekday[5] = "Thứ sáu";
    weekday[6] = "Thứ bảy";

    let day = weekday[date.getDay()];
    //------

    d = d < 10 ? "0" + d : d;
    M = M < 10 ? "0" + M : M;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var cdate = day + ", ngày " + d + " tháng " + M + " năm " + y;
    var datetime = cdate + " [" + h + ":" + m + ":" + s + " (GMT+7)]";
    document.getElementById("currentDate").innerHTML = datetime;
    setTimeout(showTime, 1000);
}
showTime();
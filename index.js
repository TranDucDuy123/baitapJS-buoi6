function chooseLab(id) {
    const lab = document.getElementById(id);
    lab.style.background = "var(--color-2)";
    lab.style.color = "var(--color-4)";
    lab.style.borderBottom = "var(--color-3) solid 5px";
}
function unchooseLab(id) {
    const lab = document.getElementById(id);
    lab.style.background = "var(--color-1)";
    lab.style.color = "var(--color-2)";
    lab.style.border = "none";
}
function resetLayout() {
    document.getElementById(`layout-1`).style.display = "none";
    document.getElementById(`layout-2`).style.display = "none";
    document.getElementById(`layout-3`).style.display = "none";
    document.getElementById(`layout-4`).style.display = "none";
}
function select(id) {
    unchooseLab("lab-1");
    unchooseLab("lab-2");
    unchooseLab("lab-3");
    unchooseLab("lab-4");
    chooseLab(id);
}
function choose1() {
    select("lab-1");
    resetLayout();
    document.getElementById(`layout-1`).style.display = "flex";
}
function choose2() {
    select("lab-2");
    resetLayout();
    document.getElementById(`layout-2`).style.display = "flex";
}
function choose3() {
    select("lab-3");
    resetLayout();
    document.getElementById(`layout-3`).style.display = "flex";
}
function choose4() {
    select("lab-4");
    resetLayout();
    document.getElementById(`layout-4`).style.display = "flex";
}


/*
ex1
intput: 
    + không có input
algorithm:
    + tạo 1 biến tong=0
    + tạo funtion timN(i=1;tong<=10000;i++) 
    + tức thực hiện tong+=i cho tới khi tổng >10000 thì lây i hiện tại là n 
output: 
    + in ra màn hình i hiện tại là biến n cần tìm
*/
var tong = 0;
function timN() {
    for (var i = 1; tong <= 10000; i++) {
        tong += i;
    }
    console.log(i);
    console.log(`tong` + tong);
    document.getElementById(`output-1`).innerHTML = `n = ` + i;
    document.getElementById(`output-01`).style.display = "flex";
    return tong = 0;
}
/*
ex2
input:
    + nhập 2 số nguyên dương x, n
algorithm:
    +
output:
*/
function luyThua(x, n) {
    return Math.pow(x, n);
}
function tinhSn(x, n) {
    var S = 0;
    for (var i = 1; i <= n; i++) {
        S += luyThua(x, i);
    }
    return S;
}
function ex2() {
    const xEL = document.getElementById('input-x').value * 1;
    const nEL = document.getElementById('input-n').value * 1;
    document.getElementById(`output-02`).style.display = "flex";
    document.getElementById(`output-2`).innerHTML = "S(n)=" + tinhSn(xEL, nEL);
}

/*
ex3
input: 
    + Nhập vào n
algorithm:
    + vòng lặp for điều kiện dừng là i > n
    + tong nhân i khi vòng lặp thực hiện
output:
    + in ra kết quả giai thừa của n là tong
*/
function ex3() {
    var nEL = document.getElementById(`input-3`).value * 1;
    var tong = 1;
    for (var i = 1; i <= nEL; i++) {
        tong *= i;
    }
    console.log(tong);
    document.getElementById(`output-03`).style.display = "flex";
    document.getElementById(`output-3`).innerHTML = nEL + "! = " + tong;
}
/*
ex4
input:
    + div ở vị trí chẵn lẻ lần lượt là đỏ xanh
algorithm:
    + setDivChan() tạo 1 div chẵn và trả về thẻ div đó
    + setDivLe() tạo 1 div lẻ và trả về thẻ div đó
    + biến i = 0
    + chạy vòng lặp while(i<10)
     thực hiện tăng i lên 1
     kiếm tra i nếu lẻ thì tạo div lẻ với tham sô i tương ứng
     kiếm tra i nếu chẵn thì tạo div chẵn với tham sô i tương ứng
*/
function setDivChan(i) {
    // tao new div
    const newDiv = document.createElement(`div`);
    newDiv.className = "div-item-chan";

    const setText = document.createTextNode("Div chẵn " + i);
    newDiv.appendChild(setText);
    return newDiv;
}
function setDivLe(i) {
    const newDiv = document.createElement(`div`);
    newDiv.className = "div-item-le";
    // set text div
    const setText = document.createTextNode("Div lẻ " + i);
    newDiv.appendChild(setText);
    return newDiv;
}
var i = 0;
function addDiv() {
    const listDiv = document.getElementById('output-4');
    while (i < 10) {
        i++;
        if (Math.floor(i % 2 == 0) && i <= 10) {
            listDiv.insertBefore(setDivChan(i), null);
        } else
            listDiv.insertBefore(setDivLe(i), null);
    }

}

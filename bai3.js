//Cau 1
function sapXep() {
    
    var a=document.getElementById('soThuNhat').value*1;
    var b=document.getElementById('soThuHai').value*1;
    var c=document.getElementById('soThuBa').value*1;
  var  soThuNhat= 0;
  var  soThuHai=0;
  var soThuBa=0;
    if (a<b && b<c) {
        //a<b<C
        soThuNhat=a;
        soThuHai=b;
        soThuBa=c;
    }
    if (a<c && c<b) {
        //a<c<b
        soThuNhat=a;
        soThuHai=c;
        soThuBa=b;
    }
    if (b<a && a<c) {
        //b<a<c
        soThuNhat=b;
        soThuHai=a;
        soThuBa=c;
    }
    if (b<c && c<a) {
        //b<c<a
        soThuNhat=b;
        soThuHai=c;
        soThuBa=a;
    }
    if (c<b && b<a) {
        //c<b<a
        soThuNhat=c;
        soThuHai=b;
        soThuBa=a;
    }
    if (c<a && a<b) {
        //c<a<b
        soThuNhat=c;
        soThuHai=a;
        soThuBa=b;
    }
    document.getElementById('ketQua1').innerHTML=`<h2>${soThuNhat}<${soThuHai}<${soThuBa}</h2>`;
} 
//Cau 2
document.getElementById("sayHi").onclick=function() {
    var thanhVien=document.getElementById("thanhVien").value;
    var ketQua= "";
    var bo=document.getElementById("bo").value;
    var me=document.getElementById("me").value;
    var anhTrai=document.getElementById("anhTrai").value;
    var emGai=document.getElementById("emGai").value; 
if (thanhVien==bo) {
    ketQua="Chào bố";
}
if (thanhVien==me) {
    ketQua="Chào mẹ";
}
if (thanhVien==anhTrai) {
    ketQua="Chào anh trai";
}
if (thanhVien==emGai) {
    ketQua="Chào em gái";
}
document.getElementById("ketQua2").innerHTML=ketQua;
}
//Cau 3
function Dem() {
var soThuNhat=document.getElementById("c3SoThuNhat").value*1;
var soThuHai=document.getElementById("c3SoThuHai").value*1;
var soThuBa=document.getElementById("c3SoThuBa").value*1;
var count=0;
if (soThuNhat%2==0) {
    count+=1;
}
if (soThuHai%2==0) {
    count+=1;
}
if (soThuBa%2==0) {
    count+=1;
}
document.getElementById("ketQua3").innerHTML=`<h2>Số số chẵn là: ${count} <br> Số số lẻ là: ${3-count}</h2>`;
}
//Cau 4
function duDoan() {
    var canhThuNhat=document.getElementById("canhThuNhat").value*1;
    var canhThuHai=document.getElementById("canhThuHai").value*1;
    var canhThuBa=document.getElementById("canhThuBa").value*1;
    var ketQua= "";
if (canhThuNhat==canhThuHai!=canhThuBa || canhThuHai==canhThuBa!=canhThuNhat || canhThuNhat==canhThuBa!=canhThuHai) {
    ketQua='Tam giac can';
}
if (canhThuNhat==canhThuHai && canhThuNhat==canhThuBa) {
    ketQua='Tam giac deu';
}

if(canhThuNhat!=canhThuHai && canhThuHai!=canhThuBa && canhThuBa!=canhThuNhat) {
    if (canhThuNhat*canhThuNhat==canhThuHai*canhThuHai+canhThuBa*canhThuBa || canhThuHai*canhThuHai==canhThuNhat*canhThuNhat+canhThuBa*canhThuBa ||canhThuBa*canhThuBa==canhThuNhat*canhThuNhat+canhThuHai*canhThuHai ) {
        ketQua='Tam giac vuong';
    } 
   else{ketQua='Tam giac thuong'}
}
document.getElementById("ketQua4").innerHTML=ketQua;
}
//Cau 5
function ngayTruoc() {
    var ngay=document.getElementById("ngay").value*1;
    var thang=document.getElementById("thang").value*1;
    var nam=document.getElementById("nam").value*1;
    if (thang==2 && ngay>28) {
        alert("Nhap sai");
    }
    else if (ngay>31 && thang==1 ||ngay>=1 && thang==3||ngay>31 && thang==5 ||ngay>31 && thang==7 ||ngay>31 && thang==8 ||ngay>31 && thang==10 ||ngay>31 && thang==12   ) {
        alert("Nhap sai");
    } 
    else if (ngay>30 && thang==4 ||ngay>30 && thang==6 ||ngay>30 && thang==9 ||ngay>30 && thang==11   ) {
        alert("Nhap sai");
    } 
    else if (ngay==1 && thang==1) {
        nam=nam-1;
        ngay=31;
        thang=12;
    }
    else if (ngay==1 && thang==2 ||ngay==1 && thang==4 ||ngay==1 &&thang==6 ||ngay==1 &&thang==8 ||ngay==1 && thang==9 || ngay==1 &&thang==11) {
        ngay=31;
        thang=thang-1; 
    }
    else if (ngay==1 && thang==3) {
        ngay=28;
        thang=thang-1;
    }
    else if (ngay==1 && thang==5 ||ngay==1 && thang==7 ||ngay==1 && thang==8 || ngay==1 && thang==10 || ngay==1 && thang==12) {
        ngay=30;
        thang=thang-1;
    }
    else {
        ngay=ngay-1;
    }
    document.getElementById("ketQua5").innerHTML=`<h2>ngay ${ngay} thang ${thang} nam ${nam}</h2>`; }
function ngaySau() {
    var ngay=document.getElementById("ngay").value*1;
    var thang=document.getElementById("thang").value*1;
    var nam=document.getElementById("nam").value*1;
    if (thang==2 && ngay>28) {
        alert("Nhap sai");
    }
    else if (ngay>31 && thang==1 ||ngay>31 && thang==3||ngay>31 && thang==5 ||ngay>31 && thang==7 ||ngay>31 && thang==8 ||ngay>31 && thang==10 ||ngay>31 && thang==12   ) {
        alert("Nhap sai");
    } 
    else if (ngay>30 && thang==4 ||ngay>30 && thang==6 ||ngay>30 && thang==9 ||ngay>30 && thang==11   ) {
        alert("Nhap sai");
    }
    else if(ngay==31 && thang==1 ||ngay==28 && thang==2||ngay==31 && thang==3||ngay==30 && thang==4||ngay==31 && thang==5||ngay==30 && thang==6||ngay==31 && thang==1||ngay==31 && thang==7||ngay==31 && thang==8||ngay==30 && thang==9|| ngay==31 && thang==10||ngay==30 && thang==11) {
        ngay=1;
        thang=thang+1;
    }
    else if(ngay==31 && thang==12){
        ngay=1;
        thang=1;
        nam=nam+1;
    }
    else{
        ngay=ngay+1;
    }
    document.getElementById("ketQua5").innerHTML=`<h2>ngay ${ngay} thang ${thang} nam ${nam}</h2>`; 
}
//Bài 6
function tinhNgay() {
    var thang=document.getElementById("bt6_thang").value*1;
    var nam=document.getElementById("bt6_nam").value*1;
    var ngay= null;
    if (nam%4==0 && thang==2) {
        ngay=29;
    }
    if (thang==1 || thang==3 || thang==5 || thang==7 || thang==8 || thang==10 || thang==12) {
        ngay=31;
    }
    if (thang==4 || thang==6 || thang==9 || thang==11) {
        ngay=30;
    }
    if (nam%4!=0 && thang==2) {
        ngay=28;
    }
    document.getElementById("ketQua6").innerHTML=`<h2>Tháng ${thang} năm ${nam} có ${ngay} ngày</h2>`
}

//Bai 7
function docSo() {
    var soBaChuSo=document.getElementById("soBaChuSo").value*1;
    var hangTram=Math.floor(soBaChuSo/100);
    var hangChuc=Math.floor(soBaChuSo/10)%10;
    var hangDonVi=soBaChuSo-(hangTram*100+hangChuc*10);
    switch (hangTram) {
        case 0:{
            hangTram= "Không";
        }  break;
        case 1:{
            hangTram= "Một";
        }  break;
        case 2:{
            hangTram= "Hai";
        }  break;
        case 3:{
            hangTram= "Ba";
        }  break;
        case 4:{
            hangTram= "Bốn";
        }  break;
        case 5:{
            hangTram= "Năm";
        }  break;
        case 6:{
            hangTram= "Sáu";
        }  break;
        case 7:{
            hangTram= "Bảy";
        }  break;
        case 8:{
            hangTram= "Tám";
        }  break;
        case 9:{
            hangTram= "Chín";
        }  break;                  
        default:
            break;
    }
    switch (hangChuc) {
        case 0:{
            hangChuc= "Linh";
        }  break;
        case 1:{
            hangChuc= "Một";
        }  break;
        case 2:{
            hangChuc= "Hai";
        }  break;
        case 3:{
            hangChuc= "Ba";
        }  break;
        case 4:{
            hangChuc= "Bốn";
        }  break;
        case 5:{
            hangChuc= "Năm";
        }  break;
        case 6:{
            hangChuc= "Sáu";
        }  break;
        case 7:{
            hangChuc= "Bảy";
        }  break;
        case 8:{
            hangChuc= "Tám";
        }  break;
        case 9:{
            hangChuc= "Chín";
        }  break;                  
        default:
            break;
    }
    switch (hangDonVi) {
        case 0:{
            hangDonVi= "Không";
            
        }  break;
        case 1:{
            hangDonVi= "Mốt";
        }  break;
        case 2:{
            hangDonVi= "Hai";
        }  break;
        case 3:{
            hangDonVi= "Ba";
        }  break;
        case 4:{
            hangDonVi= "Bốn";
        }  break;
        case 5:{
            hangDonVi= "Năm";
        }  break;
        case 6:{
            hangDonVi= "Sáu";
        }  break;
        case 7:{
            hangDonVi= "Bảy";
        }  break;
        case 8:{
            hangDonVi= "Tám";
        }  break;
        case 9:{
            hangDonVi= "Chín";
        }  break;                  
        default:
            break;
    }
    document.getElementById("ketQua7").innerHTML=`<h2>${hangTram} Trăm ${hangChuc}  ${hangDonVi}</h2>`
}
//Bai 8
function tinhToaDo() {
    var toaDoX1=document.getElementById("toaDoX1").value*1;
    var toaDoY1=document.getElementById("toaDoY1").value*1;
    var toaDoX2=document.getElementById("toaDoX2").value*1;
    var toaDoY2=document.getElementById("toaDoY2").value*1;
    var toaDoX3=document.getElementById("toaDoX3").value*1;
    var toaDoY3=document.getElementById("toaDoY3").value*1;
    var toaDoX4=document.getElementById("toaDoX4").value*1;
    var toaDoY4=document.getElementById("toaDoY4").value*1;
    var khoangCach1= Math.sqrt((Math.pow(toaDoX4-toaDoX1,2))+(Math.pow(toaDoY4-toaDoY1,2)));
    var khoangCach2= Math.sqrt((Math.pow(toaDoX4-toaDoX2,2))+(Math.pow(toaDoY4-toaDoY2,2)));
    var khoangCach3= Math.sqrt((Math.pow(toaDoX4-toaDoX3,2))+(Math.pow(toaDoY4-toaDoY3,2)));
    var ketQua= "";
    if (khoangCach1>khoangCach2 && khoangCach1>khoangCach3) {
        ketQua= "Sinh viên 1 xa trường nhất"
    }
    else if (khoangCach2>khoangCach1 && khoangCach2>khoangCach3) {
        ketQua= "Sinh viên 2 xa trường nhất"
    }
    else if (khoangCach3>khoangCach2 && khoangCach3>khoangCach1) {
        ketQua= "Sinh viên 3 xa trường nhất"
    }
    document.getElementById("ketQua8").innerHTML=ketQua
}

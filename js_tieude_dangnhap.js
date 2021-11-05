
function goithongtin(){
    if(textusr.value == "")
        {
            thongbao.innerText="Bạn chưa đăng nhập!";
            textusr.focus();
            return;
        }
            else if(textpwd.value == "")
        {
            thongbao.innerText="Vui lòng nhập mật khẩu!";
            textpwd.focus();
            return;
        }
            if((textusr.value=="Chí Hiếu" && textpwd.value=="123456") || (textusr.value=="admin" && textpwd.value=="admin"))
               thongbao.innerHTML="Xin chào <b>"+textusr.value+"</b>!"; 
           else thongbao.innerText="Sai thông tin đăng nhập, vui lòng nhập lại!"
        
}
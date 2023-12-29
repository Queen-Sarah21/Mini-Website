function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  function setCookieM(cname, cvalue, exmins) {
    var d = new Date();
    d.setTime(d.getTime() + (exmins*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  }

 function checkCookie() {
    var dd1 = Date();
    setCookieM("cdate1", dd1, 1);
    alert("Cookie cprod1 created good for 1 min.");

    var cc1 = "", cc2 = "" ;
    var qty1 = document.getElementById("Qty1").value;
    var qty2 = document.getElementById("Qty2").value;
    if(parseInt(qty1)>0 && parseInt(qty1)<100){
       var product = document.getElementById("Name1").innerHTML;
          if (product != "" && product != null) {
            cc1 = cc1 + product + "|";
          }     

       var price = document.getElementById("Price1").innerHTML;
          if (price != "" && price != null) {
            cc1 = cc1 + price + "|";
          }

       cc1 = cc1 + qty1 + "|";
       var imgName = document.getElementById("Img1").src;
        if (imgName != "" && imgName != null) {
          cc1 = cc1 + imgName;}
   
    setCookie("cprod1", cc1, 5);
 		alert("Cookie for product 1 created \n" +
                "Cookie(s) :"+document.cookie);
			//alert("Cookie(s) :"+document.cookie);
			//document.location.href("./Cookie2.html");
			//windows.location.href("./Cookie2.html");
		//window.open("Cookie2.html", "_self",true);
    }
  /*  else{
		//deleteCookie();
		alert("Enter a value for quantity (1-100).");
        document.getElementById("qty1").focus();
	}
    */
    if(parseInt(qty2)>0 && parseInt(qty2)<100){
        var product = document.getElementById("Name2").innerHTML;
           if (product != "" && product != null) {
             cc2 = cc2 + product + "|";
              //setCookie("cprod1", product, 5);
              //alert("Cookie 1 cc1 = "+cc1);
           }     
 
        var price = document.getElementById("Price2").innerHTML;
           if (price != "" && price != null) {
             cc2 = cc2 + price + "|";
              //setCookie("cprice1", price, 5);
              //alert("Cookie 2 cc1 = "+cc1);
           }
 
         cc2 = cc2 + qty2 + "|";

         var imgName = document.getElementById("Img2").src;
          if (imgName != "" && imgName != null) {
            cc2 = cc2 + imgName;}

         setCookie("cprod2", cc2, 5);
          alert("Cookie for product 2 created \n" +
                 "Cookie(s) :"+document.cookie);
             //alert("Cookie(s) :"+document.cookie);
             //document.location.href("./Cookie2.html");
             //windows.location.href("./Cookie2.html");
         //window.open("Cookie2.html", "_self",true);
     }
     /*
     else{
         //deleteCookie();
         alert("Enter a value for quantity (1-100).");
         document.getElementById("qty1").focus();
     }
     */
     if(qty1 > 0 || qty2 > 0){
        window.open("CookieShoe2.html", "_self",true);
     }  
      else{
		//deleteCookie();
		alert("Enter a value for quantity (1-100) for one or more products.");
        document.getElementById("qty1").focus();
	}

}

function checkCookie2() {
    var dd1 = getCookie("cdate1");
     if (product1 != ""){
      document.getElementById("date").innerHTML = dd1.toString();
    }
 
    var cc1Array = getCookie("cprod1").split("|");
    
    if(cc1Array.length > 0){
       var product1 = cc1Array[0];  //getCookie("cprod1");
       if (product1 != ""){
         document.getElementById("Name1").innerHTML = product1;
       }
       else{alert("no prod name");}
 
       var price1 = cc1Array[1];  //getCookie("cprice1");
       if (price1 != "") {
         document.getElementById("Price1").innerHTML = price1;
       }
       else{alert("no price");}

       var qty1 = cc1Array[2];  //getCookie("cqty1");
       if (qty1 != "") {
         document.getElementById("Qty1").innerHTML = qty1;
         document.getElementById("Total1").innerHTML = (qty1*price1).toFixed(2);
       }
       else{alert("no 1st qty");}

       var img1 = cc1Array[3];  //getCookie("c");
       if (img1 != "") {
         document.getElementById("Img1").src = img1;
       }
       else{alert("no 1st image");}

     //alert("Cookie(s) :"+document.cookie);
    }

    var cc2Array = getCookie("cprod2").split("|");
    
    if(cc2Array.length > 0){
       var product2 = cc2Array[0];  //getCookie("cprod1");
       if (product2 != ""){
         document.getElementById("Name2").innerHTML = product2;
       }
       else{alert("no prod name");}
 
       var price2 = cc2Array[1];  //getCookie("cprice1");
       if (price2 != "") {
         document.getElementById("Price2").innerHTML = price2;
       }
       else{alert("no price");}

       var qty2 = cc2Array[2];  //getCookie("cqty1");
       if (qty2 != "") {
         document.getElementById("Qty2").innerHTML = qty2;
         document.getElementById("Total2").innerHTML = (qty2*price2).toFixed(2);
       }
       else{alert("no 2nd qty");}

       var img1 = cc2Array[3];  //getCookie("c");
       if (img1 != "") {
         document.getElementById("Img2").src = img1;
       }
       else{alert("no 2nd image");}

     //alert("Cookie(s) :"+document.cookie);
    }
 }

function deleteCookie() {
    var date1 = getCookie("cdate1");

    if (date1 == "") {
        alert("Cookie date does't exist");
    } else {
        if (date1 != "" && date1 != null) {
            setCookie("cdate1", "", -1);
            alert("Cookie date deleted.");
        }
    }

    var cc1Value =  getCookie("cprod1");
    if (cc1Value == "") {
        alert("Cookie product 1 does't exist");
    } else {
        if (cc1Value != null) {
            setCookie("cprod1", "", -1);
            alert("Cookie for product 1 deleted.");
 //           window.open("Cookie1.html", "_self",true);
        }
    }

    var cc2Value =  getCookie("cprod2");
    if (cc2Value == "") {
        alert("Cookie product 2 does't exist");
    } else {
        if (cc2Value != null) {
            setCookie("cprod2", "", -1);
            alert("Cookie for product 2 deleted.");
        }
    }
    window.open("CookieShoe1.html", "_self",true);
}
    /*
    var product1 = getCookie("cprod1");
    var price1 = getCookie("cprice1");
    var qty1 = getCookie("cqty1");
   
     if (product1 == "") {
         alert("Cookie Prod1 does't exist");
     } else {
         if (product1 != "" && product1 != null) {
             setCookie("cprod1", "", -1);
             alert("Cookie Prod1 deleted.");
         }
     }
     if (price1 == "") {
         alert("Cookie price1 does't exist");
     } else {
         if (price1 != "" && price1 != null) {
             setCookie("cprice1", "", -1);
             alert("Cookie price1 deleted.");
         }
     }
     if (qty1 == "") {
         alert("Cookie qty1 does't exist");
     } else {
         if (qty1 != "" && qty1 != null) {
             setCookie("cqty1", "", -1);
             alert("Cookie qty1 deleted.");
         }
     }
     */
 
 
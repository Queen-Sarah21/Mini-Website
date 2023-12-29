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

  //cookie1
 function checkCookie() {
    var dd1 = Date();
    setCookieM("date1", dd1, 1);
    //alert("Cookie date created good for 1 min.");

    var cc1 = "";//start building the cookie multi values for product 1
    var qty = document.getElementById("Qty1").value;
    if(parseInt(qty)>0 && parseInt(qty)<100){
       var product = document.getElementById("Name1").innerHTML;
          if (product != "" && product != null) {
            cc1 = cc1 + dd1 + "|" + product + "|";
             //setCookie("cprod1", product, 5);
			 //alert("Cookie 1 cc1 = "+cc1);
          }     

       var price = document.getElementById("Price1").innerHTML;
          if (price != "" && price != null) {
            cc1 = cc1 + price + "|";
             //setCookie("cprice1", price, 5);
			 //alert("Cookie 2 cc1 = "+cc1);
          }

        cc1 = cc1 + qty + "|";

        var cid1 = document.getElementById("Id1").innerHTML;
        var img1 = document.getElementById("Img1").src;
        cc1 = cc1 + cid1 + "|" + img1;
   
        setCookieM("cproduct1", cc1, 5);//create cookie for 5 min.
 		alert("Cookie for product 1 created \n" +
                "Cookie(s) :"+document.cookie);
		window.open("CookieShoe2.html", "_self",true);
    }
    else{
		alert("Enter a value for quantity (1-100).");
	}
}

//P2
function checkCookie3() {
  var dd2 = Date();
    //setCookieM("cdate1", dd1, 1);
  var cc2 = "";//start building the cookie multi values for product 1
  var qty2 = document.getElementById("Qty2").value;
  if(parseInt(qty2)>0 && parseInt(qty2)<100){
     var product2 = document.getElementById("Name2").innerHTML;
        if (product2 != "" && product2 != null) {
          cc2 = cc2 + dd2 + "|" + product2 + "|";
        }     

     var price2 = document.getElementById("Price2").innerHTML;
        if (price2 != "" && price2 != null) {
          cc2 = cc2 + price2 + "|";
        }

      cc2 = cc2 + qty2 + "|";

      var cid2 = document.getElementById("Id2").innerHTML;
      var img2 = document.getElementById("Img2").src;
      cc2 = cc2 + cid2 + "|" + img2;
 
      setCookieM("cproduct2", cc2, 5);//create cookie for 5 min.
   alert("Cookie for product 2 created \n" +
              "Cookie(s) :"+document.cookie);
  window.open("CookieShoe2.html", "_self",true);
  }
  else{
  alert("Enter a value for quantity (1-100).");
}
}

//P1
function checkCookie2() {
  var cc1 = getCookie("cproduct1");
  var cc1Array = cc1.split("|");
  document.getElementById("date").innerHTML = cc1Array[0].toString();
  document.getElementById("Name1").innerHTML = cc1Array[1];
  document.getElementById("Price1").innerHTML = cc1Array[2];
  document.getElementById("Qty1").innerHTML = cc1Array[3];
  document.getElementById("Total1").innerHTML = (cc1Array[3]*cc1Array[2]).toFixed(2);
  document.getElementById("Id1").innerHTML = cc1Array[4];
  document.getElementById("Img1").src = cc1Array[5];
 /*   var dd1 = getCookie("cdate1");
     if (dd1 != ""){
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
       else{alert("no qty");}
       //alert("Cookie(s) :"+document.cookie);
      }
      */
    }

  //P2  
    function checkCookie4() {
    var cc2 = getCookie("cproduct2");
    var cc2Array = cc2.split("|");
    document.getElementById("date").innerHTML = cc2Array[0].toString();
    document.getElementById("Name2").innerHTML = cc2Array[1];
    document.getElementById("Price2").innerHTML = cc2Array[2];
    document.getElementById("Qty2").innerHTML = cc2Array[3];
    document.getElementById("Total2").innerHTML = (cc2Array[3]*cc2Array[2]).toFixed(2);
    document.getElementById("Id2").innerHTML = cc2Array[4];
    document.getElementById("Img2").src = cc2Array[5];
    }

function deleteCookie() {
  var date1 = getCookie("date1");

  if (date1 == "") {
      alert("Cookie date does't exist");
  } else {
      if (date1 != "" && date1 != null) {
          setCookie("date1", "", -1);
          alert("Cookie date deleted.");
      }
  }

    var cc1Value =  getCookie("cproduct1");
    if (cc1Value == "") {
        alert("Cookie product 1 does't exist");
    } else {
        if (cc1Value != null) {
            setCookieM("cproduct1", "", -1);
            alert("Cookie for product 1 deleted.");
            window.open("CookieShoe1.html", "_self",true);
        }
    }
}
 
//DELETE COOKIE P2

function deleteCookie2() {
  var cc2Value =  getCookie("cproduct2");
  if (cc2Value == "") {
      alert("Cookie product 2 does't exist");
  } else {
      if (cc2Value != null) {
          setCookieM("cproduct2", "", -1);
          alert("Cookie for product 2 deleted.");
          window.open("CookieShoe1.html", "_self",true);
      }
  }
}

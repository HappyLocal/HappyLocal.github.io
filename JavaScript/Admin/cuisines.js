var queryObjectId;function onPageLoad(){var e=document.getElementById("myTable");e.innerHTML="",e=document.getElementById("myTable");var t=Backendless.DataQueryBuilder.create();return t.setSortBy(["Name"]),t.setPageSize(100).setOffset(0),Backendless.Data.of("Cuisine").find(t).then(function(t){var s,a=t.length;for(s=0;s<a;s++)addRow(e,t[s].Name,"edit","delete_forever",t[s].objectId,"update","delete",t[s].objectId,t[s].objectId)}).catch(function(e){toastNotification(e.message,"toast-error","error-symbol.png","red lighten-1","Infinity","#ce5548")})}function addCell(e,t,s){var a=document.createElement("td");a.id=s,a.innerHTML=t,e.appendChild(a)}function addCellRight(e,t,s,a){var i=document.createElement("td");i.classList.add("right-align");var n=document.createElement("BUTTON");n.classList.add("waves-effect"),n.classList.add("waves-light"),n.classList.add("btn-small"),n.classList.add("material-icons"),n.innerHTML=t,"delete_forever"==n.innerHTML?(n.classList.add("red"),n.classList.add("lighten-2")):(n.classList.add("green"),n.classList.add("lighten-2")),n.id=s,n.name=a,i.appendChild(n),e.appendChild(i)}function addRow(e,t,s,a,i,n,o,c,r){var l=document.createElement("tr");l.id=i,addCell(l,t,i),addCellRight(l,s,n,c),addCellRight(l,a,o,r),e.appendChild(l)}function addCuisine(){if(M.Toast.dismissAll(),!(""==(e=document.getElementById("add_cuisine").value.trim())||e.length>20||""!=e&&!e.match(/^[A-Za-z ]+$/))){$("#createModal").modal("close");var e={Name:e};return Backendless.Data.of("Cuisine").save(e).then(()=>onPageLoad()).then(()=>{toastNotification("Cuisine has been created successfully!","toast-tick","white-check-mark.png","light-blue darken-2",4e3,"#0277bd"),cuisineForm=document.querySelector("#createCuisine-form"),cuisineForm.reset()}).catch(function(t){t.message=="Duplicate value '"+e.Name+"' for column 'Name'"?toastNotification("Cuisine with the name '"+e.Name+"' already exists.","toast-error","error-symbol.png","red lighten-1","Infinity","#ce5548"):(console.log("an error has occurred "+t.message),console.log("Duplicate value '"+e.Name+"' for column 'Name'"),toastNotification(t.message,"toast-error","error-symbol.png","red lighten-1","Infinity","#ce5548"))})}var t="";""==e&&(t+='"Cuisine" is required!<br>'),e.length>20&&(t+='"Cuisine" must be less than 20 characters!<br>'),""==e||e.match(/^[A-Za-z ]+$/)||(t+='"Cuisine" contains non-alphabetic characters!<br>'),toastNotification(t,"toast-error","error-symbol.png","red lighten-1","Infinity","#ce5548")}function toastNotification(e,t,s,a,i,n){M.toast({html:'<div class="toast-side"></div><div class="toast-notification-con"><img class="'+t+'" src="../images/'+s+'"><div class="toast-message">'+e+'</div><img class="toast-close" src="../images/toast-close.png" height="16" width="16"></div>',displayLength:i,classes:""+a}),$(".toast-side").css({"background-color":n}),$(document).on("click",".toast-close",function(){$("#toast-container .toast").fadeOut(500,function(){$("#toast-container .toast").remove()})})}function logoutUser(){localStorage.setItem("userStatus","logged_out"),console.log("logged_out"),window.location.href="../admin.html"}Backendless.serverURL="https://api.backendless.com",Backendless.initApp("073669A8-CCB7-2AED-FFEC-841A4CE5F400","FAFDE171-5308-49CF-9980-AA89E4F28F0C"),document.addEventListener("DOMContentLoaded",function(){onPageLoad();const e=localStorage.getItem("currentUser");document.getElementById("userEmail").innerHTML="Hi, "+e;var t=document.querySelectorAll(".fixed-action-btn");M.FloatingActionButton.init(t),t=document.querySelectorAll(".modal"),M.Modal.init(t)}),$("#myInput").on("keyup",function(){var e=$(this).val().toLowerCase();$("#myTable tr").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf(e)>-1)})}),addCuisineBtn.addEventListener("click",e=>{M.Toast.dismissAll()}),modalAddCuisineCancel.addEventListener("click",e=>{M.Toast.dismissAll(),cuisineForm=document.querySelector("#createCuisine-form"),cuisineForm.reset()}),$(document).on("click","#delete",function(){M.Toast.dismissAll();const e=document.getElementById("deleteModal");M.Modal.init(e,{dismissible:!0}).open();var t=$(this).attr("name");console.log(t);var s=$("#"+t).find("td:first").text();document.getElementById("modalDeleteCuisineMessage").innerHTML="Do you want to delete the selected Cuisine? <br><br><b>"+s+"</b>",queryObjectId=t}),modalDeleteCuisineConfirm.addEventListener("click",e=>Backendless.Data.of("Cuisine").remove({objectId:queryObjectId}).then(()=>onPageLoad()).then(()=>{console.log("11. Notification sent"),toastNotification("Cuisine deleted successfully!","toast-tick","white-check-mark.png","light-blue darken-2",4e3,"#0277bd")}).catch(function(e){toastNotification(e,"toast-error","error-symbol.png","red lighten-1","Infinity","#ce5548")})),$(document).on("click","#update",function(){M.Toast.dismissAll();const e=document.getElementById("updateModal");M.Modal.init(e,{dismissible:!0}).open();var t=$(this).attr("name");console.log(t);var s=$("#"+t).find("td:first").text();document.getElementById("update_cuisine").value=s,M.updateTextFields(),queryObjectId=t}),modalUpdateCuisineConfirm.addEventListener("click",e=>{M.Toast.dismissAll();var t=$("#"+queryObjectId).find("td:first").text(),s=document.getElementById("update_cuisine").value.trim();if(!(""==s||s.length>20||""!=s&&!s.match(/^[A-Za-z ]+$/)||s==t)){$("#updateModal").modal("close");var a={Name:s,objectId:queryObjectId};return Backendless.Data.of("Cuisine").save(a).then(()=>onPageLoad()).then(()=>{console.log("11. Notification sent"),toastNotification("Cuisine updated successfully!","toast-tick","white-check-mark.png","light-blue darken-2",4e3,"#0277bd")}).catch(function(e){toastNotification(e,"toast-error","error-symbol.png","red lighten-1","Infinity","#ce5548")})}var i="";""==s&&(i+='"Cuisine" is required!<br>'),s.length>20&&(i+='"Cuisine" must be less than 20 characters!<br>'),""==s||s.match(/^[A-Za-z ]+$/)||(i+='"Cuisine" contains non-alphabetic characters!<br>'),s!=t&&toastNotification(i,"toast-error","error-symbol.png","red lighten-1","Infinity","#ce5548")}),updateCancelBtn.addEventListener("click",e=>{M.Toast.dismissAll();var t=document.getElementById("update_cuisine").value.trim(),s=!0;$("#"+queryObjectId).find("td:nth-child(1)").text()==t&&($("#updateModal").modal("close"),updateCuisineForm=document.querySelector("#updateCuisine-form"),updateCuisineForm.reset(),s=!1),1==s&&$("#modalUnsaved").modal("open")}),unsavedDiscardBtn.addEventListener("click",e=>{$("#updateModal").modal("close"),updateCuisineForm=document.querySelector("#updateCuisine-form"),updateCuisineForm.reset()}),exportConfirmBtn.addEventListener("click",e=>{var t=document.getElementById("establishmentExportChkBox").checked,s=document.getElementById("specialExportChkBox").checked,a=document.getElementById("cuisineExportChkBox").checked,i=document.getElementById("adminExportChkBox").checked;if(0==t&&0==s&&0==a&&0==i)M.Toast.dismissAll(),toastNotification("Please select a table","toast-error","error-symbol.png","red lighten-1","Infinity","#ce5548",0);else{if(1==t){const e=100,t=async()=>{let t=0,s=[];const a=Backendless.DataQueryBuilder.create();a.setRelated(["establishmentSpecials"]),a.setSortBy(["Country","Name"]),a.setPageSize(e);do{const e=await Backendless.Data.of("Establishment").find(a);t=e.length,s=s.concat(e),a.prepareNextPage()}while(t>=e);return s},s=e=>{var t=[],s=[];s.push("Country","Location","Address","Suburb","Postcode","Establishment_ Type","Cuisine_Type","Name","Image","Google_Business_Link","Website_Link","objectId"),t.push(s),e.forEach(e=>{tempEstablishment=[],tempEstablishment.push(e.Country);var s="POINT("+e.Location.x+" "+e.Location.y+")";tempEstablishment.push(s),tempEstablishment.push(e.Address),tempEstablishment.push(e.Suburb),tempEstablishment.push(e.Postcode),tempEstablishment.push(e.Establishment_Type),tempEstablishment.push(e.Cuisine_Type),tempEstablishment.push(e.Name),tempEstablishment.push(e.Image),tempEstablishment.push(e.Google_Business_Link),tempEstablishment.push(e.Website_Link),tempEstablishment.push(e.objectId),t.push(tempEstablishment)});let a="data:text/csv;charset=utf-8,"+t.map(e=>e.join(",")).join("\n");var i=encodeURI(a),n=document.createElement("a");n.setAttribute("href",i),n.setAttribute("download","Establishment.csv"),document.body.appendChild(n),n.click()},a=e=>{toastNotification(e.code+" "+e.message,"toast-error","error-symbol.png","red lighten-1","Infinity","#ce5548",0)};Promise.resolve().then(t).then(s).catch(a)}if(1==s){const e=100,t=async()=>{let t=0,s=[];const a=Backendless.DataQueryBuilder.create();a.setRelated(["establishmentSpecials"]),a.setSortBy(["Country","Name"]),a.setPageSize(e);do{const e=await Backendless.Data.of("Establishment").find(a);t=e.length,s=s.concat(e),a.prepareNextPage()}while(t>=e);return s},s=e=>{var t=[],s=[];s.push("Type_Of_Special","Days_Of_Week","Start_Time","End_Time","Category","Description","objectId"),t.push(s),e.forEach(e=>{for(var s=0,a=e.establishmentSpecials.length;s<a;s++)tempSpecial=[],tempSpecial.push(e.establishmentSpecials[s].Type_Of_Special),tempSpecial.push(`"${e.establishmentSpecials[s].Days_Of_Week}"`),tempSpecial.push(e.establishmentSpecials[s].Start_Time),tempSpecial.push(e.establishmentSpecials[s].End_Time),tempSpecial.push(e.establishmentSpecials[s].Category),tempSpecial.push(e.establishmentSpecials[s].Description),tempSpecial.push(e.establishmentSpecials[s].objectId),t.push(tempSpecial)});let a="data:text/csv;charset=utf-8,"+t.map(e=>e.join(",")).join("\n");var i=encodeURI(a),n=document.createElement("a");n.setAttribute("href",i),n.setAttribute("download","Special.csv"),document.body.appendChild(n),n.click()},a=e=>{toastNotification(e.code+" "+e.message,"toast-error","error-symbol.png","red lighten-1","Infinity","#ce5548",0)};Promise.resolve().then(t).then(s).catch(a)}if(1==a){const e=100,t=async()=>{let t=0,s=[];const a=Backendless.DataQueryBuilder.create();a.setSortBy(["Name"]),a.setPageSize(e);do{const e=await Backendless.Data.of("Cuisine").find(a);t=e.length,s=s.concat(e),a.prepareNextPage()}while(t>=e);return s},s=e=>{var t=[],s=[];s.push("Name"),t.push(s),e.forEach(e=>{tempCuisine=[],tempCuisine.push(e.Name),t.push(tempCuisine)});let a="data:text/csv;charset=utf-8,"+t.map(e=>e.join(",")).join("\n");var i=encodeURI(a),n=document.createElement("a");n.setAttribute("href",i),n.setAttribute("download","Cuisine.csv"),document.body.appendChild(n),n.click()},a=e=>{toastNotification(e.code+" "+e.message,"toast-error","error-symbol.png","red lighten-1","Infinity","#ce5548",0)};Promise.resolve().then(t).then(s).catch(a)}if(1==i){const e=100,t=async()=>{let t=0,s=[];const a=Backendless.DataQueryBuilder.create();a.setSortBy(["name"]),a.setPageSize(e);do{const e=await Backendless.Data.of("Users").find(a);t=e.length,s=s.concat(e),a.prepareNextPage()}while(t>=e);return s},s=e=>{var t=[],s=[];s.push("Username"),s.push("Email"),t.push(s),e.forEach(e=>{tempAdmin=[],tempAdmin.push(e.name),tempAdmin.push(e.email),t.push(tempAdmin)});let a="data:text/csv;charset=utf-8,"+t.map(e=>e.join(",")).join("\n");var i=encodeURI(a),n=document.createElement("a");n.setAttribute("href",i),n.setAttribute("download","Admin.csv"),document.body.appendChild(n),n.click()},a=e=>{toastNotification(e.code+" "+e.message,"toast-error","error-symbol.png","red lighten-1","Infinity","#ce5548",0)};Promise.resolve().then(t).then(s).catch(a)}}});
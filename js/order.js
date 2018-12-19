// JavaScript source code
// gpsware.js 
window.onload = startForm;


function startForm()
{
    document.getElementById('txtDateNow').value = showDate();
    document.getElementById('ddlProduct').focus();
   
   
    
    
}   
/**
 * return the current date month and year from date object
 */
function showDate()
{
    //declare date object
    let thisDay = new Date();

    //extract ate month and year from date object
    let thisDate = thisDay.getDate();
    let thisMonth = thisDay.getMonth()+1;
    let thisYear = thisDay.getFullYear();
    let currentDate = thisMonth + "/" + thisDate + "/"+thisYear;
   

    return currentDate
}

/**
 * this function calculate sub tiotal from price and qty
 */
function calculatePrice()
{
    //declare variables
    let product = document.getElementById('ddlProduct');
    let quantity = document.getElementById('ddlQuantity');

    //declare variables that contain selected index
    let pIndex = product.selectedIndex; //product index
    let qIndex = quantity.selectedIndex;//quantity index

    //return the product value of the selected index

    let productPrice = product.options[pIndex].value;
    let quantityOrder = quantity.options[qIndex].value;
   
    document.getElementById('txtPrice').value = (productPrice * quantityOrder).toFixed(2);

}


function createCheckbox() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");

    return x
    //document.body.appendChild(x);
}



function remR(){
    var allRows = document.getElementById('ordTable').getElementsByTagName('tr');
    var root = allRows[0].parentNode;
    var allInp = root.getElementsByTagName('input');
    for(var i=allInp.length-1;i>=0;i--){
        if((allInp[i].getAttribute('type')=='checkbox')&&(allInp[i].checked)){
            root.removeChild(allInp[i].parentNode.parentNode)
        }
    }
    calcSum();
    }


        var i = 1;
        var subTot = 0;
        var listItem = "item";

    function processInput() {
       
     
        if (i <= 50) {
         listItem = "item" + i;



           var table = document.getElementById("ordTable");
           
           var row = table.insertRow(0);
           var cell1 = row.insertCell(0);
           var cell2 = row.insertCell(1);
           var cell3 = row.insertCell(2);
           var cell4 = row.insertCell(3);
           cell3.setAttribute("class", "calcCells");
           row.id = listItem;
           

           


           var prodName = $("#ddlProduct :selected").text();;
          // let prod = document.getElementById("ddlProduct").value;
           let qty = document.getElementById("ddlQuantity").value;
           let total = document.getElementById("txtPrice").value;



           document.getElementById(listItem).cells[0].innerHTML = prodName;
           document.getElementById(listItem).cells[1].innerHTML = qty;
           document.getElementById(listItem).cells[2].innerHTML = total;
           document.getElementById(listItem).cells[3].appendChild(createCheckbox());
    
            i++; 
                

      
      calcSum();
       

        }
        
        
    }

    function delRow(){
        document.getElementById("ordTable").deleteRow(0);
    }
function calcSum(){
    var sum = 0;

    // use querySelector to find all second table cells
    var cells = document.querySelectorAll(".calcCells");
   
    for (var i = 0; i < cells.length; i++)
         sum+=parseFloat(cells[i].firstChild.data);
       
         subTot = sum.toFixed(2);
         document.getElementById("toolBox").value = subTot;  
}
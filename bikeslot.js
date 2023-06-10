var sub=document.getElementById("sub")

var table=document.createElement("table")
sub.appendChild(table)
table.style.border="1px solid black"
table.style.borderCollapse="collapse"
var thead=document.createElement("thead")
table.appendChild(thead)
table.id="tab"
var tr=document.createElement("tr")
thead.appendChild(tr)
var th1=document.createElement("th")
tr.appendChild(th1)
th1.textContent="Bike No"
var th2=document.createElement("th")
tr.appendChild(th2)
th2.textContent="Bike Owner Name"
var th3=document.createElement("th")
tr.appendChild(th3)
th3.textContent="Check In Time"
var th4=document.createElement("th")
tr.appendChild(th4)
th4.textContent="Check Out Time"
var tbody=document.createElement("tbody")
table.appendChild(tbody)
function add()
{
sub.style.visibility="visible"
  var tr1=document.createElement("tr")
  tbody.appendChild(tr1)
  
  var bkno=String(document.getElementById("bkno").value)
  var bwn=String(document.getElementById("bwn").value)
  var cin=String(document.getElementById("cin").value)
  var cout=String(document.getElementById("cout").value)
  var arr=new Array(4)
  arr[0]=bkno
  arr[1]=bwn
  arr[2]=cin
  arr[3]=cout
  for(i=0;i<4;i++)
  {
    var td=document.createElement("td")
    tr1.appendChild(td)
    td.textContent=arr[i]
    td.style.border="1px solid black"
    td.style.textAlign="center"
  }
}

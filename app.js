var amount=Number(0);
let paybtn=document.getElementById("paybtn");
let bill=document.getElementById("bill");
paybtn.addEventListener('click',function(){
    let issuebtn=document.getElementsByClassName("issuebtn");
    let bookname=document.getElementsByClassName("Bookname")
    let myarray=[];
    for(let i=0;i<issuebtn.length;i++)
    {
        if(issuebtn[i].textContent.toLowerCase()=="returnbook")
        {
            myarray.push(bookname[i].textContent);
        }
    }
    if(myarray.length==0){
        alert("payment successfull! you can proceed with new issues");
        amount=0;
        let billamt =document.getElementById("billamt");
        billamt.innerHTML=`Bill is: ${amount}`;
        
    }
    else{
        alert("there are some books to be returned")

    }

});

function showbook()
{
    document.getElementById("tableid").classList.remove("hide");
}
function clearbook()
{
    document.getElementById("tableid").classList.add("hide");
}
function addissue(idno,content,dt,dtmil){
    if(document.getElementById(`div${idno}`)==null){

        let html=`<div class="card my-2 mx-2 "id="div${idno}" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${content}</h5>
        <p>Dt/Time of isuue: ${dt}</p>
        <p class="hide" id="p${idno}">${dtmil}</p>
        </div>
        </div>`
        let issue= document.getElementById("Issue");
        issue.innerHTML+=html;
    }
  else{
    let issue= document.getElementById(`div${idno}`);
    document.getElementById(`p${idno}`).innerHTML=`${dtmil}`;
    issue.classList.remove("hide");
  }


}
function removeissue(idno,content,dt,dtmil){
    let issue= document.getElementById(`div${idno}`);
    let dtm = document.getElementById(`p${idno}`).innerHTML;
    let diff= (Number(dtmil)- Number(dtm))/1000;
    alert(content + "was returned at "+ dt);
    if(diff>60){
      let min=parseInt(diff/60);
      let sec= (diff/60-min)*60
        alert("total time for te book: "+ min +"minutes" + sec+" seconds");
    }
    else{
        alert("total time for the book: "+diff+"seconds");
    }
    alert("You have to pay:"+ diff*0.033+" ruppes");
    amount+=(diff*0.033);
    let billamt =document.getElementById("billamt");
    billamt.innerHTML=`Bill is: ${amount}`;
    issue.classList.add("hide");


}
function issuebook(btnid,tableid){
    let x= document.getElementById(btnid).innerHTML.toString();
    let content= document.getElementById(tableid).getElementsByTagName("td")[0].innerHTML;
    //console.log(x);
    if(x=="Issuebook")
    {
        let dt = new Date()
        let dt1 =dt.getTime();
        document.getElementById(btnid).innerHTML=`ReturnBook`
        alert(content+" is successfully issued at "+ dt);
        addissue(tableid,content,dt,dt1);

    }
    else{
        document.getElementById(btnid).innerHTML=`Issuebook`;
        let dt = new Date()
        //console.log(dt.getTime());
        //console.log(Number(document.getElementById(`p${tableid}`).innerHTML));

        removeissue(tableid,content,dt,dt.getTime());
    }
    //console.log(content);


}


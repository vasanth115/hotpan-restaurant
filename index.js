let header=document.querySelector("header");
let menu =document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");
let popuphearder=document.getElementById('popupheader');
let ammount=[];
let dish=[];
window.addEventListener("scroll",()=>{
    header.classList.toggle("shadow",window.scrollY>0);

})

menu.onclick=()=>{
    navbar.classList.toggle("active");
};
window.onscroll = () =>{
    navbar.classList.remove("active");
}
let s=document.getElementById("fullcontainer");
let cartbtn=document.getElementById("cartbtn");
let cart=document.getElementById("popup");
cartbtn.addEventListener('click',()=>{
if(cart.style.display=="none")
{
cart.style.display="block";
navbar.classList.remove("active");
s.style.overflow='hidden';

}
else
cart.style.display="none";
navbar.classList.remove("active");
s.style.overflow='auto';
})

const heart = document.querySelectorAll('.bxs-heart');
heart.forEach(icon => {
    icon.addEventListener("click",()=>{
        icon.classList.toggle("red");
    })
})

let cost=document.getElementById('totalcost');
let totalmoney;
let k=1;
let x=1;
let account=0;
let total=document.getElementById('total');
total.innerHTML=account;
let cartcontainer=document.querySelector('.cartcontainer');
function addtocart(event)
{
    account=0;
   var content=event.target.parentElement.id;
   let parentElementid=document.getElementById(content);
   let h3=parentElementid.querySelector('h3');
   let h3c=h3.innerHTML;
   let img=parentElementid.querySelector('img');
   let imgsrc=img.src;
   let h5=parentElementid.querySelector('h5');
   let h5c=h5.innerHTML;
   ammount.push(h5c);
   for(let i=0;i<ammount.length;i++)
   {
    let int=parseInt(ammount[i]);
    account+=int;
   }
   if(ammount.length!=0)
   {
    popuphearder.style.position="sticky";
   }
   else
   {
    popuphearder.style.position="fixed";
   }
   let boxdiv=document.createElement('div');
   boxdiv.className='box';
   boxdiv.id='cart'+k;
   let imgtag=document.createElement('img');
   imgtag.setAttribute('src',imgsrc);
   boxdiv.appendChild(imgtag);
   let ch3=document.createElement('h3');
   ch3.innerHTML=h3c;
   dish.push(ch3.innerHTML);
   console.log(dish);
   boxdiv.appendChild(ch3);
   let ch5=document.createElement('h5');
   ch5.innerHTML=h5c;
   boxdiv.appendChild(ch5);
   cartcontainer.appendChild(boxdiv);
   let button=document.createElement('span');
   button.classList.toggle('buttonitem');
   let string='#buttonitem'+x;
   button.innerHTML='Delete';
   boxdiv.appendChild(button);
   button.id=string;
   let deletebtn=document.getElementById(string);
   deletebtn.addEventListener('click',(e)=>{
    let  parent=e.target.parentElement.id;
    let deleteelement=document.getElementById(parent);
    let deletecost=deleteelement.querySelector('h5');
    let deleteitem=deleteelement.querySelector('h3');
    dish.pop(deleteitem.innerHTML);
    account=account-parseInt(deletecost.innerHTML);
    ammount.pop(account);
    positionitem();
    total.innerHTML=account;
    cartcontainer.removeChild(deleteelement);
   });
   x++;
   k++;
   positionitem();
total.innerHTML=account;
}


function positionitem()
{
    if(ammount.length==0)
    {
     popuphearder.style.position="fixed";
    }
    else if(ammount.length==1)
    {
        popuphearder.style.position="fixed";
    }
    else
    {
     popuphearder.style.position="sticky";
    }
    
}

let place=document.getElementById("placeorder");
place.addEventListener("click",placeorder);
let login=document.getElementById("login");
function placeorder()
{
    login.style.display="block";
    login.style.position="fixed";
    cart.classList.add("blur");
    let cross=document.getElementById("cross");
    cross.addEventListener("click",()=>{
        login.style.display="none";
    cart.classList.remove("blur");
    })
}


function order()
{
   let name=document.getElementById("name").value;
   let address=document.getElementById("address").value;
   let number=document.getElementById("number").value;
  
   cost.innerHTML=account;
}

function conformorder()
{
     cart.classList.toggle('blur');
    popup3.style.display="flex";
    login.style.display="none";
    const myTimeout = setTimeout(myGreeting, 5000);
}

function myGreeting() {
    popup3.style.display="none";
}
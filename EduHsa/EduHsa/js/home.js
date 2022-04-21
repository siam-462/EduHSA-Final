var listener = document.getElementById("about");
let wu=document.getElementById("why-us");
  let cc=document.getElementById("contact-cta");

var c = document.getElementById("c");
var uni= [{
    c:"usa",
    tu: [
    {n:"Stanford University",v:"stanford"},
    {n:"Harvard University",v:"harvard"},
    {n:"California Institute of Technology - Caltech",v:""},
    {n:"Massachusetts Institute of Technology (MIT)",v:""},
    {n:"University of California, Berkeley",v:""},
    {n:"California Institute of Technology - Caltech",v:""},
    {n:"Yale University",v:""},
    {n:"Princeton University",v:""},
    {n:"University of Chicago",v:""},
    {n:"Johns Hopkins University",v:""},
    {n:"University of Pennsylvania",v:""},
  ]
},
{
    c:"canada",
    tu: [
      {n:"University of Toronto",v:"Toronto"},
      {n:"University of British Columbia",v:"Columbia"},
      {n:"McGill University",v:""},
      {n:"McMaster University",v:""},
      {n:"University of Montreal",v:""},
      {n:"University of Alberta",v:""},
      {n:"University of Ottawa",v:""},
      {n:"University of Calgary",v:""},
      {n:"University of Waterloo",v:""},
      {n:"Johns Hopkins University",v:""},
      {n:"Western University - Canada",v:""},
  ]
},
{
    c:"germany",
    tu: [
      {n:"LMU Munich",v:"lmu"},
      {n:"Technical University of Munich",v:"munich"},
      {n:"Heidelberg University",v:""},
      {n:"Massachusetts Institute of Technology (MIT)",v:""},
      {n:"University of California, Berkeley",v:""},
      {n:"California Institute of Technology - Caltech",v:""},
      {n:"Yale University",v:""},
      {n:"Princeton University",v:""},
      {n:"University of Chicago",v:""},
      {n:"Johns Hopkins University",v:""},
      {n:"University of Pennsylvania",v:""},
  ]
},
{
    c:"australia",
    tu: [
      {n:"The University of Sydney",v:"sydney"},
      {n:"The University of Melbourne",v:"melbourne"},
      {n:"California Institute of Technology - Caltech",v:""},
      {n:"Massachusetts Institute of Technology (MIT)",v:""},
      {n:"University of California, Berkeley",v:""},
      {n:"California Institute of Technology - Caltech",v:""},
      {n:"Yale University",v:""},
      {n:"Princeton University",v:""},
      {n:"University of Chicago",v:""},
      {n:"Johns Hopkins University",v:""},
      {n:"University of Pennsylvania",v:""},
 ]
},
{
    c:"finland",
    tu: [
      {n:"ETH Zurich Swiss Federal Institute of Technology",v:"eth"},
      {n:"University of Zurich",v:"zurich"},
      {n:"California Institute of Technology - Caltech",v:""},
      {n:"Massachusetts Institute of Technology (MIT)",v:""},
      {n:"University of California, Berkeley",v:""},
      {n:"California Institute of Technology - Caltech",v:""},
      {n:"Yale University",v:""},
      {n:"Princeton University",v:""},
      {n:"University of Chicago",v:""},
      {n:"Johns Hopkins University",v:""},
      {n:"University of Pennsylvania",v:""},
  ]
},
{
    c:"uk",
    tu:[
      {n:"University of Cambridge",v:"cam"},
      {n:"University of Oxford",v:"oxford"},
      {n:"California Institute of Technology - Caltech",v:""},
      {n:"Massachusetts Institute of Technology (MIT)",v:""},
      {n:"University of California, Berkeley",v:""},
      {n:"California Institute of Technology - Caltech",v:""},
      {n:"Yale University",v:""},
      {n:"Princeton University",v:""},
      {n:"University of Chicago",v:""},
      {n:"Johns Hopkins University",v:""},
      {n:"University of Pennsylvania",v:""},
    ]
 
}];

// listener.addEventListener("click", myfunction);

// listener.onclick= function myfunction(){

// c.classList.toggle("container-img");


// }
var conSel = document.getElementById("countryselect");
var btnCont = document.getElementById("buttoncontainer");

conSel.onchange= function myfunction(e){
    if(this.value !="" &&  btnCont.classList.contains("hide")  ){
        btnCont.classList.toggle("hide");
    }
    console.log(this.value)

  
    
    
    }

  var up = document.getElementById("up"); 
  up.onclick = function(){
let value = conSel.value.toLowerCase(),data;
if(value != ""){
let l;
for(let i=0; i<uni.length; i++)
{
  console.log(uni[i]);
  if(uni[i].c== value){
   
    data=uni[i].tu; 
    break;
  }
}
let ul=document.createElement("ul");
let lc=document.getElementById("lc");
for(let i=0; i<data.length; i++){
  let li=document.createElement("li"); 
 
  li.value= data[i].v;
  let a=document.createElement("a")
  a.textContent=data[i].n;
    a.target="_blank"
    a.href=`program/${data[i].v.toLowerCase()}.html`
    li.appendChild(a)
  // li.onclick=function(){
  
    
  //   a.click();
  // }
  ul.appendChild(li);

}
lc.innerHTML= "";
lc.appendChild(ul);
}
  }

  let started=document.getElementById("getstarted");
  let home=document.getElementById("hom");
  started.onclick= function myfunction(e){
    if(  c.classList.contains("hide")  ){
        c.classList.toggle("hide");
        home.classList.toggle("hide");
        wu.classList.toggle("hide");
        cc.classList.toggle("hide");
    }
    console.log(this.value)


  }


  var sin = document.getElementById("si");
  sin.onclick= function (e){
  window.stop()
    console.log(e)

   
    this.href=`scholarship/${conSel.value.toLowerCase()}_scholarship.html`
    // a.click();
    // e.preventDefault();
  }
  
  







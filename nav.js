let btn = document.getElementById('menu');
let menubtn=document.querySelector('.open')
let closebtn=document.querySelector('.close')

function openmenu(){
    btn.style.display='block';
    menubtn.style.display='none';
    closebtn.style.display='block';
}
function closemenu(){
  btn.style.display='none';
  menubtn.style.display='block';
  closebtn.style.display='none';
}

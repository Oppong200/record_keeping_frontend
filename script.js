let modal=document.querySelector('.modal');
let btn=document.querySelector('.plus');
let btn2=document.querySelector('.add-record');
let add=document.querySelector('.add_to');
let submit=document.querySelector('.form-btn');
let farm=document.getElementById('farm');
let plant=document.getElementById('plant');
let activity=document.getElementById('activity');
let date=document.getElementById('date');

btn.onclick=function() {
    modal.style.display="flex";
}
btn2.onclick=function() {
    modal.style.display="flex";
}

add.onclick=function() {
    modal.style.display="none";
}

submit.onclick=function() {
    let body={
        farm:farm.value,
        plant:plant.value,
        activity: activity.value,
        date: date.value,
    }
}




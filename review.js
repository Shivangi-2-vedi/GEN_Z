var tl=gsap.timeline();
tl.to("#box1",{
    x:150,
    y:80,
    duration:2,
    scale:1,
  
})
tl.to("#box2",{
    x:0,
    y:80,
    duration:2,
    scale:1,
  
})
tl.to("#box3",{
    x:-150,
    y:80,
    duration:2,
    scale:1,
  
})

tl.from("#box1",{
    x:-150,
    y:-80,
    duration:2,
    scale:1,
  
})
tl.from("#box2",{
    x:0,
    y:-80,
    duration:2,
    scale:1,
  
})
tl.from("#box3",{
    x:150,
    y:-80,
    duration:2,
    scale:1,
  
})
const student=document.getElementById("box1");
const growth=document.getElementById("box2");
const teacher=document.getElementById("box3");

student.onclick=function(){
    student_info.style.opacity="1";
    teachers_info.style.opacity="0";
    growth_info.style.opacity="0";
}
growth.onclick=function(){
    student_info.style.opacity="0";
    teachers_info.style.opacity="1";
    growth_info.style.opacity="0";
}
teacher.onclick=function(){
    student_info.style.opacity="0";
    teachers_info.style.opacity="0";
    growth_info.style.opacity="1";
}
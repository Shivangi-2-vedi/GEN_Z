// -----------------------PAge-1-----------------------

 var tl=gsap.timeline();
 tl.from("nav h3",{
     y:-30,
     duration:1,
     opacity:0,
     delay:0.2
    
 })
tl.from("nav a ",{
    x:-30,
    duration:1,
    opacity:0,
    stagger:0.3
})
tl.from(".page1 p, .page1 a",{
    y:10,
    opacity:0,
   duration:1
})

// -----------------------PAge-2-----------------------

  gsap.from(".circle",{
      duration:4,
      rotate:10,
      ease:Expo.easeInOut,
      opacity:0
})
var active=4;
var miniCircles = document.querySelectorAll(".p");
var topic = document.querySelectorAll(".sec");
var intro = document.querySelectorAll(".intro_container");


gsap.to(miniCircles[active-1],{
    opacity:1
})
gsap.to(topic[active-1],{
    opacity:1
})
gsap.to(intro[active-1],{
    opacity:0
})


miniCircles.forEach(function(val,index){
    val.addEventListener("click",function(){
        gsap.to(".circle",{
            rotate:(4-(index+1))*15,
            ease:Expo.easeInOut,
            duration:0.8,     
         
        })
        greyout();
        gsap.to(this,{
            opacity:2
        })

        gsap.to(topic[index],{
            opacity:2,
            scale:1.5,
            duration:0.8
        })
        gsap.to(intro[index],{
            opacity:2
        })
       
    })

})

function greyout(){
    gsap.to(miniCircles,{
        opacity:.3,
        scale:1
    })
    gsap.to(topic,{ 
        opacity:.2
    })
    gsap.to(topic,{
        scale:1
    })
    gsap.to(intro,{
        opacity:0
    })
    
}

// -----------------------PAge 2(Cicle)-----------------------

gsap.from(".page2 .circle",{
    
    rotate:"180%",

    scrollTrigger:{
        trigger:".page2 .circle" ,
        scroller:"body",
        markers:true,
        start:"top 20%",
        end:"-80%",
       scrub:2
    }
})
gsap.to(".page2 #intro_container",{
    
    opacity:0,

    scrollTrigger:{
        trigger:".page2 #intro_container" ,
        scroller:"body",
        markers:true,
        start:"top 105%",
        end:"100%",
       scrub:2
    }
})


// -----------------------PAge 3-----------------------

 let active_img=4;
 let images = document.querySelectorAll(".course img");
 let course_box = document.querySelectorAll(".course");
 let course=document.getElementById('.course');

 gsap.to(images[active_img-1],{
     opacity:1
 })
 
  function fade(){
    gsap.to(course_box,{
        height:'',
        width:''
  }) 
  gsap.to(images,{
    opacity:0.5
  })  
}
let matchResult=window.matchMedia("screen and (max-width:800px)");
if(matchResult.matches){
    images.forEach(function(val,index){
        val.addEventListener("click",function(){
           fade();
             gsap.to(course_box[index],{
                   height:"250px",
                   width:"150px"
             }) 
             gsap.to(images[index],{
               opacity:5
             })
   
   
        })  
    })
    
}
else{
    images.forEach(function(val,index){
        val.addEventListener("click",function(){
           fade();
             gsap.to(course_box[index],{
                   height:"600px",
                   width:"600px"
             }) 
             gsap.to(images[index],{
               opacity:5
             })
   
   
        })  
    })
}


// -----------------------Responsiveness-----------------------


let menuList=document.getElementById("menuList");
menuList.style.maxHeight="0px";

function toggleMenu(){
    if(menuList.style.maxHeight=="0px")
    {
        menuList.style.maxHeight="300px";
    
    }
    else{
        menuList.style.maxHeight="0px";

    }
}

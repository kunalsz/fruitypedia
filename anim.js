let chngD = document.querySelector('.cng-d')
let tar = gsap.utils.toArray('.ben-img')
let tar_text = gsap.utils.toArray('.ben-text')
let dis = gsap.utils.toArray('.display')


chngD.addEventListener('click',()=>{
    gsap.to(window,{
        duration:1.2,
        ease:'elastic',
        scrollTo:{
            y:'.benefits'
        }
    })
})

let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.dis',
        scrub:true,
        start:'top top'
    }
})

tl.to('.fruit-img',{
    y:'50%',
    duration:2,
    opactiy:0.3
})

tar.forEach((img,i)=>{
    gsap.from(img,{
        x:200,
        scrollTrigger:{
            trigger:img,
            scrub:true,
            start:'top 80%'
        }
    })
})

tar_text.forEach((img,i)=>{
    gsap.from(img,{
        x:-150,
        scrollTrigger:{
            trigger:img,
            scrub:true,
            start:'top 80%',
            end:'bottom 80%'
        }
    })
})

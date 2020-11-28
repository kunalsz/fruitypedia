gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)

let chngL = document.querySelector('.cng-l')
let chngR = document.querySelector('.cng-r')


let fruit_name = document.querySelector('.fruit-name')
let fruit_img = document.querySelector('.fruit-img')
let display = document.querySelector('.display')

let pro = document.querySelector('.pro')
let carb = document.querySelector('.carb')
let cal = document.querySelector('.cal')
let fat = document.querySelector('.fat')
let sug = document.querySelector('.sug')

let i = 0


//DATA FOR ALL FRUITS
let display_data = [
    {
        'name':'APPLE',
        'image':'./assets/fruits/apple.png',
        'back':'url(/assets/back/apple/SVG/Layer1.svg)',
        'nutrition':{
            'protein':0.3,
            "carbohydrates": 11.4,
            "fat": 0.4,
            "calories": 52,
            "sugar": 10.3
        }
    },
    {
        'name':'MANGO',
        'image':'./assets/fruits/mango.png',
        'back':'url(/assets/back/mango/SVG/Layer1.svg)',
        'nutrition':{
            "carbohydrates": 15,
            "protein": 0.82, 
            "fat": 0.38, 
            "calories": 60, 
            "sugar": 13.7 
        }
    },
    {
        'name':'BANANA',
        'image':'./assets/fruits/banana.png',
        'back':'url(/assets/back/banana/SVG/Layer1.svg)',
        'nutrition':{ 
            "carbohydrates": 22, 
            "protein": 1, 
            "fat": 0.2, 
            "calories": 96, 
            "sugar": 17.2 
        } 
    },
    {
        'name':'WATERMELON',
        'image':'./assets/fruits/watermelon.png',
        'back':'url(/assets/back/watermelon/SVG/Layer1.svg)',
        'nutrition':{ 
            "carbohydrates": 8, 
            "protein": 0.6, 
            "fat": 0.2, 
            "calories": 30, 
            "sugar": 6 
        }
    },
    {
        'name':'ORANGE',
        'image':'./assets/fruits/orange.png',
        'back':'url(/assets/back/orange/SVG/Layer1.svg)',
        'nutrition':{ 
            "carbohydrates": 8.3, 
            "protein": 1, 
            "fat": 0.2, 
            "calories": 43, 
            "sugar": 8.2 
        }
    }
]

//LEFT BTN
chngL.addEventListener('click',()=>{
    console.log('click')
    chngDisplay('l')
})

//RIGHT BTN
chngR.addEventListener('click',()=>{
    console.log('click')
    chngDisplay('r')
})

//THE FUNC WHICH CHANGES THINGS
function chngDisplay(key){

    if(key=='l'){
        if(i>0){
            //TO CONTAIN I'S VALUE BW 0 AND 5
            i = i-1
        }
    }
    if(key=='r'){
        if(i<5){
            i = i+1
        }
    }
    //CHANGING THE NAME
    gsap.to(fruit_name,{duration:2,delay:0.3,text:display_data[i]['name']})

    //CHANGING THE BACK
    gsap.to(display,{duration:1,ease:'power2.in',delay:0.3,backgroundImage:display_data[i]['back']})

    //CHANGING THE IMG 
    fruit_img.src = display_data[i]['image']

    
    pro.innerHTML = display_data[i]['nutrition']['protein']
    carb.innerHTML = display_data[i]['nutrition']['carbohydrates']
    sug.innerHTML = display_data[i]['nutrition']['sugar']
    fat.innerHTML = display_data[i]['nutrition']['fat']
    cal.innerHTML = display_data[i]['nutrition']['calories']
}
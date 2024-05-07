let resume = [
    {
        Name: "Dasvin Kumar R",
        Designation: "Software Engineer",
        Experience: "2.5 years",
        Contact: "0123456789",
        Email: "abc@gmail.com",
        Address: {
            no: "12",
            Street: "x street",
            Dist: "y",
            State: "z",
            postalcode: "123"
        }  
    },
    {
        Technical_Skills: ['Automation Testing(Selenium Java)', 'Funcitonal Testing', 'API Testing(Manual & Automation)','Version control','Performance Testing', 'Manual Testing']
    },
    {
        Company: "Google",
        Role: "Software Engineer",
        Locate: "Chennai",
        Duration: "2022 - Present" 
    },
    {
        Projects: {
            ProjectName: "ABC",
            Role: "Automation Tester"
        }
    },
    {
        Cretification: ['API Testing (Manual and Automation) from Testleaf','Performance Testing from Udemy','Appium Mobile Application Testing from Udemy','Web Development from Udemy']
    },
   
    {
     Education:{
        Course: "BE",
        College: "ABC",
        PLace: "xyz"
     }  
    }
]

///Using For in loop alone
console.log("Type One:")
for(let i in resume){
    let temp = resume[i]
    for(let j in temp){
        if(typeof temp[j] === 'object'){
            let Jin = temp[j]
            console.log(j)
            for(let k in Jin){
                let regex = /\d/g
                let bool = regex.test(k)
                if(bool===false){
                    console.log(k, Jin[k]) 
                }else{
                    console.log(Jin[k])
                } 
            }
        }else{
            console.log(j, temp[j])
        } 
    }
}

//used all for loops in here to iterate
console.log("Type two:")
for(let i of Object.keys(resume)){ //for of loop
    let temp = resume[i]
    for(let j in temp){  //for in loop
        if(Array.isArray(temp[j])){
            let Jin = temp[j]
            console.log(j)
            for(let i=0; i<Jin.length; i++){  //normal for loop
                console.log(Jin[i])
            }
        }else if(typeof temp[j]==='object'){
            let Kin = temp[j]
            console.log(j)
            Object.keys(Kin).forEach((e) => { //for each loop
                console.log(e, Kin[e])
            })
        }else{
            console.log(j, temp[j])
        }
    }
}

///Using For of loop alone
console.log("Type Three:")
for(let i of resume){
    let temp = i
    for(let j of Object.keys(temp)){
        if(typeof temp[j] === 'object'){
            let Jin = temp[j]
            console.log(j)
            for(let k of Object.keys(Jin)){
                let regex = /\d/g
                let bool = regex.test(k)
                if(bool===false){
                    console.log(k, Jin[k]) 
                }else{
                    console.log(Jin[k])
                } 
            }
        }else{
            console.log(j, temp[j])
        } 
    }
}

//Using For Each  loop
console.log("Type Four")
Object.keys(resume).forEach((e)=>{
    let temp = resume[e]
    Object.keys(temp).forEach((j)=>{
        if(typeof temp[j] === 'object'){
            let Jin = temp[j]
            console.log(j)
            Object.keys(Jin).forEach((k)=>{
                let regex = /\d/g
                let bool = regex.test(k)
                if(bool===false){
                    console.log(k, Jin[k]) 
                }else{
                    console.log(Jin[k])
                } 
            })
        }else{
            console.log(j, temp[j])
        }
    })
})
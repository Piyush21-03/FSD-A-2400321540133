function verify(x,y){
    const a = "Piyush21_06"
    const b="Piyush21"
    if(x==a && y==b){
        console.log("login success")
    }
}
function sumwith(clbk, msg){
    let x="Piyush21_06"
    let y="Piyush21"
    clbk(x,y)
}
sumwith(verify,"Mr.Piyush ")
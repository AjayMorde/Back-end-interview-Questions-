const  obj1={
    name:"Ajay",
    lastName:"Morde"
}

const obj2={

    name:"swap",
    lastName:"darshanale"

}
function info(solapur){
    console.log(this.name + " "+this.lastName + " from  " + solapur )
}

info.call(obj1,"solapur")
info.call(obj2,"solapur")
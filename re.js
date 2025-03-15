function result(){

var name = document.getElementById("name").value;
var per = (Math.random()*100).toFixed(2);


if(per>=34){
    res.innerHTML=name+"fail"+per;
} if(per>=35 & per<60 ){
    res.innerHTML=name+"second class"+per;
} if(per>=60 & per<74){
    res.innerHTML=name+"first class"+per;
}if(per>=74 & per<90){
    res.innerHTML=name+" first class with distinction"+per;
}if(per>90){
    res.innerHTML=name+"outstanding"+per;
}
}

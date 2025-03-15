function vote(){
var name = document.getElementById("name").value;
var age = document.getElementById("age").value;
var res = document.getElementById("res");
// alert("Name is"+" "+name);
// alert("age is"+" "+age);
if(age>=18){
    // alert("You are eligible");
    res.innerHTML = name + "You are eligible";

}else{
    // alert("You are still a Child 😂😂");
    res.innerHTML = name + "You are still a Child 😂😂"
}
}
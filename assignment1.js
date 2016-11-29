//1

var Assignment =  {
	person: (name,arr) => {
		Assignment.name=name;
      	console.log(Assignment.prefixName(arr));
    },
      prefixName:(arr)=>{
      	return arr.map((character)=>{
        	return Assignment.name+character;
      	});
     },
};

Assignment.person('assignment',[1,2,3]);


//2

function Objdata(){
	return {
      First:'Gautam',
      Last:'mekala',
      Dob:'20-3-1989'
    };
}
let {First:FirstName,Last:LastName,Dob:DateofBirth}= Objdata();
DisplayData({name:FirstName,dob:DateofBirth});

function DisplayData({name,dob}){
  console.log(name +' '+ dob);
 }
 
 //3
 
 function friends(){
  return ['raju','ravi','ramseh','kiran','naveen','arun'];
}
var [friend1,friend2,friend3,friend4,friend5,friend6]=friends();

console.log(friend1);
console.log(friend2);
console.log(friend3);


//4

var Student = (function () {
var Studentrecord = { First:'Gautam',Last:'Mekala',Dob:'20-3-1989' }
console.log(Studentrecord.Dob);
  return Studentrecord;
})();
console.log(Student.First);
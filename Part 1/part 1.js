//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...
function makeSt(name,age,education,nationality){

	 return{
		name:name,
		age:age,
		education:education,
		nationality:nationality

	}
	

}
var stu1={

	name:"abu mosa",
	age:35,
	education:"math",
	nationality:"syrian"
}
var stu2={

	name:"waleed",
	age:22,
	education:"high school",
	nationality:"jordanian"
}
var stu3={

	name:"mohd",
	age:26,
	education:"computer engineering",
	nationality:"jordanian"
}
var friends=[stu1,stu2,stu3];
///
function showFriend(stu){

	return stu['name']+" with the age of "+stu['age']+" and with "+stu['education']+" education";
}
/////avergeStudents()
function avergeStudents(array){

	var ages=0;
	for(var i=0;i<array.length;i++){

		ages+=array[i]['age'];
	}
	return ages/array.length;
}

/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
*/
// write your code here ...
function rangeSquared(a,b){
	var narr=[];
	if(b==undefined){
		if(a%2==0){
			narr.push(a*a); 
		}
		else{
			return null;
		}
	}
    for(var i=a;i<=b;i++){

    	if(i%2==0){
			narr.push(i*i)
		}
	}
	return narr;
}



/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....
function leader(array){

	var narr=[];
	for(var i=0;i<array.length;i++){

		if(array[i]>array[i+1]||array[i+1]==undefined){

			narr.push(array[i])
		}

	}
	return narr;
}


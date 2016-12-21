//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */

//writ your code here .....
var players=[];
function player(name){
	
	var play={};
	play.name=name;
	play.info={};
	play.addInfo=addInfo;
	play.increaseLevel=increaseLevel;
	play.isAvailable=isAvailable;
	return play;

}
var addInfo=function(age, position, level, availability ){

	var x= this.info;
	var name=this.name;
	x.name=name;
	 x.age=age;
	 x.position=position;
	 x.level=level;
	 x.availability=availability;

	 players.push(x);
	 
}
var increaseLevel=function(n){

	var x=this.info;
	x.level=n;


}
var isAvailable=function(){

	var x=this.info;
	if(x.availability==true){
		return true;
	}
	return false;
}

function iterat(array){

	each(array,function(x){

		if(x['age']>30){
			var y=x['level']-1;
			x['level']=y;

		}
	})

}




/////////// helper
function each(coll, f) {
if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
         f(coll[i], i);
    }
} else {
    for (var key in coll) {
         f(coll[key], key);
    }
 }
}

function sort(array,by){
	var narr=[];
	var narr2=[];
	

		if(by=="name"){

			each(array,function(x){

		narr.push(x['name'])
	})
	 narr.sort();

	 each(narr,function(x){
	 	var i=x;

	 	each(array,function(x){
	 		if(x['name']==i){

	 			narr2.push(x);
	 		}


	 	})
	 })
		}

		if(by=="age"){
			each(array,function(x){

		narr.push(x['age'])
		narr.sort();
	})


	 each(narr,function(x){
	 	var i=x;

	 	each(array,function(x){
	 		if(x['age']==i){

	 			narr2.push(x);
	 		}


	 	})
	 })
		}
		


	
	return narr2;

}
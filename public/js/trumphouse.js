/**
 * trumphouse - an es5 OOP program
 */
// VIEW
 // makes a visual object that you can see oncreen with a DIV

 	// These are the constructors


var DOMpiece = function (image) {
	console.log('DOMPiece created with image' + image); /////////////////////////
	this.elem = document.createElement ('div');
	this.elem.appendChild( document.createElement('img') );
};

var GameObject = function (fullName,src){
	this.fullName = fullName;
	this.elm = new DOMpiece (src);
}
 var Trump = function (fullName,src){
	 console.log('Candidate Trump loaded')
	 GameObject.call (fullName,src);
 };
 var Candidate = function (fullName, src){
	 GameObject.call (fullName,src);
 };
var User = function (level, src){
	GameOject.call (level,src);
};

Trump.prototype = Object.create (GameObject.prototype);
Trump.constructor = Trump;

Candidate.prototype = Object.create (GameObject.prototype);
Candidate.constructor = Candidate;

User.prototype = Object.create (GameObject.prototype);
User.constructor = User;
// The MAIN GAME 🎉
/**
	* JS Object creation method #2
	* 1. Create a function
	* 2. Create properties and methods inside the function.
	* 3. Use return at the end to return some of the properties and methods.
	* 4. Execute the function, and it spits out an object linked to the
	* 	Internal function
	*/

var trumphouse = (function() {

	var BEGINNER = 1;
	var EXPERIENCED = 2;

	// by NOT using 'init' we hide this function from public view

		console.log( 'in init' );

		var candidates = []; //array of candidates

		//creating a Trump
		var trump = new Trump("Donald J Trump", 'img/players/trump.png');
		// attaching candidates
		function init(){
		var player = new User(this.BEGINNER, 'PUTIMAGEHERE');
				candidates.push (new Candidate ("Hillary Clinton") );
				candidates.push (new Candidate ("Ted Cruz") );
				candidates.push (new Candidate ("Bernie Sanders") );
				candidates.push (new Candidate ("John Kasich") );
				candidates.push (new Candidate ("Jill Stein") );
				candidates.push (new Candidate ("Gary Johnson") );
			};

	function getCandidates () {
		return candidates;
	}

	function addCandidate (newCandidate){

		candidates.push (newCandidate);

	}

	function getTrump () {

		return trump;
	}
	function setTrump (newTrump) {
		trump = newTrump;

	}
	function getPlayer () {
		return player ;
	}

	function setPlayer (newPlayer) {
		player = newPlayer ;
	}

	return {
		init: init,
		getCandidates : getCandidates,
		getTrump: getTrump,
		getPlayer: getPlayer,
	};

}
	/* MODEL
	*	Store the game score
	*	Score timing ( if the game is time)
	*	Store parameters for game size, object size defaults
	*/


	/* VIEW
	* The background to the game
	*	The White House Image
	* A "Trump" Logo
	* Characters (candidates and Trump)
	* The user ( a paddle)
	*/

	/* CONTROLLER
	* Detect user pressing
	* the arrow keys
	* Detects collisions
	*
	*/



());


//Create an array of JavaScript objects to hold the data for quotes. Should be accessible in global scope

/* 	Each quote object should have:
	a quote property which contains a string: the text of the quote to display on the page
	a source property which contains a string identifying the creator of the quote. (i.e. Mark Twain)
	an optional citation property which contains a string identifying the publication the quote appears in.
	an optional year property which contains a number identifying the date of the quote.
*/

var quotes = [ 
 {
 	quote: "Common sense is the collection of prejudices acquired by age eighteen.",
 	source: "Einstein",
 	tags: ['funny', 'age', 'prejudices']
 },
 {
 	quote: "I'm in a business where no one cares about anything except how well  your last collection sold.", 
 	source: "Calvin Klein" ,  
 	tags: ['business', 'cares']
 },
 {
 	quote: "Don't cry because it's over, smile because it happened.", 
 	source: "Dr. Seuss", 
 	tags: ['crying', 'experience', 'life', 'misattributed']
 },
 {
 	quote: "Be yourself; everyone else is already taken", 
 	source: "Oscar Wilde", 
 	tags: ['misattributed', 'honesty', 'inspirational']
 },
 {
 	quote: "If you even dream of beating me, you better wake up and apologize", 
 	source: "Muhammad Ali", 
 	tags: ['inspirational', 'funny']
 },
 {
 	quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'", 
 	source: "Muhammad Ali" , 
 	tags: ['inspirational', 'training'],
 	year: 2001
 },
 {
 	quote: "That's been one of my mantras - focus and simplicity. Simple can be harder than complex; you have to work hard to get your thinking clean to make it simple.",
 	source: "Steve Jobs",
 	year: 2002, //Some of these data are purely made up
 	tags: ['inspirational', 'programming', 'simple']
 },
 {
 	quote: "If a man has no sauce then he is lost. But the same man can be lost in the sauce.", 
 	source: "A bizarre meme I just saw", 
 	citation: "Facebook News Feed", 
 	year: 2016, 
 	tags: ['wut', 'dank', 'sauce']
 },
 {
 	quote: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long. Just figure out what's next.", 
 	source: "Steve Jobs", 
 	citation: "'Jobs: Iconoclast and salesman' by Brian Williams, at MSNBSC", 
 	year: 2006
 }
];


var displayedQuotes = []; //My receptacle for 'used' quotes


//	Create a function getRandomQuote which: 
//		* selects a random quote object from the quotes array
//		* returns the randomly selected quote object




//My handy dandy random number generator, returns a number within the length of the array of quotes
var randomNumber;
function getRandomNumber() {		
	randomNumber = Math.floor(Math.random() * (quotes.length));
  	return randomNumber;
}

//My even handier dandier random quote generator, relies on getRandomNumber to generate a quote
function getRandomQuote() {					
	return quotes[getRandomNumber()];
}

/* 

Create a function named printQuote which follows these rules:
printQuote calls the getRandomQuote function and stores the returned quote object in a variable
printQuote constructs a string using the different properties of the quote object using the following HTML template:
 <p class="quote"> [quote here] </p> <p class="source"> [source here] <span class="citation"> [citation here] </span> <span class="year"> [year here] </span> </p>
printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing
printQuote displays the final HTML string to the page. You can use the following JS snippet to accomplish that: document.getElementById('quote-box').innerHTML

*/

//But first...

function randColor() { 		//Makes a random color for the background 
    var r;
    var g;
    var b;
    var myColor;
    
    r = Math.floor(Math.random()* 128 + 30);
    g = Math.floor(Math.random()* 128 + 30);
    b = Math.floor(Math.random()* 128 + 30);
    myColor = "rgb(" + r + "," + g +"," + b + ")";
    document.body.style.backgroundColor = myColor;
    document.getElementById('loadQuote').style.backgroundColor = myColor;		//Decided to make the loadQuote button the same color, it looked pretty trashy otherwise
}
	

//THE ALMIGHTY PRINTQUOTE() FUNCTION!
//She may be a little chunky but she gets the job done.

function printQuote() {
	var randomQuote = getRandomQuote();
	if (randomQuote !== undefined) {
		var html = '<p class="quote">' + randomQuote.quote + '</p> <p class="source">' + randomQuote.source;	//Building the base quote and source
		if (randomQuote.citation) {
		html += '<span class="citation">' + randomQuote.citation + '</span>';	//Adds the citation if present
		}
		if (randomQuote.year) {
			html += '<span class="year">' + randomQuote.year + '</span>';		//Adds the year if present
		}
		html += '</p>';						//final ending paragraph tag for quoteBox
		if (randomQuote.tags) {				//Just decided to put this outside of the quoteBox, seemed a little more... I dunno, in vogue I guess.
			html += '<p>tags: ' + randomQuote.tags.join(', ') + '</p>';
		}
		document.getElementById('quote-box').innerHTML = html;
		randColor();
		quotes.splice(randomNumber, 1); 		//Removes the quote at index of randomNumber
		displayedQuotes.unshift(randomQuote); 	//Adds said quote to the displayedQuotes index
	} else {									//Restarts the whole dang thing when quotes array is empty
		quotes = displayedQuotes;
		displayedQuotes = [];
		printQuote();  //Is this kosher? I can do this, right?
	}
	
}



// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, true);

setInterval(printQuote,30000); //Loads another quote in 30 seconds just in case you're too lazy to click. 

////////// Extra Credit //////////////

/* 

X Add more properties to the quote object. For example, a tags property could include a list of "tags" like -- "humor", "business", "politics" -- to categorize each quote.

X Randomly change the background color of the page, when the quote changes

*/




/*
X Don't display a random quote more than once until ALL quotes from the array have been displayed

X Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. (You can use setInterval() or setTimeout() method to do this -- see the links in the Project Resources listing.)


*/



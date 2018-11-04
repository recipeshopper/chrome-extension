var parser = require('ingredients-parser');

console.log('PARSER LOADED');

let getIngredients = () => {
	let ingrArr = [];
	let temp = document.getElementsByClassName("recipe-ingred_txt");
	for (let i=0; i< temp.length; i++) {
		if (temp[i].getAttribute("itemprop") === "recipeIngredient") {
			ingrArr.push(temp[i].textContent);
		}
	}
	return getIngredients;
}

//DUMMY DATA
var dummyData = ["2 cups all-purpose flour", "1/2 teaspoon baking soda", "1/2 teaspoon salt", "4 3/4 cup unsalted butter, melted", "1 cup packed brown sugar", "1/2 cup white sugar", "1 tablespoon vanilla extract", "1 egg", "1 egg yolk", "2 cups semisweet chocolate chips"];

let stringToNum = (string) => {
//TO DO
}

let ingredParser = (ingrArr) => {
	let ingrObj = [];
	ingrArr.forEach((ele)=>{
		let tempObj = parser.parse(ele);
		ingrObj.push(parser.parse(ele));

	})
	return ingrObj;
}

console.log(ingredParser(dummyData));

//TODO
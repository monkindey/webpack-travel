var hello = 'hello';
document.write(require("./content.js"));
if (__DEV__) {
	console.log(hello + ' webpack', 'i\'m debuging');
}
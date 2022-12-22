// JavaScript ES6 - Import, Export, and Modules

const pi = 3.141;

function doublePi() {
	return pi * 2;
}

function triplePi() {
	return pi * 3;
}

// export default item
export default pi;

// export additional items
export { doublePi, triplePi };

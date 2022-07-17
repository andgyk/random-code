const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";

function gen(num = 10, options = {}){
	options = Object.assign({
		chars: characters,
		pattern: null
	}, options);
	const { chars, pattern } = options;

	let code = "";
	if (pattern) code = String(pattern);

	if (num == "0" || num == null) num = 10;
	for (let i = 0; i < parseInt(num); i++){
		if (pattern) {
			code = code.replace("#", __ranchar(chars));
		} else {
			code += __ranchar(chars);
		}
	}

	return code;
};

function __ranchar (chars = characters) {
	return chars.split("")[Math.floor(Math.random() * chars.length)];
};

module.exports = gen;
import chroma from 'chroma-js';

const getCorrectNumber = (number) => {
	return number > 255 ? 255 : number < 0 ? 0 : number;
};

const generateAvatarFromHas = (hash) => {
	const [r, g, b] = hash
		.substr(0, 3)
		.split('')
		.map((char) => getCorrectNumber(char.charCodeAt(0)));
	const color = chroma([r, g, b]);
	const colorDarken = color.darken();
	const colorBrighten = color.brighten(2.6);
	return {
		color: color.hex(),
		colorDarken: colorDarken.hex(),
		colorBrighten: colorBrighten.hex(),
	};
};
export default generateAvatarFromHas;

export default (seconds) => {
	const min = Math.floor(seconds / 60);
	const sec = (seconds % 60).toFixed();

	return `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
};

const generateAvatar = (name) => {
	const char = name.at(0);

	if (char.match(/[A-C]/i)) return { color1: '#A0F453', color2: '#000000' };
	if (char.match(/[D-F]/i)) return { color1: '#24BDFF', color2: '#FF0000' };
	if (char.match(/[G-I]/i)) return { color1: '#FC2251', color2: '#658A94' };
	if (char.match(/[J-L]/i)) return { color1: '#EC3896', color2: '#667CE7' };
	if (char.match(/[M-O]/i)) return { color1: '#A5EC0F', color2: '#E52837' };
	if (char.match(/[P-R]/i)) return { color1: '#EB8770', color2: '#123661' };
	if (char.match(/[S-V]/i)) return { color1: '#F29D26', color2: '#730085' };
	if (char.match(/[W-Z]/i)) return { color1: '#CFF250', color2: '#235FD9' };

	if (char.match(/[А-Г]/i)) return { color1: '#A0F453', color2: '#000000' };
	if (char.match(/[Д-Ж]/i)) return { color1: '#24BDFF', color2: '#FF0000' };
	if (char.match(/[З-К]/i)) return { color1: '#FC2251', color2: '#658A94' };
	if (char.match(/[Л-П]/i)) return { color1: '#EC3896', color2: '#667CE7' };
	if (char.match(/[Р-У]/i)) return { color1: '#A5EC0F', color2: '#E52837' };
	if (char.match(/[Ф-Ч]/i)) return { color1: '#EB8770', color2: '#123661' };
	if (char.match(/[Ш-Ь]/i)) return { color1: '#F29D26', color2: '#730085' };
	if (char.match(/[Э-Я]/i)) return { color1: '#CFF250', color2: '#235FD9' };
};
export default generateAvatar;

//1 color1=A0F453 color2=000000
//2 color1=24BDFF color2=FF0000
//3 color1=FC2251 color2=658A94
//4 color1=EC3896 color2=667CE7

//5 color1=A5EC0F color2=E52837
//6 color1=EB8770 color2=123661
//7 color1=F29D26 color2=730085
//8 color1=CFF250 color2=235FD9

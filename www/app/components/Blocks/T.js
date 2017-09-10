
const T = (start, rotation) => {

	let shape = [
		{
			"x": 0,
			"y": 1,
		},
		{
			"x": 1,
			"y": 1,
		},
		{
			"x": 2,
			"y": 1,
		},
		{
			"x": 1,
			"y": 2,
		},
	]


	return {
		color: 'T',
		shape: translate(shape, start),
	}

}


const translate = (shape, start) => {
	const { x, y, } = start

	for (let square in shape){
		shape[square].x += x
		shape[square].y += y
	}
	return shape;
}

export default T

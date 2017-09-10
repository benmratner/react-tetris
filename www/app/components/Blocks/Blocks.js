import BlockShapes from 'config/BlockShapes'
import { times } from 'utils'
const T = (start, rotation) => {

	let shape = [

	]


	return {
		color: 'T',
		shape: translate(rotate(shape, rotation), start),
	}

}

const shiftToPlayfield = (shape) => {
	for (let square in shape){
		shape[square].x += 1
		shape[square].y += 1
	}
}


const translate = (shape, start) => {
	const { x, y } = start
	for (let square in shape){
		shape[square].x += x + 1
		shape[square].y += y + 1
	}
	return shape;
}

const rotate = (shape, rotation) => {
	const timesToRotate = rotation / 90 % 4
	for (let square in shape){
		let { x, y } = shape[square]
		let rotatedX, rotatedY

		switch (rotation) {
			case 90:
				rotatedX = -y
				rotatedY = x
				break;
			case 180:
				rotatedX = -x
				rotatedY = -y
				break;
			case 270:
				rotatedX = y
				rotatedY = -x
				break;
			default:
				rotatedX = x
				rotatedY = y
				break;
		}

		
		// console.log(x, y)

		shape[square].x = rotatedX
		shape[square].y = rotatedY
	}
	
	return shape;
}

const Blocks = (type, start) => {
	let shape = JSON.parse(JSON.stringify(BlockShapes[type])) // deep clone array of objects

	if (start.r){
		const rotated = rotate(shape, start.r);
		shape = translate(rotated, start)

	} else {
		shape = translate(shape, start)
	}


	return {
		shape,
		color: type,
	}
}

export default Blocks

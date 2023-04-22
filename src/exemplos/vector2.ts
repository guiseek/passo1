export interface Vector2 {
	x: number
	y: number
}

let variavel: Vector2 = {
	x: 10,
	y: 5
}

function soma(param1: Vector2, param2: Vector2) {
	return {
		x: param1.x + param2.x,
		y: param1.y + param2.y
	}
}

console.log(
	soma({ x: 10, y: 10 }, { x: 5, y: 16 })
)
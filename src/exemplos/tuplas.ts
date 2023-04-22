const tuplaMap = new Map<number, string>()

tuplaMap.set(0, 'a')
tuplaMap.set(1, 'b')
tuplaMap.set(2, 'c')

tuplaMap.get(2)


let arr = [0,0,0,0,1,1,1,3,4,4,4,5,5,6,6,6]

const tuplaSet = new Set<number>(arr)

tuplaSet.forEach(value => {
	console.log(value)
})

console.log(tuplaSet.has(2))
console.log(Array.from(tuplaSet))

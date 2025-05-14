import { useEzNode } from '../../lib'


const TestUseEzNode = () => {

	const node = useEzNode({
		button: undefined
	})

	return (
		<div>
			<button
				ref={ node.button }
				onClick={
					() => {
						console.log(node.button)
					}
				}
			>
				Console: Show Button
			</button>
		</div>
	)
}


export default TestUseEzNode

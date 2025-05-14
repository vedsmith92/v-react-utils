import { useEzRef } from '../../lib'


const TestUseEzRef = () => {

	const ref = useEzRef({
		count: 0
	})

	return (
		<div>
			<button
				onClick={
					() => {
						ref.count += 1
					}
				}
			>
				+
			</button>
			<button
				onClick={
					() => {
						console.log(ref.count)
					}
				}
			>
				Console: Show Count
			</button><br />
			Count: { ref.count }
		</div>
	)
}


export default TestUseEzRef

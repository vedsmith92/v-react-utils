import { useEzState } from '../../lib'


const TestUseEzState = () => {

	const state = useEzState({
		count: 0
	})

	return (
		<div>
			<button
				onClick={
					() => {
						state.count += 1
					}
				}
			>
				+
			</button><br />
			Count: { state.count }
		</div>
	)
}


export default TestUseEzState

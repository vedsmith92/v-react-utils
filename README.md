# useEzNode

```
import { useEzNode } from 'v-react-utils'


const UseEzNode = () => {

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
```

# useEzRef

```
import { useEzRef } from 'v-react-utils'


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
```

# useEzState

```
import { useEzState } from 'v-react-utils'


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
```

import { useState } from 'react'


const useEzNode = (nodes = {}) => {

	const [ handler ] = useState({
		get(target, key, receiver) {
			let value = Reflect.get(...arguments)
			if(value.current)
				value = Object.assign(value.current, value)
			return value
		},
		set(obj, key, value) {
			return Reflect.set(...arguments);
		}
	})

	const [ data ] = useState({
		state: new Proxy({
			...(() => {
				for (let key in nodes) {
					nodes[key] = { current: undefined }
				}
				return nodes
			})()
		}, handler)
	});

	return data.state;

}


export default useEzNode
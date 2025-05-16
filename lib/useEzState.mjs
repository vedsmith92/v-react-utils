import { useState } from 'react'


const useEzState = (initializeValue) => {

	let [ data, setData ] = useState({
		...(
			typeof initializeValue == 'function'
				? initializeValue()
				: initializeValue
		)
	})

	const [ handler ] = useState({
		get(target, key) {
			if(Reflect.has(target, key) && key !== '__proto__' && typeof Reflect.get(target, key) === 'object')
				return new Proxy(Reflect.get(target, key), handler)
			return Reflect.get(target, key)
		},
		set(obj, key, value) {
			if(obj[key] === value)
				return true;
			let result = Reflect.set(...arguments);
			setData({ ...data })
			return result;
		}
	})

	const [ state ] = useState(
		new Proxy(
			data,
			handler
		)
	);

	return state;

}



export default useEzState
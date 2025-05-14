import { useState } from 'react'


const useEzRef = (initialValue = {}) => {

	const [ data ] = useState({
		state: new Proxy({
			...initialValue
		}, {
			get(target, key, receiver) {
				return Reflect.get(...arguments)
			},
			set(obj, key, value) {
				return Reflect.set(...arguments);
			}
		})
	});

	return data.state;

}


export default useEzRef
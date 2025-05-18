import { useRef } from 'react'


const useEzNode = (initializeValue) => {
	const data = useRef(
		typeof initializeValue == 'function'
			? initializeValue()
			: { ...initializeValue }
	);
	const handler = useRef({
		get(target, key) {
			if(/(__set)$/g.test(key))
				return (n) => target[key.replace(/(__set)$/g, '')] = n
			return Reflect.get(...arguments);
		},
		set(obj, key, value) {
			Reflect.set(...arguments);
			return Reflect.set(...arguments);
		}
	})
	const r = useRef(new Proxy(data.current, handler.current));
	return r.current;
}


export default useEzNode
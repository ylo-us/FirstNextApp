// actions to dispatch state updates
export function routes(path) {
	return {
		type: 'ROUTE',
		payload: path
	}
}

export function updateNum(number) {
	return {
		type: 'UPDATE_NUMBER',
		payload: number
	}
}

export function updateName(name) {
	return {
		type: 'UPDATE_NAME',
		payload: name
	}
}

export function updateImg(img) {
	return {
		type: 'UPDATE_IMG',
		payload: img
	}
}
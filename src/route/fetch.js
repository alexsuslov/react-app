import 'whatwg-fetch';

export const fetchPostForm = (url, data) => {
	const formData = new FormData();
	Object.entries(data).forEach(([name, value]) => formData.append(name, value));
	return fetch(url, {
		method: 'POST',
		body: formData,
	});
};

export default url => {
	return fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

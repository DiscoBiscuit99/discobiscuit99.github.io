let inputs = document.getElementsByTagName('input');
let inputFields = [];
for (let i = 0; i < inputs.length; i++) {
	switch (inputs[i].type.toLowerCase()) {
		case 'text':
			inputFields.push(inputs[i]);
			break;
		case 'search':
			inputFields.push(inputs[i]);
			break;
		case 'email':
			inputFields.push(inputs[i]);
			break;
		case 'password':
			inputFields.push(inputs[i]);
			break;
		case 'url':
			inputFields.push(inputs[i]);
			break;
	}
}

document.addEventListener('keypress', scroll);

function scroll(e) {
	let shouldScroll = true;

	for (let i = 0; i < inputFields.length; i++) {
		if (inputFields[i] === document.activeElement) {
			if (inputFields[i].type.toLowerCase() === 'text' ||
				inputFields[i].type.toLowerCase() === 'search' ||
				inputFields[i].type.toLowerCase() === 'email' ||
				inputFields[i].type.toLowerCase() === 'password' ||
				inputFields[i].type.toLowerCase() === 'url')
			{ shouldScroll = false; }
		}
	}

	if (shouldScroll) evalKeys(e);
}

function evalKeys(e) {
	switch (e.code) {
		case 'KeyK':
			if (e.shiftKey) {
				window.scrollBy({
					top: -200,
					left: 0,
					behavior: 'smooth'
				});
			} else { 
				window.scrollBy({
					top: -50,
					left: 0,
					behavior: 'smooth'
				});
			}
			break;
		case 'KeyJ':
			if (e.shiftKey) {
				window.scrollBy({
					top: 200,
					left: 0,
					behavior: 'smooth'
				});
			} else { 
				window.scrollBy({
					top: 50,
					left: 0,
					behavior: 'smooth'
				});
			}
			break;
		case 'KeyH':
			if (e.shiftKey) {
				window.scrollBy({
					top: 0,
					left: -200,
					behavior: 'smooth'
				});
			} else {
				window.scrollBy({
					top: 0,
					left: -50,
					behavior: 'smooth'
				});
			}
			break;
		case 'KeyL':
			if (e.shiftKey) {
				window.scrollBy({
					top: 0,
					left: 200,
					behavior: 'smooth'
				});
			} else {
				window.scrollBy({
					top: 0,
					left: 50,
					behavior: 'smooth'
				});
			}
			break;
		case 'KeyG':
			if (e.shiftKey) {
				window.scrollTo({
					top: document.body.scrollHeight,
					left: 0,
					behavior: 'smooth'
				});
			} else {
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth'
				});
			}
			break;
	}
}


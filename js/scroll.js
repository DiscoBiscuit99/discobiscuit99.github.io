document.addEventListener('keypress', scroll);

function scroll(e) {
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

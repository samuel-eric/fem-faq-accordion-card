document.body.addEventListener('click', handleClick);

function handleClick(e) {
	if (e.target.className !== 'question-container') {
		if (e.target.className.includes('question')) {
			// console.log(e.target.className);
			// console.log(e.target.parentElement.nextElementSibling);
			e.target.parentElement.nextElementSibling.classList.toggle('hide-answer');
			if (e.target.classList.contains('question-arrow-down')) {
				e.target.previousElementSibling.classList.toggle('selected');
				if (e.target.classList.contains('arrow-up')) {
					e.target.classList.remove('arrow-up');
					e.target.classList.add('arrow-down');
				} else {
					e.target.classList.add('arrow-up');
					e.target.classList.remove('arrow-down');
				}
			} else {
				e.target.classList.toggle('selected');
				if (e.target.nextElementSibling.classList.contains('arrow-up')) {
					e.target.nextElementSibling.classList.remove('arrow-up');
					e.target.classList.add('arrow-down');
				} else {
					e.target.nextElementSibling.classList.add('arrow-up');
					e.target.nextElementSibling.classList.remove('arrow-down');
				}
			}
		}
	}
}

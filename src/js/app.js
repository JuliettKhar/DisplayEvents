import { eventBrite} from './eventbrite';
import { UI } from './ui';

const event = new eventBrite();
const ui = new UI();



function onClick(event) {
	const eventNameValue = ui.eventName.value;
	const categoryValue = ui.select.value;

	if(eventNameValue !== '') {
		console.log(1)
	}
	else {
		ui.showErrorMessage('Add an Event or city', 'text-center alert alert-danger mt-4');
	}
	event.preventDefault();
}

function subscribe() {
	ui.submitBtn.addEventListener('click', onClick);
}

export function init() {
	subscribe();
}
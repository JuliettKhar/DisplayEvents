import { eventBrite} from './eventbrite';
import { UI } from './ui';

const events = new eventBrite();
const ui = new UI();


function onClick(event) {
	const eventNameValue = ui.eventName.value;
	const categoryValue = ui.select.value;

	if(eventNameValue !== '') {
		events.queryAPI(eventNameValue, categoryValue) 
			.then( data => {
				const eventsList = data.events.events;
					if(eventsList.length > 0) {
						ui.displayEvents(eventsList);
					}
					else {
						ui.showErrorMessage('No results found', 'text-center alert alert-danger mt-4');
					}
			})
			.catch( err => console.log(err))
	}
	else {
		ui.showErrorMessage('Add an Event or City', 'text-center alert alert-danger mt-4');
	}
	event.preventDefault();
}

function subscribe() {
	ui.submitBtn.addEventListener('click', onClick);
}

export function init() {
	subscribe();
}
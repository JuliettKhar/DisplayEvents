import { eventBrite} from './eventbrite';
const event = new eventBrite();

export class UI {
	constructor() {
		this.select = document.querySelector('#category');
		this.submitBtn = document.querySelector('#submitBtn');
		this.eventName = document.querySelector('#event-name');
		this.searchEvents = document.querySelector('#search-events');
		this.init();
	}
	init() {
		this.printCategories();
	}
	printCategories() {
		const categoriesList = event.getCategoriesAPI()
			.then( data => {
					const categoriesList = data.categories.categories;
					categoriesList.forEach( category => {
						const option = document.createElement('option');
						option.value = category.id;
						option.appendChild(document.createTextNode(category.name));
						this.select.appendChild(option);
				})
			})
			.catch( err => console.log(err))
	}
	showErrorMessage(message, className) {
		const div = document.createElement('div');
		div.className = className;
		div.appendChild(document.createTextNode(message));
		this.searchEvents.appendChild(div);
		this.deleteErrorMessage();
	}
	deleteErrorMessage() {
		setTimeout( () => {
			const alert = document.querySelector('.alert');
			if(alert) {
				alert.remove();
			}
		}, 3000);
	}
}


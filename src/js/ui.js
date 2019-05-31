import { eventBrite} from './eventbrite';
const event = new eventBrite();

export class UI {
	constructor() {
		this.init();
	}
	init() {
		this.select = document.querySelector('#category');
		this.submitBtn = document.querySelector('#submitBtn');
		this.eventName = document.querySelector('#event-name');
		this.searchEvents = document.querySelector('#search-events');
		this.result = document.querySelector('#result');
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
	displayEvents(events) {
		let htmlTemplate = '';
		console.log(events)
		events.forEach( eventInfo => {
			htmlTemplate += `
				 <div class="col-md-4 mt-4">
                         <div class="card">
                              <div class="card-body">
                                   <img class="img-fluid mb-2" src="${eventInfo.logo !== null ? eventInfo.logo.url : ''}"> 
                              </div>
                              <div class="card-body">
                                   <div class="card-text">
                                        <h2 class="text-center card-title">${eventInfo.name.text}</h2>
                                        <p class="lead text-info">Event Information:</p>
                                        <p>${eventInfo.description.text !== null ? eventInfo.description.text : ''}...</p>
                                        <span class="badge badge-primary">Capacity: ${eventInfo.capacity !== null ? eventInfo.capacity : ''}</span>
                                        <span class="badge badge-secondary">Date & Time: ${eventInfo.start.local}</span>

                                        <a href="${eventInfo.url}" target="_blank" class="btn btn-primary btn-block mt-4">Get Tickets</a>
                                   </div>
                              </div>
                         </div>
                    </div>
			`
		});
		this.result.innerHTML = htmlTemplate;

	}
}


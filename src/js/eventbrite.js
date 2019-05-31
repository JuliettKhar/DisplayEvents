export class eventBrite {
	constructor() {
		this.apiKey = '2ACYWUQK3HZDDPQNGXKQ';
		this.orderBy = 'date';
	}
	async getCategoriesAPI() {
		const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.apiKey}`);
		const categories = await categoriesResponse.json();
		return {
				categories
		}
	}

	async queryAPI(eventName, category) {
		const eventsResponce = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderBy}&categories=${category}&token=${this.apiKey}`);
		const events = await eventsResponce.json();
		return {
			events
		}
	}
}
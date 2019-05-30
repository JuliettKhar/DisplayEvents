export class eventBrite {
	constructor() {
		this.apiKey = '2ACYWUQK3HZDDPQNGXKQ'; 
	}
	async getCategoriesAPI() {
		const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.apiKey}`);
		const categories = await categoriesResponse.json();
		return {
				categories
		}
	}
}
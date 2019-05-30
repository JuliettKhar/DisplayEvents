import { eventBrite} from './eventbrite';
const event = new eventBrite();

export class UI {
	constructor() {
		this.select = document.querySelector('#category');
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
}


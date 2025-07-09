const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51148638-4215382d54794cb096cce3e5a';

export default class ImageApiService {
    constructor() {
        this.page = 1;
    };

    fetchImages() {
        const url = `${BASE_URL}?key=${API_KEY}&editors_choice=true&page=${this.page}&per_page=3`;

        return fetch(url)
            .then(r => r.json())
            .then(({ hits }) => {
            this.incrementPage();
            return hits;
        });

        
    }
    incrementPage() {
        this.page += 1;
    }
        
    resetPage() {
        this.page = 1;
    }
}
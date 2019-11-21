import { Movies } from './movies';

export class Data {
    movieList: Movies[] = [{
        "id": 1,
        "title": "The Godfather",
        "posterPath": "../../assets/godfather.jpg"
    },
    {
        "id": 2,
        "title": "The Shawshank Redemption",
        "posterPath": "../../assets/shawshank.jpg"
    },
    {
        "id": 3,
        "title": " Schindler's List",
        "posterPath": "../../assets/schindler.jpg"
    },
    {
        "id": 4,
        "title": "Raging Bull",
        "posterPath": "../../assets/ragingBull.jpg"
    },
    {
        "id": 5,
        "title": " Casablanca",
        "posterPath": "../../assets/casablanca.jpg"
    },
    {
        "id": 6,
        "title": " Citizen Kane",
        "posterPath": "../../assets/citizenKane.jpg"
    },
    {
        "id": 7,
        "title": " Gone with the Wind",
        "posterPath": "../../assets/goneWithTheWind.jpg"
    },
    {
        "id": 8,
        "title": "The Wizard of Oz",
        "posterPath": "../../assets/theWizardOfOz.jpg"
    },
    {
        "id": 9,
        "title": "One Flew Over the Cuckoo's Nest",
        "posterPath": "../../assets/oneFlewOver.jpg"
    },
    {
        "id": 10,
        "title": "Lawrence of Arabia",
        "posterPath": "../../assets/lawrenceOfArabia.jpg"
    }
    ];
    constructor() {
        // this.movieList.push({ id: 1, title: "Wireframe Design", posterPath: "path1" });
        // this.movieList.push({ id: 2, title: "Static UI Design", posterPath: "path2" });
        // this.movieList.push({ id: 3, title: "Backend preparation", posterPath: "path3" });
    }
}
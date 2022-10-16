export class BlogsDataModel {
    public title: string;
    public description: string;
    public category: string;
    public image: string;
    public author: string;


    constructor(title: string, description: string, category: string, image: string, author: string) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.image = image,
        this.author = author;
    }
}
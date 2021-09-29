export class Cruises {
    constructor(
   public id: number,
   public order: null,
   public slug: string,
   public title: string,
   public Description: string,
   public image: string,
   public imageAlt: string,
   public imageTitle: string,
   public inclusions: string,
   public exclusions: string,
   public address: string,
   public meta: {
        metaTitle: string,
        metaKeywords: string,
        metaDescription: string
}[],
    public items: {
        id: number,
        image: string,
        imageAlt: string,
        title: string,
        Description: string,
        type: string,
        package_id: number,
        order: number,
        galleries: {
            id: number,
            image: string,
            imageAlt: string,
            title: string,
            Description: string,
            type: string,
            package_id: number,
            order: number,
        }[],
        
    }[],
    public services: {
        id: number,
        title: string,
        Description: string,
        image: string,
        imageAlt: null,
        imageTitle: null,
        package_id: number,
        order: number
    }[],
    public facilities:{
        id: number,
        title: string,
        Description: string,
        image: string,
        imageAlt: null,
        imageTitle: null,
        package_id: number,
        order: number
    }
) {}
}
export interface ProductMetadata{
    id:string;
    name:string;
    price:number;
}

export interface ProductStore extends ProductMetadata{
    quantity:number;
    description:string;
    starsNumber:number;
    discount:number;
    category:string;
    coverUrl:string;
}

export interface ShoppingCart{
    products:ProductStore[];
    total:number;
}
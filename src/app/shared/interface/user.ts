import { CreditCard } from "./credit-card";

export interface User {
    image:string;
    name:string;
    title:string;
    bio:string;
    organization:string;
    location:string;
    email:string;
    creditcards:CreditCard[];
    password:string;
    alreadyViewed:boolean;
}

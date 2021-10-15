import { Country } from "./country";

export interface Document {
    id: number;
    title: string;
    summary: string;
    category: string;
    subTitle: string;
    type: string;
    pageCount: number;
    publisherImage : string;
    publisher: string;
    datePublished: Date;
    industry: string;
    fileSize: string,
    brand: string;
    productLine: string;
    studyType: string;
    research: {
        type: string;
        method: string;
    },
    tags: string;
    keywords: string;
    price:number;
    country: Country;

}

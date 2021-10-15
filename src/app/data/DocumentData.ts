import { Document } from "../shared/interface/document";
import countryData from './CountryData';
const data: Document[] = [];

for (let i = 1; i < 9; i++) {
    data.push({
        id: i,
        title: 'How COVID affected Asia’s economy ' + i,
        summary: `In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.`,
        category: 'Regional',
        subTitle: 'Executive Summary ' + i,
        type: i % 4 === 0 ? 'Data' : i % 4 === 1 ? 'Report' : i % 4 === 2 ? 'Video' : 'Image',
        pageCount: Math.floor(Math.random() * 100),
        publisher: 'Harold Lee',
        datePublished: new Date(2021, 3, i),
        fileSize: '75 kb',
        industry: 'Lorem Ipsum',
        brand: i % 2 === 0 ? 'Lorem' : 'Ipsum',
        productLine: 'Lorem Ipsum',
        studyType: i % 2 === 0 ? 'Lorem' : 'Ipsum',
        research: {
            type: 'Lorem Ipsum',
            method: 'Lorem Ipsum',
        },
        tags: 'Lorem Ipsum',
        keywords: 'Lorem Ipsum',
        price: Math.floor(Math.random() * 100),
        publisherImage: '/assets/profile-1.png',
        country: countryData[i % 3]
    })
}

export default data;
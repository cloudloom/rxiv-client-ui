import { User } from "../shared/interface/user";

const data: User = {
    image: '/assets/profile-1.png',
    name: 'Thomas Tay',
    title: 'Executive Manager',
    bio: 'Im on a seafood diet',
    organization: 'Company',
    location: 'Singapore',
    email: 'thomas@company.com',
    creditcards: [{
        name: 'Thomas Tay',
        creditCardNo: "7014-3568-4512-1223",
        expiryDate: new Date(),
        cvv: '456789',
        billingAddress: 'E2 7345',
        postalCode: '670549'
    }],
    password: '******',
    alreadyViewed:false
};

export default data;
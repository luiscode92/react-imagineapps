const mockData = {
    users: [
        {
            id: '1',
            email: 'admin@example.com',
            password: 'password123',
            isAdmin: true,
        },
        {
            id: '2',
            email: 'user@example.com',
            password: 'password123',
            isAdmin: false,
        },
    ],
    companies: [
        {
            id: '1',
            name: 'Company 1',
            address: '123 First Ave',
            nit: '123456',
            phone: '123-456-7890',
            products: [
                {
                    id: '1',
                    name: 'Product 1',
                    quantity: 20,
                    price: 10.0,
                    description: 'This is a product',
                    image: 'imageURL',
                },
            ],
        },
        {
            id: '2',
            name: 'Company 2',
            address: '456 Second St',
            nit: '789012',
            phone: '098-765-4321',
            products: [
                {
                    id: '1',
                    name: 'Product A',
                    quantity: 30,
                    price: 15.0,
                    description: 'This is another product',
                    image: 'imageURL',
                },
            ],
        },
        {
            id: '3',
            name: 'Company 3',
            address: '789 Third Blvd',
            nit: '345678',
            phone: '567-890-1234',
            products: [
                {
                    id: '1',
                    name: 'Product Alpha',
                    quantity: 10,
                    price: 25.0,
                    description: 'This is yet another product',
                    image: 'imageURL',
                },
            ],
        },
        {
            id: '4',
            name: 'Company 4',
            address: '012 Fourth Rd',
            nit: '901234',
            phone: '234-567-8901',
            products: [
                {
                    id: '1',
                    name: 'Product One',
                    quantity: 50,
                    price: 20.0,
                    description: 'This is a different product',
                    image: 'imageURL',
                },
            ],
        },
    ],
};

export default mockData;

export class user {
    id: number;
    name: string;
    company: [{
        company_id: number,
        name: string,
        employee: [{
            emp_id: number,
            name: string,
            password: string
        }]
    }];
}
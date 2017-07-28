export class user {
    id: number;
    name: string;
    user: [{
        company_id: number,
        name: string,
        employee: [{
            emp_id: number,
            name: string,
            password: string
        }]
    }];
}
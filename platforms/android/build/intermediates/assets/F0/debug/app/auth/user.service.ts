import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    private User = [
        {
            id: 1, name: "on.lk", user: [
                {
                    company_id: 1, name: "fluke", employee: [
                        { emp_id: 1, name: "fluke", password: "1234" },
                        { emp_id: 2, name: "bb", password: "1234" },
                        { emp_id: 3, name: "fern", password: "1234" },
                        { emp_id: 4, name: "zee", password: "1234" },
                    ]
                },
                {
                    company_id: 2, name: "eiei", employee: [
                        { emp_id: 1, name: "fluke", password: "1234" },
                        { emp_id: 2, name: "bb", password: "1234" },
                        { emp_id: 3, name: "fern", password: "1234" },
                        { emp_id: 4, name: "zee", password: "1234" },
                    ]
                },
            ]
        },
    ];

    getUsers() {
        return this.User;
    }

    getUser(id: number) {
        return this.User.filter(user => user.id === id)[0];
    }
}

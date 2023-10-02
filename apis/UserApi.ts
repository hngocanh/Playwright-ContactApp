import { APIRequestContext } from "@playwright/test";
import User from "../Models/user";

export default class UserApi {
    async signup(request: APIRequestContext, user: User) {
        return await request.post('/users', {
            data: {
                email: user.getEmail(),
                password: user.getPassword(),
                firstName: user.getFirstName(),
                lastName: user.getLastName(),
            },
        });
    }
}
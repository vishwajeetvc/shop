import conf from "./config/conf";

export class UserService {
    url;
    constructor() {
        this.url = conf.url;
    }

    async addNewUser({ name, mobile, address }) {
        // api call
        return
    }
}

const userService = new UserService();

export default userService;
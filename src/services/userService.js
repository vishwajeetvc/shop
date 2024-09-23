import conf from "./config/conf";

export class UserService {
    url;
    constructor() {
        this.url = conf.url;
    }

    async addNewUser({ name, mobile, address }) {
        try {
            // api call
            const result = await fetch(`${conf.url}users/addUser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, mobile, address }),
            });
            let data = await result.json();
            return data;
        } catch (err) {
            return {err:"Can't connect Now"}
        }
    }

    async checkUser({ mobile }) {
        try {
            const result = await fetch(`${conf.url}users/checkUser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ mobile}),
            });
            let data = await result.json();
            return data;
        } catch (err) {
            console.log(err);
            return {err:"Can't connect Now"}
        }
    }
}

const userService = new UserService(); 

export default userService;
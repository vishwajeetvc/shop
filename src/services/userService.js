import conf from "./config/conf";

export class UserService {
    // url;
    // constructor() {
    //     this.url = conf.url;
    // }

    async addNewUser({ name, mobile, address }) {
        try {
            // console.log(conf.url);
            const result = await fetch(`http://localhost:6060/addUser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, mobile, address }),
            });
            console.log(result.json());
            return result;
        } catch (err) {
            console.log(err);
            return err
        }
        // api call
    }
}

const userService = new UserService();

export default userService;
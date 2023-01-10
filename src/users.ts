import axios from "axios";

class Users {
  static async all() {
    const resp = await axios.get("http://localhost:12123/api/users");
    return resp.data;
  }
}

export default Users;

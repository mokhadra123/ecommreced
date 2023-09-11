import { IUser, UserType } from "../../types";

export default class User implements IUser {
  getUsers(): UserType[] {
    return JSON.parse(localStorage.getItem("users") as string);
  }
  login(user: UserType): boolean {
    const users = this.getUsers();
    const auth = users.find(
      (item) => item.email === user.email && item.password === user.password
    );
    if (auth) {
      localStorage.setItem("auth", JSON.stringify(auth));
      return true;
    } else {
      return false;
    }
  }
  signUp(user: UserType): boolean {
    const users = this.getUsers();
    const userExist = users.findIndex((item) => item.email === user.email);
    if (userExist > -1) {
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      return true;
    } else {
      return false;
    }
  }
}

//creation of admin email

const adminObj = new User();
adminObj.signUp({ email: "admin@admin.com", password: "admin", admin: true });

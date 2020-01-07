import axios from "axios";
export function exec(callback: Function | undefined) {
  callback && callback("123");
  callback && callback("456");
}

export function createInstance(ClassName: any) {
  return new ClassName();
}

export function getUser() {
  return axios.get("/api/users");
}

export function delay(callback: Function | undefined, time: number) {
  setTimeout(() => {
    callback && callback(time);
  }, time);
}

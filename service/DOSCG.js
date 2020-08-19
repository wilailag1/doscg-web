import axios from "axios";

const urlGmap = "https://doscg-bot-demo.herokuapp.com/doscg/findWay";

export function getGmap(param) {
  return axios.post(urlGmap, param);
}
export async function findXyz(param) {
  return await axios.post(
    "https://doscg-bot-demo.herokuapp.com/doscg/findXYZ",
    param
  );
}
export async function findAbc(param) {
  return await axios.post(
    "https://doscg-bot-demo.herokuapp.com/doscg/findABC",
    param
  );
}

import { doRequest } from "../../helpers/Request";
import { API_URL } from "../../constants";

export default class Message {

  static async sendMessage(name, email, message, onSuccess) {
    doRequest(`${API_URL}/messages`, "POST", {
        name,
        email,
        message,
    }).then((result) => {
        onSuccess && onSuccess();
    });
  }

}
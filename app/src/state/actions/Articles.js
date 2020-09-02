import AppState from "../AppState";
import { doRequest } from "../../helpers/Request";
import { API_URL } from "../../constants";
import sortArticles from "../../helpers/sortArticles";

export default class Articles {

  static async listAll() {
    doRequest(`${API_URL}/articles`, "GET").then((result) => {
      const sorted = sortArticles(result.data);
      AppState.set({
        articles: {
          all: sorted
        }
      });
    });
  }

  static async listCategory(type) {
    doRequest(`${API_URL}/articles?type=${type}`, "GET").then((result) => {
      const sorted = sortArticles(result.data);
      AppState.set({
        articles: {
          [type]: sorted
        }
      });
    }); 
  }

  static async listHighlighted() {
    doRequest(`${API_URL}/articles?highlighted=true`, "GET").then((result) => {
      const sorted = sortArticles(result.data);
      AppState.set({
        articles: {
          highlighted: sorted
        }
      });
    });
  }

  static setArticle(uri) {
    AppState.set({
      articles: {
        currentArticle: uri,
      }
    });
  }
}
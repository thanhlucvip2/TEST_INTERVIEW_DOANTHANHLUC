import { ENPOINT } from "./../endpoint";
import { AxiosResponse } from "axios";
import AxiosClient from "../axios";
import { ResponseModel } from "../../model/response.model";
import { AllJokesModel } from "../../model/all-jokes.model";
import { getCookie } from "../../utils/cookies";

export const apiJokesAxios = {
  getAllJokes(
    id?: string,
    like?: number,
    dislike?: number
  ): Promise<AxiosResponse<ResponseModel<AllJokesModel>>> {
    var config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${ENPOINT.allJokes}?like=${like ?? ""}&dislike=${
        dislike ?? ""
      }&id=${id ?? ""}&page=1&size=10`,
      headers: {
        cookies: getCookie("jokesId"),
      },
    };

    return AxiosClient(config);
  },
  createJoke({ title, content }: { title: string; content: string }) {
    return AxiosClient.post(ENPOINT.createJoke, { title, content });
  },
};

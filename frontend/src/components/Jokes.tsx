import { useEffect, useState } from "react";
import { apiJokesAxios } from "../axios/jokes/api-public";
import { AllJokesModel, JokesItemModel } from "../model/all-jokes.model";
import { getCookie, setCookie } from "../utils/cookies";

const JokesComponent = () => {
  const [allJokes, setAllJokes] = useState<AllJokesModel | null>(null);

  useEffect(() => {
    (() => {
      getAllJokes();
    })();
  }, []);

  const getAllJokes = async (id?: string, like?: number, dislike?: number) => {
    try {
      const response = await apiJokesAxios.getAllJokes(id, like, dislike);
      setAllJokes(response.data.data);
    } catch (error) {}
  };
  const actionJoke = (data: JokesItemModel, action: string) => {
    const id = data._id;
    let like = data.like;
    let dislike = data.dislike;
    if (action === "like") {
      like++;
    } else if (action === "dislike") {
      dislike++;
    }
    const cookie = getCookie("jokesId");
    let arrayFind = [];
    if (cookie) {
      arrayFind = JSON.parse(cookie);
    }
    setCookie("jokesId", JSON.stringify([...arrayFind, id]), 24);
    nextJoke(id, like, dislike);
  };

  const nextJoke = (id: string, like: number, dislike: number) => {
    getAllJokes(id, like, dislike);
  };
  return (
    <>
      {allJokes?.item[0] ? (
        <div className="body-box">
          <div className="body-box-title">
            <div className="container">
              <h2>{allJokes?.item[0].title}</h2>
              <p>if you joke wrong way, your teeth have top pay, serious</p>
            </div>
          </div>
          <div className="container body-layout">
            <div className="body-content">{allJokes?.item[0].content}</div>
            <div className="body-box-btn">
              <button
                className="btn btn-blue"
                onClick={() => actionJoke(allJokes?.item[0], "like")}
              >
                This is funny
              </button>
              <button
                className="btn btn-green"
                onClick={() => actionJoke(allJokes?.item[0], "dislike")}
              >
                This is not funny
              </button>
              <div className="box-icon-like">
                <div>
                  <img
                    src="/assets/icons/like.png"
                    alt=""
                    className="icon-like"
                  />
                  : {allJokes?.item[0].like}
                </div>
                <div>
                  <img
                    src="/assets/icons/dislike.png"
                    alt=""
                    className="icon-like"
                  />
                  : {allJokes?.item[0].dislike}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : allJokes ? (
        <div className="body-layout container">
          "That's all the jokes for today! Come back another day!"
        </div>
      ) : null}
    </>
  );
};
export default JokesComponent;

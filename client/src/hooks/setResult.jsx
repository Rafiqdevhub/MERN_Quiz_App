import { postServerData } from "../helper/helper";
import * as Action from "../redux/result_reducer";

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};
export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.log(error);
  }
};

export const usePublishResult = (resultData) => {
  const { result, username } = resultData;
  (async () => {
    try {
      const serverHostname = import.meta.env.VITE_APP_SERVER_HOSTNAME;
      if (!serverHostname) {
        throw new Error(
          "Server hostname is not defined in environment variables"
        );
      }
      if (result != [] && !username) throw new Error("Couldn't get Result");
      await postServerData(
        `${serverHostname}/api/result`,
        resultData,
        (data) => data
      );
    } catch (error) {
      console.log(error);
    }
  })();
};

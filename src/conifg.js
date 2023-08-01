export const CLIENT_ID =
  "861613228284-du458fkr6257kispujdnfq5464vcfi19.apps.googleusercontent.com";

export const initClient = () => {
  return new Promise((resolve, reject) => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          //   apiKey: "<YOUR_API_KEY>",
          clientId: CLIENT_ID,
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
          ],
          scope: "https://www.googleapis.com/auth/drive.file",
        })
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

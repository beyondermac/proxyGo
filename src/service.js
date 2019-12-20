import axios from "axios";

const confirmSignUp = body => {
  console.log(body);
  axios
    .post("https://api-dev.gospace.com/v1-3/signin/password", body)
    .then(result => console.log("SUCCESS: ", result))
    .catch(error => console.log("ERROR: ", error));
};
export default confirmSignUp;

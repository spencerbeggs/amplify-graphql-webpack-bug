import AWSAmplify from "@aws-amplify/core";
import AWSAuth from "@aws-amplify/auth";
import AWSAPI from "@aws-amplify/api";

export const Amplify = AWSAmplify.configure({
  Auth: {
    identityPoolId: "us-east-1:2e5970f3-5c74-4dce-9937-8d64539005ec",
    region: "us-east-1",
    userPoolId: "us-east-1_XSmlV57XW",
    userPoolWebClientId: "7h9dgev77aa9qq214n9cibibot"
  },
  API: {
    endpoints: [
      {
        name: "auth",
        endpoint: "https://staging.api.youcanchangeyourcreditscore.com",
        custom_header: async () => ({
          Authorization: (await Auth.currentSession()).idToken.jwtToken
        })
      },
      {
        name: "unauth",
        endpoint: "https://staging.api.youcanchangeyourcreditscore.com"
      }
    ]
  }
});
export const Auth = AWSAuth;
export { Hub } from "@aws-amplify/core";
export const API = AWSAPI;

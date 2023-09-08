import * as lbdClient from "@line/lbd-sdk-js";

const config = {
    baseUrl: "https://test.com",
    apiKey: "test",
    apiSecret: "test"
};
const { baseUrl, apiKey, apiSecret } = config;
const httpLbdClient = new lbdClient.HttpClient(baseUrl, apiKey, apiSecret);
export default httpLbdClient;

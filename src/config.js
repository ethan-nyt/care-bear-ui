import dotenv from 'dotenv';
dotenv.config();

const ROOT_URL = "https://0d483abd90fc.ngrok.io"

export const API_URLS = {
  GET_ISSUES: `${ROOT_URL}/issues`,
  UPDATE_ISSUE: `${ROOT_URL}/update`,
  DELETE_ISSUE: `${ROOT_URL}/delete`,
}

export const AXIOS_CONFIG = {
  headers: {
    'slack-verification-token': process.env.REACT_APP_VERIFICATION_TOKEN,
  },
};
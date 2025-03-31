"use client";

import axios from "axios";

const isBrowser = typeof window !== "undefined";
const token = isBrowser ? localStorage.getItem("vio-token") : "";

// First instance: uses token from localStorage
const baseURLToken =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5567/api"
    : isBrowser && window.location.hostname.includes("v-io.info")
    ? "https://v-io.info/api"
    : "https://vio.er-ic.ca/api";

export const instance = axios.create({
  baseURL: baseURLToken,
  headers: {
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
  },
});

if (isBrowser) {
  instance.interceptors.request.use(
    (config) => {
      const currentToken = localStorage.getItem("vio-token");
      if (currentToken) {
        config.headers.Authorization = `Bearer ${currentToken}`;
      } else {
        delete config.headers.Authorization;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
}

// Second instance: creates an instance using a provided API key
const baseURLApi =
  isBrowser && window.location.hostname.includes("v-io.info")
    ? "https://api.v-io.info"
    : "https://api.vio.er-ic.ca";

export const createApiInstance = (apiKey) => {
  return axios.create({
    baseURL: `${baseURLApi}/v1`,
    headers: {
      "x-api-key": apiKey,
    },
  });
};
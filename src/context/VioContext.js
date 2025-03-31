"use client";

import { createContext, useState, useEffect } from "react";
import { instance } from "@/lib/apiClients";
import CryptoJS from "crypto-js";

const SECRET_KEY = "IfuSeeThis!Thisisjustextrapercausianbutthebackendstillwontletyou";

function encryptData(data) {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
}

function decryptData(cipherText) {
  try {
    if (!cipherText || typeof cipherText !== "string") {
      console.warn("decryptData: Invalid or missing cipherText:", cipherText);
      return null;
    }

    const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);

    if (!bytes) {
      console.warn("decryptData: Decryption returned null bytes.");
      return null;
    }

    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    if (!decryptedText) {
      console.warn("decryptData: Decryption failed — empty result.");
      return null;
    }

    return JSON.parse(decryptedText);
  } catch (error) {
    console.error("Failed to decrypt data:", error);
    return null;
  }
}

export const VioContext = createContext({
  VioUser: null,
  setVioUser: () => {},
  fetchUserData: () => {},
  logout: () => {},
  loading: true,
});

export default function VioProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("vio-token") || "" : ""
  );
  const [VioUser, setVioUser] = useState(() =>
    typeof window !== "undefined"
      ? decryptData(sessionStorage.getItem("vio-user")) || null
      : null
  );

  const fetchUserData = async (incomingToken = token) => {
    if (!incomingToken) return;
    try {
      instance.defaults.headers.common["Authorization"] = `Bearer ${incomingToken}`;
      const res = await instance.get("/auth/@me/permissions");
      setVioUser(res.data);
    } catch (err) {
      console.error("Failed to get permissions", err);
      logout(); // optional: auto-logout on failure
    }
  };

  const logout = () => {
    localStorage.removeItem("vio-token");
    sessionStorage.removeItem("vio-user");
    setToken("");
    setVioUser(null);
  };

  // On first load: try to load user if token exists
  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    const loadUser = async () => {
      await fetchUserData(token);
      setLoading(false);
    };

    loadUser();
  }, [token]);

  // Save encrypted user when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (VioUser) {
        sessionStorage.setItem("vio-user", encryptData(VioUser));
      } else {
        sessionStorage.removeItem("vio-user");
      }
    }
  }, [VioUser]);

  return (
    <VioContext.Provider
      value={{ VioUser, setVioUser, fetchUserData, logout, loading }}
    >
      {children}
    </VioContext.Provider>
  );
}
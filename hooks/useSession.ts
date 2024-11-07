// src/hooks/useSessionCheck.js
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useAppSelector } from "./useAppSelector";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const useSessionCheck = () => {
  const [isSessionActive, setIsSessionActive] = useState(false);
  const router = useRouter();
  const userSession = useAppSelector((state) => state.session.session);
  const {navigate: navigateAuth} : NavigationProp<AuthNavigationType>= useNavigation()

  useEffect(() => {
    const checkSession = async () => {
      if (userSession) {
        setIsSessionActive(true);
        navigateAuth("home"); // Redirect to the home screen if session exists
      } else {
        setIsSessionActive(false);
        navigateAuth("Login"); // Redirect to the login screen if no session exists
      }
    };

    checkSession();
  }, [userSession, router]);

  return [isSessionActive];
};

export default useSessionCheck;

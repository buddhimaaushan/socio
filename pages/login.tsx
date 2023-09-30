import LoginModal from "@/components/modals/LoginModal";
import useLoginModal from "@/hooks/useLoginModal";
import React, { useEffect } from "react";

const Login = () => {
  const loginModal = useLoginModal();
  useEffect(() => {
    loginModal.onOpen();
  }, []);
  return <LoginModal noClose />;
};

export default Login;

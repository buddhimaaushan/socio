import RegisterModal from "@/components/modals/RegisterModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import React, { useEffect } from "react";

const Register = () => {
  const registerModal = useRegisterModal();
  useEffect(() => {
    registerModal.onOpen();
  }, []);
  return <RegisterModal noClose />;
};

export default Register;

import React from "react";
import LoginPage from "../login/LoginPage";

interface LoginModalPorps {
  setIsLoginModalOpen: (isOpen: boolean) => void;
  setIsSignUpModalOpen: (isOpen: boolean) => void;
}

const LoginModal: React.FC<LoginModalPorps> = ({
  setIsLoginModalOpen,
  setIsSignUpModalOpen,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <LoginPage
        title="WELCOME BACK"
        subTitle="Log into your account"
        setIsLoginModalOpen={setIsLoginModalOpen}
        setIsSignUpModalOpen={setIsSignUpModalOpen}
      />
    </div>
  );
};

export default LoginModal;

import React, { useState } from "react";

import LoginModal from "../loginModal/LoginModal";
import SignUpModal from "../signUpModal/SignUpModal";
import CreatePost from "../createPost/CreatePost";
import ShowPost from "../showPost/ShowPost";

const CommunityPost: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  return (
    <>
      <div className="App min-h-screen p-6 mt-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-28px text-custom-gray">Hello Jane</h1>
          <p className="text-lightWhite mb-6">
            How are you doing today? Would you like to share something with the
            <span className="whitespace-nowrap"> community? 🤗</span>
          </p>
          <CreatePost setIsSignUpModalOpen={setIsSignUpModalOpen} />
          <ShowPost />
          <ShowPost />
        </div>
      </div>
      {isLoginModalOpen && (
        <LoginModal
          setIsLoginModalOpen={setIsLoginModalOpen}
          setIsSignUpModalOpen={setIsSignUpModalOpen}
        />
      )}
      {isSignUpModalOpen && (
        <SignUpModal
          title="SIGN UP"
          subTitle="Create an account to continue"
          setIsLoginModalOpen={setIsLoginModalOpen}
          setIsSignUpModalOpen={setIsSignUpModalOpen}
        />
      )}
    </>
  );
};

export default CommunityPost;

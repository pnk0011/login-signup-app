import React, { useState } from "react";
import ChatIcon from "../../assets/chat.svg";
import CTAction from "../../assets/CTA.svg";
import LoginModal from "../loginModal/LoginModal";
import SignUpModal from "../signUpModal/SignUpModal";

const CreatePost: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  return (
    <>
      <div className="App min-h-screen p-6 mt-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-28px text-custom-gray">Hello Jane</h1>
          <p className="text-lightWhite mb-6">
            How are you doing today? Would you like to share something with the
            <span className="whitespace-nowrap">community? 🤔</span>
          </p>
          <div className="bg-cardBg  px-4 py-6 rounded-lg mb-4 border-2px border-custom-dark-gray">
            <p className="text-custom-gray text-lg"> Create post</p>
            <div className="relative mt-2">
              <input
                className="w-full px-2 py-7 rounded-lg bg-custom-input-black text-white placeholder-lightWhite pl-10"
                type="text"
                placeholder="How are you feeling today?"
              />

              <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                💬
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsSignUpModalOpen(true)}
                className="bg-blue-500 text-white w-[111px] h-[43px] rounded flex items-center justify-center"
              >
                Post
              </button>
            </div>
          </div>
          <div className="bg-cardBg  px-4 py-6 rounded-lg mb-4 border-2px border-custom-dark-gray">
            <div className="flex justify-between  space-x-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Theresa Webb"
                  />
                </div>
                <div>
                  <div className="text-custom-gray font-medium">
                    Theresa Webb
                  </div>
                  <p className="text-lightWhite text-sm">5 mins ago</p>
                </div>
              </div>
              <div>
                <img src={CTAction} />
              </div>
            </div>

            <div className="relative mt-4">
              <div className="w-full px-2 py-7 rounded-lg bg-custom-input-black text-lightWhite placeholder-gray-400 pl-10">
                <p className="mt-2">
                  This is some random comments This is some random comments This
                </p>
              </div>
              <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                👋
              </div>
            </div>
            <div className="flex items-center mt-4">
              <img alt="chat icon" src={ChatIcon} className="mr-2" />
              <span className="text-lightWhite">24 comments</span>
            </div>
          </div>
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

export default CreatePost;

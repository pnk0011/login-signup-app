import React from "react";
import CrossIcon from "../../assets/crossIcon.svg";
import EyeIcon from "../../assets/EyeIcon.svg";

type ICard = {
  title: string;
  subTitle: string;
  showCrossIcon: boolean;
  setIsLoginModalOpen?: (isOpen: boolean) => void;
  setIsSignUpModalOpen?: (isOpen: boolean) => void;
  setShowCommunityPost?: (showCommunityPost: boolean) => void;
};

const Card: React.FC<ICard> = ({
  title,
  subTitle,
  showCrossIcon,
  setIsLoginModalOpen,
  setIsSignUpModalOpen,
  setShowCommunityPost,
}) => {
  const handleModalClose = () => {
    setIsLoginModalOpen && setIsLoginModalOpen(false);
    setShowCommunityPost && setShowCommunityPost(true);
  };

  const handleSignUpClick = () => {
    setIsLoginModalOpen && setIsLoginModalOpen(false);
    setIsSignUpModalOpen && setIsSignUpModalOpen(true);
  };
  return (
    <div className="max-w-sm border border-card-border border-2px rounded-custom overflow-hidden shadow-lg bg-cardBg w-card-width h-card-height">
      <div className="px-6  flex justify-center flex-col mt-2 relative">
        <div className="flex justify-center relative">
          <div className="px-6 py-4 flex justify-center flex-col mt-4">
            <div className="text-textGray text-14px text-center">{title}</div>
            <p className="text-base text-center text-18px text-white">
              {subTitle}
            </p>
          </div>
          {showCrossIcon && (
            <img
              src={CrossIcon}
              alt="cross icon"
              className="absolute top-4 right-0 cursor-pointer"
              onClick={handleModalClose}
            />
          )}
        </div>
        {/* <div className="text-textGray text-14px text-center">{title}</div>
        <p className=" text-base text-center text-18px text-white">
          {subTitle}
        </p> */}
      </div>
      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm px-6">
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-textLogin"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email or username"
                autoComplete="email"
                className="block w-full border border-custom-black rounded border-1.5 text-white bg-cardBg p-4 border-1.5 px-2 py-1.5  placeholder:text-placeholder-base text-white sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-textLogin"
              >
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="text-xs font-medium text-textLogin">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="relative mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                className="block w-full border border-custom-black border-1.5 text-white rounded bg-cardBg p-4 py-1.5 shadow-sm placeholder:text-placeholder-base  focus:text-white  sm:text-sm sm:leading-6"
              />
              <img
                src={EyeIcon}
                alt="eye icon"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
              />
              {/* <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400">
                💬
              </div> */}
            </div>
          </div>

          <div>
            <button
              onClick={handleModalClose}
              className="flex w-full justify-center rounded p-4 bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login now
            </button>
          </div>
        </form>

        <p className="mt-2 text-sm font-medium text-placeholder">
          Not registered yet?{" "}
          <a
            href="#"
            onClick={handleSignUpClick}
            className="leading-6  text-textLogin"
          >
            Register →
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;

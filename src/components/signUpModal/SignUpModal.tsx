import CrossIcon from "../../assets/crossIcon.svg";

type ICard = {
  title: string;
  subTitle: string;
  setIsLoginModalOpen: (isOpen: boolean) => void;
  setIsSignUpModalOpen: (isOpen: boolean) => void;
};

const SignUpModal: React.FC<ICard> = ({
  title,
  subTitle,
  setIsLoginModalOpen,
  setIsSignUpModalOpen,
}) => {
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsSignUpModalOpen(false);
  };
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="max-w-sm rounded-custom overflow-hidden shadow-lg bg-cardBg w-card-width">
        <div className="flex justify-center relative">
          <div className="px-6 py-4 flex justify-center flex-col mt-4">
            <div className="text-textGray text-14px text-center">{title}</div>
            <p className="text-base text-center text-18px text-white">
              {subTitle}
            </p>
          </div>
          <img
            src={CrossIcon}
            alt="cross icon"
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setIsSignUpModalOpen(false)}
          />
        </div>
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm px-6 mb-8">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-textLogin"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="block w-full border border-borderGray rounded border-1.5 text-white bg-cardBg p-4 border-1.5 px-2 py-1.5  placeholder:text-placeholder-base text-white sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-textLogin"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Choose a preferred username"
                  autoComplete="email"
                  className="block w-full border border-borderGray rounded border-1.5 text-white bg-cardBg p-4 border-1.5 px-2 py-1.5  placeholder:text-placeholder-base text-white sm:text-sm sm:leading-6"
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
                {/* <div className="text-sm">
                  <a href="#" className="text-xs font-medium text-textLogin">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Choose a strong password"
                  autoComplete="current-password"
                  className="block w-full border border-borderGray border-1.5  text-white rounded bg-cardBg p-4 py-1.5  shadow-sm  placeholder:text-placeholder-base  focus:text-white  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={() => setIsSignUpModalOpen(false)}
                className="flex w-full justify-center rounded p-4 bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue
              </button>
            </div>
          </form>

          <p className="mt-2 text-sm font-medium text-placeholder">
            Not registered yet?{" "}
            <a
              onClick={openLoginModal}
              className="leading-6  text-textLogin cursor-pointer"
            >
              Login →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;

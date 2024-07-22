import Logo from "../../assets/logo.svg";
import LoginPage from "../login/LoginPage";

interface LandingPageProps {
  setShowCommunityPost: (showCommunityPost: boolean) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ setShowCommunityPost }) => {
  return (
    <>
      <div className="flex h-screen flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-8">
          <img alt="Brand Logo" src={Logo} className="mx-auto h-10 w-auto" />
        </div>
        <LoginPage
          title="WELCOME BACK"
          subTitle="Log into your account"
          showCrossIcon={false}
          setShowCommunityPost={setShowCommunityPost}
        />
      </div>
    </>
  );
};

export default LandingPage;

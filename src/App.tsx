import Logo from "./assets/logo/logo.svg";
import LoginPage from "./components/login/LoginPage";
import CommunityPost from "./components/communityPost/CommunityPost";
import CreatePost from "./components/createPost/CreatePost";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex h-screen flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
        {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-8">
          <img alt="Brand Logo" src={Logo} className="mx-auto h-10 w-auto" />
        </div>
        <LoginPage title="WELCOME BACK" subTitle="Log into your account" /> */}
        <CreatePost />
        {/* <CommunityPost
          userName="Jane"
          userImage={Logo}
          postContent="This is post content"
          commentsCount={2}
          postTime="2 mins"
        /> */}
      </div>
    </>
  );
}

export default App;

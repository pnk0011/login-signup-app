import { useState } from "react";

import LandingPage from "./components/landingPage/LandingPage";
import CreatePost from "./components/createPost/CreatePost";

function App() {
  const [showCommunityPost, setShowCommunityPost] = useState(false);
  return (
    <>
      {showCommunityPost ? (
        <CreatePost />
      ) : (
        <LandingPage setShowCommunityPost={setShowCommunityPost} />
      )}
    </>
  );
}

export default App;

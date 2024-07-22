import { useState } from "react";

import LandingPage from "./components/landingPage/LandingPage";
import CommunityPost from "./components/communityPost/CommunityPost";

function App() {
  const [showCommunityPost, setShowCommunityPost] = useState(false);
  return (
    <>
      {showCommunityPost ? (
        <CommunityPost />
      ) : (
        <LandingPage setShowCommunityPost={setShowCommunityPost} />
      )}
    </>
  );
}

export default App;

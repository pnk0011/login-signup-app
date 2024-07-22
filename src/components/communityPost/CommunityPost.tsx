import React from "react";

interface CommunityPostProps {
  userName: string;
  userImage: string;
  postContent: string;
  commentsCount: number;
  postTime: string;
}

const CommunityPost: React.FC<CommunityPostProps> = ({
  userName,
  userImage,
  postContent,
  commentsCount,
  postTime,
}) => {
  return (
    <div className="p-4 max-w-md mx-auto rounded-xl shadow-md space-y-4 text-white">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 rounded-full"
            src={userImage}
            alt={userName}
          />
        </div>
        <div>
          <div className="text-xl font-medium">{userName}</div>
          <p className="text-gray-400">{postTime} ago</p>
        </div>
      </div>
      <p className="text-gray-300">{postContent}</p>
      <div className="flex items-center justify-between text-gray-400">
        <div>
          <svg
            className="w-5 h-5 inline-block mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2.928 12.09a6.5 6.5 0 1010.644 5.62c-.34.06-.69.09-1.045.09H9l-1 4-2.5-4h-2a6.53 6.53 0 01-2.527-.51zm10.576-2.683a5.5 5.5 0 111.66-3.683 5.5 5.5 0 01-1.66 3.683zM5 6.5A1.5 1.5 0 106.5 5 1.5 1.5 0 005 6.5z"></path>
          </svg>
          <span>{commentsCount} comments</span>
        </div>
      </div>
    </div>
  );
};

export default CommunityPost;

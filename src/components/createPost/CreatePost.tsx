interface CreatePostProps {
  setIsSignUpModalOpen?: (isOpen: boolean) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ setIsSignUpModalOpen }) => {
  return (
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
          onClick={() => setIsSignUpModalOpen && setIsSignUpModalOpen(true)}
          className="bg-blue-500 text-white w-[111px] h-[43px] rounded flex items-center justify-center"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;

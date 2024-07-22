import ChatIcon from "../../assets/chat.svg";
import CTAction from "../../assets/CTA.svg";

const ShowPost = () => {
  return (
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
            <div className="text-custom-gray font-medium">Theresa Webb</div>
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
  );
};

export default ShowPost;

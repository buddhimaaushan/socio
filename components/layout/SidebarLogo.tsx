import { HiChatBubbleOvalLeft } from "react-icons/hi2";

const SidebarLogo = () => {
  return (
    <div
      className="
        rounded-full
        xl:rounded-2xl 
        h-14
        w-full
        p-4 
        font-bold
        flex 
        items-center justify-start 
        gap-2
        text-red-500
        transition-all
    "
    >
      <HiChatBubbleOvalLeft size={28} />
      SOCiO
    </div>
  );
};

export default SidebarLogo;

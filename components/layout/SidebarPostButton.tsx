import { useCallback } from "react";
import { MdPostAdd } from "react-icons/md";
import { useRouter } from "next/router";

import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";

const SidebarPostButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();

  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    router.push("/");
  }, [loginModal, router, currentUser]);

  return (
    <div onClick={onClick} className="hidden xl:flex justify-center w-full">
      <div
        className="
        mt-6
        flex
        w-full
        justify-center
        items-center
        gap-2
        px-4
        py-3
        rounded-2xl
        bg-red-600
        hover:bg-opacity-70 
        active:scale-95
        cursor-pointer
        transition-all
        select-none
      "
      >
        <MdPostAdd size={24} />
        <p
          className="
            text-center
            font-semibold
            text-[20px]
        "
        >
          Post
        </p>
      </div>
    </div>
  );
};

export default SidebarPostButton;

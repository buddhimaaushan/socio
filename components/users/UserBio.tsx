import { useMemo } from "react";
import { BiCalendar } from "react-icons/bi";
import { AiTwotoneEdit } from "react-icons/ai";
import { SlUserFollow, SlUserFollowing } from "react-icons/sl";
import { format } from "date-fns";

import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import useFollow from "@/hooks/useFollow";
import useEditModal from "@/hooks/useEditModal";

import Button from "../Button";

interface UserBioProps {
  userId: string;
}

const UserBio: React.FC<UserBioProps> = ({ userId }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedUser } = useUser(userId);

  const editModal = useEditModal();

  const { isFollowing, toggleFollow } = useFollow(userId);

  const createdAt = useMemo(() => {
    if (!fetchedUser?.createdAt) {
      return null;
    }

    return format(new Date(fetchedUser.createdAt), "MMMM yyyy");
  }, [fetchedUser?.createdAt]);

  return (
    <div className="pb-4">
      <div className="flex justify-end p-2">
        {currentUser?.id === userId ? (
          <Button
            icon={<AiTwotoneEdit size={20} />}
            label="Edit"
            onClick={editModal.onOpen}
          />
        ) : (
          <Button
            icon={
              isFollowing ? (
                <SlUserFollowing size={20} />
              ) : (
                <SlUserFollow size={20} />
              )
            }
            onClick={toggleFollow}
            label={isFollowing ? "Unfollow" : "Follow"}
            secondary={isFollowing}
          />
        )}
      </div>
      <div className="mt-8 px-4">
        <div className="flex flex-col">
          <p className="text-red-500 text-2xl font-semibold">
            {fetchedUser?.name}
          </p>
          <p className="text-md text-neutral-300">@{fetchedUser?.username}</p>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-white">{fetchedUser?.bio}</p>
          <div
            className="
              flex 
              flex-row 
              items-center 
              gap-2 
              mt-4 
              text-neutral-300
          "
          >
            <BiCalendar size={24} />
            <p>Joined {createdAt}</p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-6">
          <div className="flex flex-row items-center gap-1">
            <p className="text-red-500 font-bold">
              {fetchedUser?.followingIds?.length}
            </p>
            <p className="text-neutral-300 font-bold">Following</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-red-500 font-bold">
              {fetchedUser?.followersCount || 0}
            </p>
            <p className="text-neutral-300 font-bold">Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserBio;

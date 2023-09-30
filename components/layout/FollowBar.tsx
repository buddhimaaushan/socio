import useUsers from "@/hooks/useUsers";

import Avatar from "../Avatar";
import Header from "../Header";

const FollowBar = () => {
  const { data: users = [] } = useUsers();

  if (users.length === 0) {
    return null;
  }

  return (
    <div className="">
      <div className="">
        <Header label="People" />
        <div className="flex flex-col  mt-4">
          {users.map((user: Record<string, any>) => (
            <div
              key={user.id}
              className="flex flex-row gap-4 hover:bg-red-300 p-3 hover:bg-opacity-10 rounded-2xl select-none"
            >
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">{user.name}</p>
                <p className="text-neutral-400 text-sm">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;

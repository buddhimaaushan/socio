import axios from "axios";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import usePosts from "@/hooks/usePosts";
import usePost from "@/hooks/usePost";

import Avatar from "./Avatar";
import Button from "./Button";
import { MdPostAdd } from "react-icons/md";

interface FormProps {
  placeholder: string;
  isComment?: boolean;
  postId?: string;
  btnLabel: string;
}

const Form: React.FC<FormProps> = ({
  placeholder,
  isComment,
  postId,
  btnLabel,
}) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();
  const { mutate: mutatePost } = usePost(postId as string);

  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      const url = isComment ? `/api/comments?postId=${postId}` : "/api/posts";

      await axios.post(url, { body });

      toast.success("Post created");
      setBody("");
      mutatePosts();
      mutatePost();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [body, mutatePosts, isComment, postId, mutatePost]);

  return (
    <div className=" border border-neutral-800 p-4 rounded-2xl">
      {currentUser ? (
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Avatar userId={currentUser?.id} />
            <div>
              <p className="text-red-500 font-bold text-md">
                {currentUser?.name}
              </p>
              <p className="text-white text-xs opacity-60">
                @{currentUser?.username}
              </p>
            </div>
          </div>
          <div className="w-full">
            <textarea
              disabled={isLoading}
              onChange={(event) => setBody(event.target.value)}
              value={body}
              rows={5}
              className="
                disabled:opacity-80
                rounded-xl
                p-4
                resize-none 
                w-full 
                border
                border-neutral-800 
                bg-neutral-900 
                ring-0 
                outline-none 
                text-md 
                placeholder-red-400 
                placeholder:opacity-80
                text-red-500 
                focus:outline-1
                focus:outline-red-500
                transition-all
                duration-500
              "
              placeholder={placeholder}
            ></textarea>
            <div className=" mt-4 flex flex-row justify-end">
              <Button
                icon={<MdPostAdd size={24} />}
                disabled={isLoading || !body}
                onClick={onSubmit}
                label={btnLabel}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="py-8">
          <h1 className="text-white text-2xl text-center mb-4 font-bold">
            Welcome to SOCiO
          </h1>
          <div className="flex flex-row items-center justify-center gap-4">
            <Button label="Login" onClick={loginModal.onOpen} />
            <Button label="Register" onClick={registerModal.onOpen} secondary />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;

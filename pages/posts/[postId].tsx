import { useRouter } from "next/router";
import { ScaleLoader } from "react-spinners";

import usePost from "@/hooks/usePost";

import Header from "@/components/Header";
import Form from "@/components/Form";
import PostItem from "@/components/posts/PostItem";
import CommentFeed from "@/components/posts/CommentFeed";

const PostView = () => {
  const router = useRouter();
  const { postId } = router.query;

  const { data: fetchedPost, isLoading } = usePost(postId as string);

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full">
        <ScaleLoader color="white" />
      </div>
    );
  }

  return (
    <div className="pb-2 ">
      <Header showBackArrow label="Post Details" />
      <div className="flex flex-col gap-4">
        <PostItem data={fetchedPost} />
        <Form
          btnLabel="Comment"
          postId={postId as string}
          isComment
          placeholder="Write your comment..."
        />
        <CommentFeed comments={fetchedPost?.comments} />
      </div>
    </div>
  );
};

export default PostView;

type Props = {
  params: {
    postId: number;
  };
};

const PostDetailPage = ({ params }: Props) => {
  return <div>ID: {params.postId} Page</div>;
};

export default PostDetailPage;

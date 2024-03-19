type Props = {
  params: {
    postId: string;
  };
};

export default function PostDetailPage({ params }: Props) {
  return <div>{params.postId}</div>;
}

type Props = {
  params: {
    postPath: string;
  };
};

export default function PostDetailPage({ params }: Props) {
  return <div>{params.postPath}</div>;
}

import { PostType } from "@/app/page";

type Props = {
  params: {
    postPath: string;
  };
};

export default async function PostDetailPage({ params }: Props) {
  const postDetailDataFetch = async () => {
    return await fetch(`http://localhost:3000/posts/posts.json"`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postDescriptionDataFetch = async () => {
    return await fetch(`http://localhost:3000/posts/${params.postPath}.md`)
      .then((response) => response.text())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const mockPostData: PostType[] = await postDetailDataFetch();
  const postDetailData: PostType | undefined = mockPostData.find((postData) => {
    return (params.postPath = postData.path);
  });

  return <div>asdf</div>;
}

import { PostType } from "@/app/page";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  params: {
    postPath: string;
  };
};

export default async function PostDetailPage({ params }: Props) {
  const postDetailDataFetch = async () => {
    return await fetch("http://localhost:3000/posts/posts.json")
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

  const mockPostData: PostType[] | undefined = await postDetailDataFetch();
  const postDetailData: PostType | undefined = mockPostData?.find(
    (postData) => {
      return params.postPath === postData.path;
    }
  );
  const description = await postDescriptionDataFetch();
  console.log(params.postPath);

  return (
    description && (
      <div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(
                className !== undefined ? className : ""
              );
              if (!inline && match) {
                return (
                  <SyntaxHighlighter
                    {...props}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                );
              } else if (inline === true) {
                return (
                  <SyntaxHighlighter
                    {...props}
                    language="typescript"
                    PreTag="span"
                  >
                    {String(children)}
                  </SyntaxHighlighter>
                );
              } else {
                return (
                  <code {...props} className={className}>
                    {description}
                  </code>
                );
              }
            },
          }}
        >
          {description}
        </ReactMarkdown>
      </div>
    )
  );
}

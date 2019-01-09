import fetch from "isomorphic-unfetch";
import PageTitle from "../components/PageTitle";

const Index = ({ posts }) => (
  <>
    <PageTitle>Hello, world.</PageTitle>
    <p>
      Next.js PWA Boilerplate starts your progressive web app off with a perfect
      Google Lighthouse score. To see this in action, open this website with
      Chrome, go to the “Audits” tab in dev tools, and click “Run audit”.
    </p>
    <p>
      Check out the{" "}
      <a
        href="https://github.com/pingboard/next-pwa-boilerplate"
        rel="noopener noreferrer"
        target="_blank"
      >
        source code
      </a>{" "}
      and a more full{" "}
      <a
        href="https://nextter.now.sh"
        rel="noopener noreferrer"
        target="_blank"
      >
        example
      </a>{" "}
      for details.
    </p>
    <p>
      Also, here is a list of lorem ipsum fetched from an API to prove how
      performant this app still is while using dynamic data sources:
    </p>
    <ul>
      {posts.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  </>
);

Index.getInitialProps = async function() {
  const fetchPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await fetchPosts.json();

  return {
    posts
  };
};

export default Index;

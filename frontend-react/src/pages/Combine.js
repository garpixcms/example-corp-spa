import {Fetcher} from "@garpix/fetcher";
import Home from "./Home";
import ContactPage from './Contact';
import ContentPage from './Content';
import SearchPage from './Search';
import ErrorPage from "./Error";
import PostListPage from "./PostList";
import LoginPage from "./LoginPage";

const PAGE_TYPES = {
  'HomePage': Home,
  'ContactPage': ContactPage,
  'Page': ContentPage,
  'SearchPage': SearchPage,
  'PostListPage': PostListPage,
  'PostPage': ContentPage,
  'LoginPage': LoginPage,
};

const Combine = props => {
  return (
    <Fetcher {...props} paramsKey={"0"}>
      {(data, error) => {
        console.log(error, 'error')
        if (data === null && error !== null) return <ErrorPage error={error} />;
        if (!data) return null;
        const { pageType, page } = data;
        const Page = PAGE_TYPES[pageType];
        return <Page {...page} />;
      }}
    </Fetcher>
  );
};

export default Combine;

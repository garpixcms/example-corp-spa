import Layout from "../views/Layout";
import Content from "../views/Content";
import {Link} from "react-router-dom";

const PostListPage = (props) => {
  const { object, paginated_object_list } = props;
  return (
    <Layout {...props}>
      <h1>{object.title}</h1>
        {paginated_object_list.map((item) => {
            return (
              <div key={item.id}>
                  <Link to={item.get_absolute_url}>{item.title}</Link>
              </div>
            )
          })}
    </Layout>
  )
}

export default PostListPage;
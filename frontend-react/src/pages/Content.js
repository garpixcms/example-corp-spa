import Layout from "../views/Layout";
import Content from "../views/Content";

const ContentPage = (props) => {
  const { object } = props;
  return (
    <Layout {...props}>
      <h1>{object.title}</h1>
      <Content data={object.content} />
    </Layout>
  )
}

export default ContentPage;
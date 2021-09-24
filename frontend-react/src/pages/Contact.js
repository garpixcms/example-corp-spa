import Layout from "../views/Layout";
import Content from "../views/Content";
import Feedback from "../components/Feedback";

const ContactPage = (props) => {
  const { object } = props;
  return (
    <Layout {...props}>
      <h1>{object.title}</h1>
      {object.postal_address ? (
        <div className="alert alert-primary" role="alert">
          Почтовый адрес: {object.postal_address}
        </div>
      ) : null}
      <Content data={object.content} />
      <Feedback />
    </Layout>
  )
}

export default ContactPage;
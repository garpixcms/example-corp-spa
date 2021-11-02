import Layout from "../views/Layout";
import Content from "../views/Content";
import Feedback from "../components/Feedback";
import LoginWithVK from "../components/LoginWithVK";
import LoginWithFB from "../components/LoginWithFB";

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
        <div>
            <h2>Войти через соцсети</h2>
            <LoginWithVK />
            <LoginWithFB />
        </div>
    </Layout>
  )
}

export default ContactPage;
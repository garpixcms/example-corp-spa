import Layout from "../views/Layout";
import Login from "../components/Login";

const LoginPage = (props) => {
  const { object } = props;
  return (
    <Layout {...props}>
      <h1>{object.title}</h1>
      <Login />
    </Layout>
  )
}

export default LoginPage;
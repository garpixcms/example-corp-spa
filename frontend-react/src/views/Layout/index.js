import { HeaderMenu } from '../menus';
import {Helmet} from "react-helmet";

const Layout = ({ object, global, children }) => {
  console.log(object, 'object')
  return (
    <div>
      <Helmet>
        <title>{object.seo_title ? object.seo_title : object.title}</title>
        <meta name="description" content={object.seo_description} />
        {/*seo_description*/}
      </Helmet>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">GarpixCMS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarsExampleDefault"
                  aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <HeaderMenu menu={global.menus.header_menu} />
          </div>
        </div>
      </nav>
      <main className="container">
        {children}
      </main>
    </div>
  )
}

export default Layout;
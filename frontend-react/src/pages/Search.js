import Layout from "../views/Layout";

const SearchPage = (props) => {
  const { object } = props;
  return (
    <Layout {...props}>
      <h1>{object.title}</h1>

      <form method="get">
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label className="sr-only" htmlFor="q">Поиск</label>
            <input type="text" className="form-control mb-2" name="q" id="q"
                   placeholder="Введите поисковый запрос..." />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-2">Найти</button>
          </div>
        </div>
      </form>
    </Layout>
  )
}

export default SearchPage;
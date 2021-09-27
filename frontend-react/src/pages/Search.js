import React, {useState} from 'react';
import Layout from "../views/Layout";
import api from '../api';
import {Link} from "react-router-dom";

const SearchPage = (props) => {
    const {object, paginated_object_list} = props;
    const [searchValue, setSearchValue] = useState('');
    const [paginatedObjectList, setPaginatedObjectList] = useState(paginated_object_list);

    const onSubmit = (event) => {
        console.log(searchValue, object)
        api.getPage([`/${object.slug}`], {
            q: searchValue,
        }).then((res) => {
            setPaginatedObjectList(res.page.paginated_object_list);
        })
        event.preventDefault();
    }

    return (
        <Layout {...props}>
            <h1>{object.title}</h1>

            <form method="get" onSubmit={onSubmit}>
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <label className="sr-only" htmlFor="q">Поиск</label>
                        <input type="text" className="form-control mb-2" name="q" id="q"
                               placeholder="Введите поисковый запрос..."
                               onChange={e => setSearchValue(e.target.value)}
                        />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-2">Найти</button>
                    </div>
                </div>
            </form>

            {paginatedObjectList.map((item) => {
                return (
                    <div key={item.id}>
                        <Link to={item.get_absolute_url}>{item.title}</Link>
                    </div>
                )
            })}
        </Layout>
    )
}

export default SearchPage;
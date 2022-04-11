import { useFormik } from 'formik';
import cn from 'classnames';
import * as Yup from 'yup';
import api from '../../api';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      const data = await api.login(values);
      console.log(data);
      window.location.href = '/'
    },
    validationSchema: Yup.object({
      password: Yup.string().required('Обязательное поле'),
      username: Yup.string().email('Введите валидный email').required('Обязательное поле'),
    })
  });
  return (
    <div>
      <form method="post" onSubmit={formik.handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="username"
              className={cn({
                'form-control': true,
                'is-invalid': formik.touched.username && formik.errors.username
              })}
              id="inputEmail"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <div className="invalid-feedback">
              {formik.errors.username}
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input
              type="password"
              name="password"
              className={cn({
                'form-control': true,
                'is-invalid': formik.touched.password && formik.errors.password
              })}
              id="inputPassword"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <div className="invalid-feedback">
              {formik.errors.password}
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Войти</button>
      </form>
    </div>
  )
}

export default Login

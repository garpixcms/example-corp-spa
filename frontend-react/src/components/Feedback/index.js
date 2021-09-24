import { useFormik } from 'formik';
import cn from 'classnames';
import * as Yup from 'yup';


const Feedback = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      comment: '',
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      comment: Yup.string().required('Обязательное поле'),
      email: Yup.string().email('Введите валидный email').required('Обязательное поле'),
    })
  });

  return (
    <>
      <form method="post" onSubmit={formik.handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="email"
              className={cn({
                'form-control': true,
                'is-invalid': formik.touched.email && formik.errors.email
              })}
              id="inputEmail"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <div className="invalid-feedback">
              {formik.errors.email}
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputComment" className="col-sm-2 col-form-label">Комментарий</label>
          <div className="col-sm-10">
            <textarea
              className={cn({
                'form-control': true,
                'is-invalid': formik.touched.comment && formik.errors.comment
              })}
              name="comment"
              id="inputComment"
              rows="3"
              onChange={formik.handleChange}
              value={formik.values.comment}
            />
            <div className="invalid-feedback">
              {formik.errors.comment}
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Отправить</button>
      </form>

      {/*{% if message %}*/}
      {/*<div className="alert alert-success mt-3" role="alert">*/}
      {/*  {{ message }}*/}
      {/*</div>*/}
      {/*{% endif %}*/}

      {/*{% if form.errors %}*/}
      {/*<div className="alert alert-danger mt-3" role="alert">*/}
      {/*  <div>При отправке возникли ошибки:</div>*/}
      {/*  <div>{{ form.errors }}</div>*/}
      {/*</div>*/}
      {/*{% endif %}*/}
    </>
  )
}

export default Feedback;
import styles from "./Form.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Некорректный email")
        .required("Пожалуйста, введите email"),
      password: Yup.string()
        .required("Пожалуйста, введите пароль")
        .matches(
          /^[a-zA-Z0-9]{8,}$/,
          "Пароль должен содержать минимум 8 символов (латинские буквы или цифры)"
        ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
        <h1>Simple Hotel Check</h1>
        <label htmlFor="email">Логин</label>
        <input
          className={formik.errors.email?styles.errorInput:null}
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={styles.error}>{formik.errors.email}</div>
        ) : null}

        <label htmlFor="password">Пароль</label>
        <input
        className={formik.errors.password?styles.errorInput:null}
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={styles.error}>{formik.errors.password}</div>
        ) : null}

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Form;

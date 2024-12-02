import { useFormik } from 'formik';
import React from "react";
import { registerFormSchema } from '../schemas/RegisterFormSchema';

function RegisterForm() {

    const submit = (values, action) => {
        setTimeout(() => {
            action.resetForm();
        }, 2000)
    }

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
            term: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema: registerFormSchema,
        onSubmit: submit
    });


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='inputDiv'>
                    <label>Email</label>
                    <input type="text" id="email"
                        placeholder="Email'inizi Giriniz"
                        value={values.email}
                        onChange={handleChange} />
                    {errors.email && <p className='inputError'>{errors.email}</p>}
                </div>
                <div className='inputDiv'>
                    <label>Yaş</label>
                    <input type="number" id="age"
                        placeholder="Yaşınızı Giriniz"
                        value={values.age}
                        onChange={handleChange} />
                    {errors.age && <p className='inputError'>{errors.age}</p>}
                </div>
                <div className='inputDiv'>
                    <label>Şifre</label>
                    <input type="password" id="password"
                        placeholder="Şifrenizi Giriniz"
                        value={values.password}
                        onChange={handleChange} />
                    {errors.password && <p className='inputError'>{errors.password}</p>}
                </div>
                <div className='inputDiv'>
                    <label>Şifre Tekrarı</label>
                    <input type="password" id="confirmPassword"
                        placeholder="Şifrenizi Tekrar Giriniz"
                        value={values.confirmPassword}
                        onChange={handleChange} />
                    {errors.confirmPassword && <p className='inputError'>{errors.confirmPassword}</p>}
                </div>
                <div className='inputDiv'>
                    <div className='term'>
                        <input style={{ width: '20px', height: '12px' }} type="checkbox" id="term"
                            value={values.term}
                            onChange={handleChange} />
                        <label>Kullanıcı Sözleşmesini Kabul Ediyorum</label>
                    </div>
                    {errors.term && <p className='inputError'>{errors.term}</p>}
                </div>
                <button type='submit' className='registerBtn'>Kaydet</button>
            </form>
        </div>
    );
}

export default RegisterForm;

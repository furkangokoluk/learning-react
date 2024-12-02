import * as yup from 'yup';

export const registerFormSchema = yup.object().shape({
    email: yup.string().email("Geçerli Email Adresi Griniz").required("Email Adresi Zorunlu"),
    age: yup.number().positive("Geçerli Bir Değer Giriniz").integer("TGeçerli Bir Değer Giriniz").required("Yaş Alanı Zorunlu"),
    password: yup.string().required("Şifre Alanı Zorunlu"),
    confirmPassword: yup.string().required("Şifre Tekrarı Zorunlu").oneOf([yup.ref("password"), yup.password],"Şifreler Eşleşmiyor"),
    term: yup.boolean().required("Lütfen Sözleşmeyi Onaylayınız")
})
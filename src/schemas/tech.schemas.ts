import * as yup from "yup";

export const formAddTechSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string(),
});
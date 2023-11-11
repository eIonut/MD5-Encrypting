import * as Yup from "yup";

export const getValidationSchema = Yup.object().shape({
  text: Yup.string().required("Text is required"),
});

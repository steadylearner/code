import * as Yup from "yup";

const ShareFormSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "Title should be more than 5 characters!")
    .max(60, "Title should be less than 60 chracters!")
    .required("Required"),
  url: Yup.string()
    .min(10, "url should be more than 10 characters")
    .max(100, "url should be less than 100 characters!")
    .required("Required")
});

export default ShareFormSchema;

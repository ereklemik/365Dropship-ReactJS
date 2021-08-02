import { Form, Formik, Field, ErrorMessage } from "formik";
import { creatProduct, getProduct, updateProduct } from "../Components/API/API";
import TextField from "@material-ui/core/TextField";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import "./addProduct.css";

const creatProductValidation = yup.object().shape({
  title: yup
    .string()
    .required("Required")
    .min(2, "Title must exceed 2 characters"),
  description: yup
    .string()
    .required("Required")
    .min(4, "Description must exceed 4 characters"),
  price: yup.number().integer("Price must be an integer").required("Required"),
  imageUrl: yup.string().url("Input must be a url"),
});
const AddProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (productId) {
      getProduct(productId).then((res) => {
        setProduct(res);
      });
    }
  }, [productId]);

  const handleSubmit = (values) => {
    if (productId) {
      updateProduct(productId, values)
        .then((res) => {
          alert("Update Successful!");
        })
        .catch((err) => alert(err.message));
    } else {
      creatProduct(values).then((res) => {
        console.log(res);
        alert("Add successfully");
      });
    }
  };
  return (
    <div>
     
      <Formik
        enableReinitialize
        initialValues={
          productId
            ? {
                title: product.title,
                description: product.description,
                price: product.price,
                imageUrl: product.imageUrl,
              }
            : {
                title: "",
                description: "",
                price: "",
                imageUrl: "",
              }
        }
        onSubmit={handleSubmit}
        validationSchema={creatProductValidation}
      >
        <Form className={"addProduct"}>
          <Field
            placeholder="Title"
            name="title"
            className="addProduct-input"
          />
          <ErrorMessage
            name={"title"}
            className={"ErrorMessage"}
            component={"div"}
          />

          <Field
            placeholder="Description"
            component="textarea"
            name="description"
            className="addProduct-input"
          />
          <ErrorMessage
            name={"description"}
            className={"ErrorMessage"}
            component={"div"}
          />

          <Field
            placeholder="Price"
            name="price"
            className="addProduct-input"
          />
          <ErrorMessage
            name={"price"}
            className={"ErrorMessage"}
            component={"div"}
          />

          <Field
            placeholder="Image URL"
            name="imageUrl"
            className="addProduct-input"
          />
          <ErrorMessage
            name={"imageUrl"}
            className={"ErrorMessage"}
            component={"div"}
          />

          <button type={"submit"} className={"form__button"}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default AddProduct;

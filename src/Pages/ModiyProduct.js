import "./modifyProduct.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import {
  addProduct,
  getProduct,
  updateProduct,
  getProducts,
} from "../Components/API/API";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { makeStyles, Modal } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { editModalOpenAction } from "../Redux/Modal/ModalAction";
import { getProductsAction } from "../Redux/Products/ProductsAction";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  button: {
    marginLeft: "10px",
    width: "180px",
    fontSize: "13px",
    height: "30px",
    backgroundColor: "#61d5df",
    "&:hover": {
      background: "#61d5df",
    },
  },
  productModal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
  },
  field: {
    marginTop: "30px",
    width: "300px",
  },
});

const addProductValidation = yup.object().shape({
  title: yup.string().min(3).max(200),
  description: yup.string().min(3).max(1100),
  price: yup.number().integer().min(3),
  imageUrl: yup.string().url(),
});

const ModifyProduct = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [product, setProduct] = useState({});
  const classes = useStyles();
  const dispatch = useDispatch();
  const EditModal = useSelector((state) => state.modal.EditModal);

  useEffect(() => {
    if (typeof EditModal !== "boolean") {
      getProduct(EditModal).then((res) => {
        setProduct(res);
      });
    }
  }, [EditModal]);
  const customTextArea = ({ field, form: { touched, errors }, ...props }) => {
    return (
      <TextField
        description
        error={touched.description && errors.description ? true : false}
        className={classes.field}
        id="outlined-multiline-static"
        label="description"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="outlined"
        {...field}
        {...props}
      />
    );
  };
  const customPrice = ({ field, form: { touched, errors }, ...props }) => {
    return (
      <TextField
        id="outlined-basic"
        label="Price"
        variant="outlined"
        className={classes.field}
        error={touched.price && errors.price ? true : false}
        {...field}
        {...props}
      />
    );
  };
  const customTitle = ({ field, form: { touched, errors }, ...props }) => {
    return (
      <TextField
        id="outlined-basic"
        label="Title"
        variant="outlined"
        className={classes.field}
        error={touched.title && errors.title ? true : false}
        {...field}
        {...props}
      />
    );
  };
  const customLink = ({ field, form: { touched, errors }, ...props }) => {
    return (
      <TextField
        id="outlined-basic"
        label="URL"
        variant="outlined"
        error={touched.imageUrl && errors.imageUrl ? true : false}
        className={classes.field}
        {...field}
        {...props}
      />
    );
  };
  const handleSubmit = (values) => {
    if (typeof EditModal !== "boolean") {
      updateProduct(EditModal, values)
        .then((res) => {
          let variant = "success";
          enqueueSnackbar("update Successful!", { variant });
          setProduct({});
          getProducts().then((result) => {
            dispatch(getProductsAction(result));
          });
        })
        .catch((err) => alert(err.message));
    } else {
      addProduct(values).then((res) => {
        let variant = "success";
        enqueueSnackbar("product was added successfully!", { variant });
        getProducts().then((result) => {
          dispatch(getProductsAction(result));
        });
      });
    }
    dispatch(editModalOpenAction(false));
  };
  const close = () => {
    dispatch(editModalOpenAction(false));
    setProduct({});
  };
  return (
    <Modal
      className={classes.productModal}
      open={EditModal ? EditModal : false}
      onClose={close}
    >
      <div className="inventory__conteiner">
        <div className="inventory_header">
          <p className="inventory__title">
            {typeof EditModal !== "boolean" ? "Edit" : "Add"} product
          </p>
        </div>
        <Formik
          enableReinitialize
          initialValues={
            typeof EditModal !== "boolean"
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
          validationSchema={addProductValidation}
        >
          <Form className="form">
            <Field component={customTitle} name="title" placeholder="title" />
            <ErrorMessage
              className="inventory__error"
              name="title"
              component="div"
            />
            <Field
              placeholder="description"
              component={customTextArea}
              name="description"
            />
            <ErrorMessage
              className="inventory__error"
              name="description"
              component="div"
            />
            <Field component={customPrice} name="price" placeholder="price" />
            <ErrorMessage
              className="inventory__error"
              name="price"
              component="div"
            />
            <Field
              component={customLink}
              name="imageUrl"
              placeholder="imageUrl"
            />
            <ErrorMessage
              className="inventory__error"
              name="imageUrl"
              component="div"
            />
            <input
              className="invnetory__submit"
              type="submit"
              value={
                typeof EditModal !== "boolean"
                  ? "Edit Product"
                  : "Create Product"
              }
            />
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};

export default ModifyProduct;

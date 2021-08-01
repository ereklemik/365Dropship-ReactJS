import "./signin.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { login } from "../../API/API";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useSnackbar } from 'notistack';

const signInSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(3, "password is short"),
});

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "30px",
    width: "100%",
    backgroundColor: "#61d5df",
    "&:hover": {
      background: "#61d5df",
    },
  },
  margin: {
    margin: theme.spacing(1),
    marginTop: "20px",
    width: "100%",
  },
}));
const SignIn = () => {
  const history = useHistory();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const customInputEmail = ({ field, form: { touched, errors }, ...props }) => {
    return (
      <TextField
        error={touched.email && errors.email ? true : false}
        className={classes.margin}
        variant="outlined"
        id="input-with-icon-textfield"
        placeholder="E-mail"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon style={{ color: "#61d5df" }} />
            </InputAdornment>
          ),
        }}
        {...field}
        {...props}
      />
    );
  };
  const customInputPassword = ({
    field,
    form: { touched, errors },
    ...props
  }) => {
    return (
      <TextField
        error={touched.password && errors.password ? true : false}
        className={classes.margin}
        placeholder="Password"
        type="password"
        variant="outlined"
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <VpnKeyIcon style={{ color: "#61d5df" }} />
            </InputAdornment>
          ),
        }}
        {...field}
        {...props}
      />
    );
  };

  const loginHandler = (values) => {
    login(values.email, values.password)
      .then((res) => {
        history.push("/catalog");
      })
      .catch((err) => {
        let variant ="error"
        enqueueSnackbar('Log in failed', { variant });
       
      });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) history.push("/catalog");
  }, []);

  const ToSignUp = () => {
    history.push("/signup");
  };

  return (
    <div className="signUp-container">
      <div className="signUp-main--signIn">
        <div className="SignUp-header">
          <img src="https://app.365dropship.com/assets/images/auth/logo.svg"></img>
          <h3 className="signUp__title signUp__title-members">
            Members Log In
          </h3>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={loginHandler}
          validationSchema={signInSchema}
        >
          <Form>
            <Field name="email" component={customInputEmail}></Field>
            <ErrorMessage
              className="ErrorMessage"
              name="email"
              component="div"
            />
            <Field name="password" component={customInputPassword}></Field>
            <ErrorMessage
              className="ErrorMessage"
              name="password"
              component="div"
            />

            <Button
              type="submit"
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              Log In
            </Button>
          </Form>
        </Formik>

        <section className="signUp__section">
          <p className="signUp_terms signUp_terms--signIn">Or Sign In With</p>
          <div className="signUp_social">
            <div className="signUp_social--item">
              <img src="https://freeiconshop.com/wp-content/uploads/edd/google-flat.png"></img>
            </div>
            <div className="item-facebook">
              <img src="https://cdn.icon-icons.com/icons2/2201/PNG/512/facebook_logo_square_icon_134009.png"></img>
            </div>
          </div>
          <div className="signUp--signIn">
            <p className="signUp_terms" style={{ paddingRight: "5px" }}>
              Don't have an account?
            </p>
            <Button
              onClick={ToSignUp}
              style={{ color: "black" }}
              color="primary"
            >
              Sign Up
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};
export default SignIn;

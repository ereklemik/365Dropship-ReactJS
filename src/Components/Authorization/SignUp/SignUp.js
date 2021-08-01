import "./signup.css";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { signup } from "../../API/API";
import { useHistory } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "10px",
    width: "100%",
    backgroundColor: "#61d5df",
    "&:hover": {
      background: "#61d5df",
    },
  },
  margin: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

const SingUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const logInSchema = yup.object().shape({
    firstName: yup.string().min(5, "Firstname is short").required(),
    lastName: yup.string().min(5, "Lastname is short").required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(3, "password is too short"),
    passwordConfirmation: yup.string().required().min(3, "password is short"),
  });
  const customInputFirstName = ({
    field,
    form: { touched, errors },
    ...props
  }) => {
    return (
      <TextField
        error={touched.firstName && errors.firstName ? true : false}
        className={classes.margin}
        variant="outlined"
        id="input-with-icon-textfield"
        placeholder="firstname"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircleIcon style={{ color: "#61d5df" }} />
            </InputAdornment>
          ),
        }}
        {...field}
        {...props}
      />
    );
  };

  const customInputLastName = ({
    field,
    form: { touched, errors },
    ...props
  }) => {
    return (
      <TextField
        error={touched.lastName && errors.lastName ? true : false}
        className={classes.margin}
        placeholder="lastname"
        variant="outlined"
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircleIcon style={{ color: "#61d5df" }} />
            </InputAdornment>
          ),
        }}
        {...field}
        {...props}
      />
    );
  };
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
  const customInputPasswordConfirmation = ({
    field,
    form: { touched, errors },
    ...props
  }) => {
    return (
      <TextField
        error={
          touched.passwordConfirmation && errors.passwordConfirmation
            ? true
            : false
        }
        className={classes.margin}
        placeholder="passwordConfirmation"
        variant="outlined"
        type="password"
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

  const SignUpHandler = (values) => {
    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      passwordConfirmation: values.passwordConfirmation,
    };
    signup(data)
      .then(() => {
        history.push("/catalog");
      })
      .catch(() => {
        let variant ="error"
        enqueueSnackbar('Sign Up failed', { variant });
      });
  };
  const ToSignIn = () => {
    history.push("/signin");
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) history.push("/catalog");
  }, []);

  return (
    <div className="signUp-container">
      <div className="signUp-main">
        <div className="SignUp-header">
          <img src="https://app.365dropship.com/assets/images/auth/logo.svg"></img>
          <h3 className="signUp__title">Sign Up</h3>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
          }}
          onSubmit={SignUpHandler}
          validationSchema={logInSchema}
        >
          <Form>
            <Field name="firstName" component={customInputFirstName}></Field>
            <ErrorMessage
              className="ErrorMessage"
              name="firstName"
              component="div"
            />
            <Field name="lastName" component={customInputLastName}></Field>
            <ErrorMessage
              className="ErrorMessage"
              name="lastName"
              component="div"
            />
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
            <Field
              name="passwordConfirmation"
              component={customInputPasswordConfirmation}
            ></Field>
            <ErrorMessage
              className="ErrorMessage"
              name="passwordConfirmation"
              component="div"
            />
            <Button
              type="submit"
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              Sign Up
            </Button>
          </Form>
        </Formik>
        <section className="signUp__section">
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
              onClick={ToSignIn}
              style={{ color: "black" }}
              color="primary"
            >
              Log In
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};
export default SingUp;

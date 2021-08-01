import SignOut from '../Components/Authorization/SignOut/SignOut'
import './profile.css'
import { updateProfile } from '../Components/API/API'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import VpnKeyIcon from '@material-ui/icons/VpnKey'
import { makeStyles } from '@material-ui/core/styles'
import userpic from '../Components/Main/trav.jpg'
import { useHistory } from 'react-router-dom'
import { Drawer } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { useSnackbar } from 'notistack'

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: '10px',
    width: '100%',
    backgroundColor: '#61d5df',
    '&:hover': {
      background: '#61d5df',
    },
  },
  margin: {
    margin: theme.spacing(1),
    width: '100%',
  },
  root: {
    cursor: 'pointer',
    color: '#61d5df',
    fontSize: 'xxx-large',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

const Profile = () => {
  const classes = useStyles()
  const history = useHistory()
  const { enqueueSnackbar } = useSnackbar()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const profileInSchema = yup.object().shape({
    firstName: yup.string().min(5, 'Firstname is short'),
    lastName: yup.string().min(5, 'Lastname is short'),
    email: yup.string().email(),
    password: yup.string().min(3, 'password is too short'),
  })

  const user = JSON.parse(localStorage.getItem('user'))
  const changeProfileHandler = (values) => {
    updateProfile(user.id, values).then(() => {
      localStorage.setItem('user1', JSON.stringify(values))
      let variant = 'success'
      enqueueSnackbar('profile updated sucsusfully!', { variant })
    })
  }

  const Logout = () => {
    localStorage.clear()
    history.push('/')
  }

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
              <AccountCircleIcon style={{ color: '#61d5df' }} />
            </InputAdornment>
          ),
        }}
        {...field}
        {...props}
      />
    )
  }

  const customInputLastName = ({
    field,
    form: { touched, errors },
    ...props
  }) => {
    return (
      <TextField
        error={touched.lastName && errors.lastName ? true : false}
        className={classes.margin}
        placeholder="Lastname"
        variant="outlined"
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircleIcon style={{ color: '#61d5df' }} />
            </InputAdornment>
          ),
        }}
        {...field}
        {...props}
      />
    )
  }
  const customInputEmail = ({ field, form: { touched, errors }, ...props }) => {
    return (
      <TextField
        error={touched.email && errors.email ? true : false}
        className={classes.margin}
        variant="outlined"
        id="input-with-icon-textfield"
        placeholder="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon style={{ color: '#61d5df' }} />
            </InputAdornment>
          ),
        }}
        {...field}
        {...props}
      />
    )
  }
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
              <VpnKeyIcon style={{ color: '#61d5df' }} />
            </InputAdornment>
          ),
        }}
        {...field}
        {...props}
      />
    )
  }
  return (
    <div className="Profile">
      <header className="profile__header">
        <span className="profile__myProfile"> My Profile</span>
        <div className="wrapper">
          <button onClick={Logout} className="profile__SignOut">
            Sign Out
          </button>
          <div className="burger">
            <MenuIcon
              onClick={() => {
                setDrawerOpen(true)
              }}
              className={classes.root}
            />
            <Drawer
              open={drawerOpen}
              onClose={() => {
                setDrawerOpen(false)
              }}
              anchor="right"
            ></Drawer>
          </div>
        </div>
      </header>
      <section className="profile__Section">
        <div className="Profile__conteiner">
          <div className="formWrapper">
            <div className="photo__det">
              <span className="profile_title">PROFILE PICTURE</span>
              <div className="photo__det-container">
                <img src={userpic} alt="profilePic" className={'travpic'}/>
                <button className="upload">Change Profile</button>
              </div>
            </div>
          </div>
          <div className="formWrapper">
            <span className="profile_title">UPDATE PROFILE</span>
            <Formik
              enableReinitialize
              initialValues={{
                firstName: user?.firstName || '',
                lastName: user?.lastName || '',
                email: user?.email || '',
                password: user?.password || '',
              }}
              onSubmit={changeProfileHandler}
              validationSchema={profileInSchema}
            >
              <Form className="Profile__Form">
                <p className="profile_input">FirstName</p>
                <Field
                  name="firstName"
                  component={customInputFirstName}
                ></Field>
                <ErrorMessage
                  className="ErrorMessage"
                  name="firstName"
                  component="div"
                />
                <p className="profile_input">LirstName</p>
                <Field name="lastName" component={customInputLastName}></Field>
                <ErrorMessage
                  className="ErrorMessage"
                  name="lastName"
                  component="div"
                />
                <p className="profile_input">Email</p>
                <Field name="email" component={customInputEmail}></Field>
                <ErrorMessage
                  className="ErrorMessage"
                  name="email"
                  component="div"
                />
                <p className="profile_input">Password</p>
                <Field name="password" component={customInputPassword}></Field>
                <ErrorMessage
                  className="ErrorMessage"
                  name="password"
                  component="div"
                />
                <button className="upload flex-end" type="submit">
                  update profile
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Profile
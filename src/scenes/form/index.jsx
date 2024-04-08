import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/>.<,])[A-Za-z\d!@#$%^&*()_+}{"':;?/>.<,]{8,}$/

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup
    .string()
    .required("required")
    .min(8, "Password must be at least 8 characters long")
    .matches( passwordRegExp,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  contact: yup
    .string()
    .matches(phoneRegExp, "phone number is not invalid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m="20px">
      <Header title="CREATE USER " subtitle="Create a New User Profile" />
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat (4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : " span 4" },
              }}
            >
              <TextField
                fullWidth
                name="firstName"
                label="First Name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="filled"
                type="text"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                name="lastName"
                label="Last Name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="filled"
                type="text"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="filled"
                type="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
                autoComplete="email"
              />
              <TextField
                fullWidth
                name="password"
                label="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="filled"
                type="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
                autoComplete="current-password"
              />
              <TextField
                fullWidth
                name="contact"
                label="Contact"
                value={values.contact}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="filled"
                type="tel"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
                autoComplete="tel"
              />
              <TextField
                fullWidth
                name="address1"
                label="Address"
                value={values.address1}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="filled"
                type="text"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 2" }}
                autoComplete="street-address"
              />
              <TextField
                fullWidth
                name="address2"
                label="Address"
                value={values.address2}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="filled"
                type="text"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 2" }}
                autoComplete="street-address"
              />
            </Box>
            <Box display="flex" justifyContent="end">
              <Button
                type="submit"
                variant="outlined"
                sx={{ mt: 3, mb: 2, p: 1.5 }}
                color="secondary"
              >
                Create
                <Box component="span" sx={{ ml: 1 }}>
                  New User
                </Box>
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;

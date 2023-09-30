import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .trim()
      .matches(/^[A-Za-z]+$/, "enter valid name only "),

    lastName: Yup.string()
      .required("Last name is required")
      .trim()
      .matches(/^[A-Za-z]+$/, "enter valid name only"),

    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid")
      .trim(),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
      .trim(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required")
      .trim(),

    acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });

  // functions to build form returned by useForm() hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });

  function onSubmit(data) {
    // display form data on success
    const userData = [...JSON.parse(localStorage.getItem("isLogin") || "[]")];
    const id = userData.length ? userData[userData.length - 1].id + 1 : 1;
    const exisist = userData.find((x) => x.email === data.email);
    if (exisist) {
      toast.error("already Email exist!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));

    localStorage.setItem(
      "isLogin",
      JSON.stringify([
        ...(JSON.parse(localStorage.getItem("isLogin")) || []),
        {
          id,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,

          //data nu mattu potta kuda data save aagum
        },
      ])
    );
    navigate("/login");
  }
  return (
    <div className=" container-fluid bg-info">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card m-3">
            <h5 className="card-header">Register Form</h5>
            <div className="card-body text-start">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                  <div className="form-group col-12-5 my-4">
                    <label>First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      {...register("firstName")}
                      className={`form-control ${
                        errors.firstName ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.firstName?.message}
                    </div>
                  </div>
                  <div className="form-group col-12-5 my-4">
                    <label>Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      {...register("lastName")}
                      className={`form-control ${
                        errors.lastName ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.lastName?.message}
                    </div>
                  </div>
                </div>
                <div className="form-group col">
                  <label>Email</label>
                  <input
                    name="email"
                    type="text"
                    {...register("email")}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-12-5 my-4">
                    <label>Password</label>
                    <input
                      name="password"
                      type="password"
                      {...register("password")}
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.password?.message}
                    </div>
                  </div>
                  <div className="form-group col-12-5 my-4">
                    <label>Confirm Password</label>
                    <input
                      name="confirmPassword"
                      type="password"
                      {...register("confirmPassword")}
                      className={`form-control ${
                        errors.confirmPassword ? "is-invalid" : ""
                      }`}
                    />
                    <div className="invalid-feedback">
                      {errors.confirmPassword?.message}
                    </div>
                  </div>
                </div>
                <div className="form-group form-check my-4">
                  <input
                    name="acceptTerms"
                    type="checkbox"
                    {...register("acceptTerms")}
                    id="acceptTerms"
                    className={`form-check-input ${
                      errors.acceptTerms ? "is-invalid" : ""
                    }`}
                  />
                  <label for="acceptTerms" className="form-check-label">
                    Accept Terms & Conditions
                  </label>
                  <div className="invalid-feedback">
                    {errors.acceptTerms?.message}
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-success mr-1">
                    register
                  </button>
                  <button
                    className="btn btn-danger mx-2 "
                    type="reset"
                    onClick={() => reset()}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;

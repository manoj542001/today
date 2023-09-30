import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
const Otp = () => {
  // const [mail, setMail] = useState()
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(4, "OTP must be at least 4 characters")
      .required("OTP is required"),
  });

  // functions to build form returned by useForm() hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
  });

  function onSubmit(data) {
    // const exist = JSON.parse(localStorage.getItem("isLogin"));
    // console.log(exist);

    // const userFind = exist.find(
    //   (e) => e.email === data.email && e.password === data.password
    // );
    // console.log(userFind);

    if (data.password != 1111) {
      toast.error("OTP Not Match", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Verified",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  }
  return (
    <div>
      <div className=" container-fluid bg-info p-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card m-3">
              <h5 className="card-header">OTP</h5>
              <div className="card-body text-start">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-row">
                    <div className="form-group col-12-5 my-4">
                      <label>OTP </label>
                      <input
                        name="password"
                        type="password"
                        {...register("password")}
                      />
                      <div className="invalid-feedback">
                        {errors.password?.message}
                      </div>
                    </div>
                  </div>

                  <div className="form-group ps-5">
                    <button
                      type="submit"
                      className="btn btn-success  ms-5 w-50"
                    >
                      Verify
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Otp;

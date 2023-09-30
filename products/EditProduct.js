import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const currentLogin = JSON.parse(localStorage.getItem("logged"));
  const userAllProducts = JSON.parse(
    localStorage.getItem(`${currentLogin.firstName} product`)
  );

  const getSingleProduct = userAllProducts.find(
    (product) => product.id === Number(id)
  );

  const validationSchema = Yup.object().shape({
    productName: Yup.string()
      .required("productName is required")
      .trim()
      .matches(/^[A-Za-z]+$/, "enter valid name only "),

    details: Yup.string()
      .required("details is required")
      .trim()
      .matches(/^[A-Za-z]+$/, "enter valid name only"),

    price: Yup.string().required("price is required").trim(),
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
    const updateProduct = userAllProducts.map((product) =>
      product.id === Number(id)
        ? {
            id: product.id,
            productName: data.productName,
            details: data.details,
            price: data.price,
          }
        : product
    );
    localStorage.setItem(
      `${currentLogin.firstName} product`,
      JSON.stringify(updateProduct)
    );
    navigate("/view");
  }
  return (
    <div>
      <div>
        <div className=" container-fluid bg-info">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="card m-3">
                <h5 className="card-header">Add products</h5>
                <div className="card-body text-start">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                      <div className="form-group col-12-5 my-4">
                        <label>product Name</label>
                        <input
                          name="productName"
                          type="text"
                          {...register("productName")}
                          defaultValue={getSingleProduct.productName}
                          className={`form-control ${
                            errors.productName ? "is-invalid" : ""
                          }`}
                        />
                        <div className="invalid-feedback">
                          {errors.firstName?.message}
                        </div>
                      </div>
                      <div className="form-group col-12-5 my-4">
                        <label>Details</label>
                        <input
                          name="details"
                          type="text"
                          {...register("details")}
                          defaultValue={getSingleProduct.details}
                          className={`form-control ${
                            errors.details ? "is-invalid" : ""
                          }`}
                        />
                        <div className="invalid-feedback">
                          {errors.details?.message}
                        </div>
                      </div>
                    </div>
                    <div className="form-group col my-4">
                      <label>Price</label>
                      <input
                        name="price"
                        type="text"
                        {...register("price")}
                        defaultValue={getSingleProduct.price}
                        className={`form-control ${
                          errors.price ? "is-invalid" : ""
                        }`}
                      />
                      <div className="invalid-feedback">
                        {errors.price?.message}
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
        </div>
      </div>
    </div>
  );
};

export default EditProduct;

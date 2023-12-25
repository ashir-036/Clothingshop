import React from "react";
function Cart() {
  const centerAlign = {
    textAlign: "center",
    verticalAlign: "middle",
  };

  const modalContentStyle = {
    border: "1px solid #ccc", // Adding a border to the modal content
    borderRadius: "5px",
    padding: "20px",
  };
  const tableBorder = {
    border: 0, // Adding a 1px solid border
    color: "#666",
    fontSize: "0.8rem",
  };
  const price = {
    marginLeft: "1rem",
    fontSize: "20px",
  };
  return (
    <div className="container">
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
        style={{ marginTop: "10px" }}
      >
        <div className="modal-content" style={modalContentStyle}>
          <div className="modal-header mb-5">
            <h5 className="modal-title" id="exampleModalLabel">
              Your Shopping Cart
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <table className="table table-image">
              <thead>
                <tr>
                  <th scope="col" style={tableBorder}></th>
                  <th scope="col" style={tableBorder}>
                    Product
                  </th>
                  <th scope="col" style={tableBorder}>
                    Price
                  </th>
                  <th scope="col" style={tableBorder}>
                    Qty
                  </th>
                  <th scope="col" style={tableBorder}>
                    Total
                  </th>
                  <th scope="col" style={tableBorder}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-25">
                    <img
                      src="./images/DressShirt1.jpg"
                      className="img-fluid img-thumbnail"
                      alt="Product"
                    />
                  </td>
                  <td style={centerAlign}>Casual Shirt 1</td>
                  <td style={centerAlign}>800 PKR</td>
                  <td style={centerAlign} className="qty">
                    <input
                      type="text"
                      className="form-control"
                      id="input1"
                      defaultValue="2"
                    />
                  </td>
                  <td style={centerAlign}>1,600 PKR</td>
                  <td style={centerAlign}>
                    <button className="btn btn-danger btn-sm">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-flex justify-content-end">
              <h5>
                Total:{" "}
                <span className="price text-success" style={price}>
                  1,600 PKR
                </span>
              </h5>
            </div>
          </div>
          <div className="modal-footer border-top-0 d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-success">
              <a
                href="CheckoutPage.html"
                style={{ color: "white", textDecoration: "none" }}
              >
                Checkout
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

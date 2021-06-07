import React, { useRef } from "react";
import visa from "../../assets/images/visa.png";
import masterCard from "../../assets/images/master_card.jpeg";
import americanExpress from "../../assets/images/american_express.png";
import useTotal from "../../hooks/useCartTotal";
import PropTypes from "prop-types";
import { BsLock } from "react-icons/bs";

function PaymentForm({ onSubmit }) {
  const total = useTotal();
  const formRef = useRef();
  const RenderCardImage = ({ source }) => {
    return <img src={source} className="credit-card__image" alt="" />;
  };

  const RenderFormItem = ({ name, label, type, placeholder }) => {
    return (
      <>
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          required
          type={type}
          className="form-control"
          id={name}
          placeholder={placeholder}
        />
      </>
    );
  };

  const processForm = (e) => {
    // stops normal form behaviour
    e.preventDefault();
    // call the event handler
    onSubmit();
    // clear form data
    formRef.current.reset();
  };

  return (
    <div className="py-2">
      <div className="card">
        <div className="card-header">
          <h5 className="text-center">Payment Invoice</h5>
        </div>
        <div className="card-body">
          <form ref={formRef} id="payment-form" onSubmit={processForm}>
            <div className="text-center d-flex justify-content-center">
              <RenderCardImage source={visa} />
              <RenderCardImage source={masterCard} />
              <RenderCardImage source={americanExpress} />
            </div>
            <div className="mb-3">
              <RenderFormItem
                name="name-on-card"
                label="Name on card"
                type="text"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-3">
              <RenderFormItem
                name="card-number"
                label="Card number"
                tyep="text"
              />
            </div>
            <div className="row">
              <div className="col">
                <RenderFormItem
                  name="expiry-date"
                  type="text"
                  label="Expiry date"
                  placeholder="MM / YY"
                />
              </div>
              <div className="col">
                <RenderFormItem name="cvv" label="CVV" type="text" />
              </div>
            </div>
            <div>
              <button className="btn btn-success mt-2 w-100" type="submit">
                <BsLock /> {` Pay $${total}`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

PaymentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PaymentForm;

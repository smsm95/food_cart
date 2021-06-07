import React from "react";
import PropTypes from "prop-types";

function Toast({ toastVisible, onClick }) {
  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 5 }}>
      <div
        className={toastVisible ? "hide" : "toast"}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header bg-success">
          <strong className="me-auto text-white">Success</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={onClick}
          ></button>
        </div>
        <div className="toast-body border-bottom border-left border-right">
          Payment Completed Successfully
        </div>
      </div>
    </div>
  );
}

Toast.propTypes = {
  toastVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Toast;

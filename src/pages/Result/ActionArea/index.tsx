import Modal from "@/pages/Result/ActionArea/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ActionArea() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="action-container">
      <div className="btn-container">
        <Link to="/" className="homeBtn icon-wrapper">
          <img src="/assets/home.png" alt="go home button" />
        </Link>
        <button
          className="shareBtn icon-wrapper"
          onClick={() => setIsOpen(true)}
        >
          <img src="/assets/share.png" alt="share button" />
        </button>
      </div>

      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
}

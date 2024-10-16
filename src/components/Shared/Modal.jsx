"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const body = document.body;
    let scrollY = 0;

    if (isOpen) {
      scrollY = window.scrollY;

      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.width = "100%";
    } else {
      const top = Math.abs(parseInt(body.style.top || '0'));
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      window.scrollTo(0, top);
    }

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className=" fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-t-2xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button with Circle Background */}
        <button
          className="border-2 border-white absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "../hooks/useToast";
import "../App.css";

const toastStyles = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-black",
  info: "bg-blue-500 text-white",
};

const Toast = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div>
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`p-4 rounded shadow-lg m-4 ${
              toastStyles[toast.type]
            } flex items-center`}
          >
            <span className="flex-1">{toast.message}</span>
            <button onClick={() => removeToast(toast.id)} className="ml-4">
              X
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Toast;

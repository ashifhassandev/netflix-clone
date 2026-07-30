import { useEffect } from "react";

const useAutoClose = (onClose) => {
    useEffect(() => {
        const timer = setTimeout(() => {
          onClose();
        }, 3000);
    
        return () => clearTimeout(timer);
      }, [onClose]);
};

export default useAutoClose;
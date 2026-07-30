import { useRef, useEffect } from "react";

const useNavbarScroll = () => {
    const navRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add("nav-dark");
              } else {
                navRef.current.classList.remove("nav-dark");
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: false });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return navRef;
};

export default useNavbarScroll;
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function Layout({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => locoScroll.destroy(); // Clean up only when App is unmounted
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}

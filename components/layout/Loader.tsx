"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-5 bg-bg"
        >
          <div className="font-grotesk font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            KARTHIK.DEV
          </div>
          <div className="relative h-0.5 w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="absolute inset-y-0 w-2/5 bg-gradient-to-r from-transparent via-primary to-transparent"
              animate={{ x: ["-130%", "330%"] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";
import { useState } from "react";
import { motion, Variants } from "motion/react";

export function AlarmIcon() {
  const [alarmSet, setAlarmSet] = useState<boolean>(false);
  const D_PATH1 = "m9 13 2 2 4-4";
  const D_PATH2 = "M12 9v4l2 2";
  return (
    <div onClick={() => setAlarmSet((prev) => !prev)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-alarm-clock-icon lucide-alarm-clock"
      >
        <circle cx="12" cy="13" r="8" />

        <motion.path
          key={alarmSet ? "on" : "off"}
          d={alarmSet ? D_PATH1 : D_PATH2}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 600,
            damping: 25,
            mass: 2,
          }}
        />

        {alarmSet ? <motion.path d="M5 3 2 6" /> : <path d="M5 3 2 6" />}

        <path d="m22 6-3-3" />
        <path d="M6.38 18.7 4 21" />
        <path d="M17.64 18.67 20 21" />
      </svg>
    </div>
  );
}

export function NextIcon() {
  const variant = {
    hidden: { pathLength: 0, opacity: 0 },
    hover: {
      pathLength: 1,
      opacity: 1,
    },
  };
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      whileHover="hover"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-right-icon lucide-chevron-right"
    >
      <path d="m9 18 6-6-6-6" />
      <motion.path
        variants={variant}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 800,
          damping: 30,
          mass: 2,
        }}
        className="rotate-360"
        d="M14 12H5"
      />
    </motion.svg>
  );
}

export function ChargingIcon() {
  const [hovered, setHovered] = useState(false);

  const variant: Variants = {
    hidden: {},
    hover: {
      transition: {
        type: "spring",
        stiffness: 800,
        damping: 20,
      },
    },
  };

  const chargeVariant = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.2,
      transition: { duration: 0.1 },
    },
    hover: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.1 },
    },
  };
  return (
    <motion.svg
      variants={variant}
      initial="hidden"
      whileHover="hover"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-battery-charging-icon lucide-battery-charging"
      onMouseEnter={() => setHovered((prev) => !prev)}
      onMouseLeave={() => setHovered((prev) => !prev)}
    >
      <motion.path variants={chargeVariant} d="m11 7-3 5h4l-3 5" />
      <motion.path
        d={`${hovered ? "M14.856 " : "M4"} 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935`}
      />
      <path d="M22 14v-4" />
      <motion.path
        d={` ${hovered ? " M5.14" : "M13"} 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936`}
      />
    </motion.svg>
  );
}

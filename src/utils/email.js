export const handleHireMeClick = (e) => {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const subject = "Opportunity Inquiry - Hiring / Collaboration";
  const body =
    "Hi Pratyaksh,\n\nI came across your portfolio and was impressed by your work in AI Engineering and Full-Stack Development.\n\nI would love to discuss a potential opportunity with you.\n\nBest regards,\n[Your Name / Company]";

  if (isMobile) {
    // Opens native Gmail App / Mail App on mobile without opening blank tabs
    window.location.href = `mailto:pratyaksh1594@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  } else {
    // Opens Gmail Web compose window in a new tab on desktop
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=pratyaksh1594@gmail.com&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }
};

"use client";

const LiftVideo = () => {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 640 }}>
      <video
        src="/assets/video/fuji-lift.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
      <div
        onContextMenu={(e) => e.preventDefault()}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "transparent",
          zIndex: 10,
          cursor: "default",
        }}
      />
    </div>
  );
};

export default LiftVideo;

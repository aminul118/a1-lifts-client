"use client";

const LocalVideoPlayer = () => {
  return (
    <div className="relative w-full max-h-[800px] overflow-hidden">
      <video
        src="/assets/videos/fuji-lift.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        onContextMenu={(e) => e.preventDefault()}
        className="w-full max-h-[800px] object-cover block"
      />
    </div>
  );
};

export default LocalVideoPlayer;

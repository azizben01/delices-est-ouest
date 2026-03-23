// import Video from "next-video";
// import video1 from "../../videos/video1.mp4";

// export default function MyVideos() {
//   return <Video src={video1} />;
// }

// components/CleanVideo.jsx
export default function CleanVideo({
  src,
  poster,
  autoPlay = false,
  loop = false,
  muted = false,
}) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-black">
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        controls={false} // Hide all controls
        className="w-full h-full object-cover"
      />

      {/* Optional: Add your own minimal play button overlay */}
      {!autoPlay && (
        <button
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
          onClick={(e) => {
            const video = e.currentTarget.previousSibling;
            video.play();
            e.currentTarget.style.display = "none";
          }}
        >
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
            <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-black ml-1"></div>
          </div>
        </button>
      )}
    </div>
  );
}

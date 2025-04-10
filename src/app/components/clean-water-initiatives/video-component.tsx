const BeautifulVideoSection = () => {
  return (
    <section className="w-full bg-[#F4FAF7] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Heading */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#154A62] mb-2">
            Empowering Stories in Action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Watch how GT Foundation is transforming communities through
            education, youth empowerment, and sustainable development.
          </p>
        </div>

        {/* Responsive Video Wrapper */}
        <div className="w-full aspect-video max-w-4xl rounded-xl shadow-lg overflow-hidden">
          {/* Example YouTube embed */}
          {/* <iframe
            className="w-full h-full"
            src="https://youtu.be/hKQ3XQYTmx4?si=gm3K5mVmnLknCNDc" // Replace with your video link
            title="GT Foundation Impact Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          /> */}
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
          >
            <source
              src="https://youtu.be/hKQ3XQYTmx4?si=gm3K5mVmnLknCNDc"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default BeautifulVideoSection;

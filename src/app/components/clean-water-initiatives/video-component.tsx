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
          <div className="w-full h-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/zguTC4vFbXw?autoplay=1&mute=1&loop=1&playlist=zguTC4vFbXw"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeautifulVideoSection;

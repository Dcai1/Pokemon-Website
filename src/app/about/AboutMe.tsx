export default function AboutMe() {
  return (
    <section id="about-me" className="max-w-6xl px-4 mx-auto my-8 sm:px-6">
      <h2 className="mb-4 text-2xl font-bold sm:text-3xl text-rose-800">
        About Me
      </h2>

      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className="flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full sm:w-32 sm:h-32 bg-rose-50 text-rose-500 text-md">
          David Cai
        </div>

        <div className="text-rose-700">
          <p className="mb-4 text-base leading-relaxed sm:text-lg">
            As one of my first projects as a developer, this website has been a
            journey and has paved the path for me to embark on. You may have
            noticed that this website lacks many filtering and page features.
            That is because it was developed with a learning-first mindset. As I
            improve as a developer and deepen my skills, I will be adding more
            features to this site.
          </p>

          <p className="text-sm sm:text-base text-rose-600">
            As a full-stack web developer passionate about creating interactive
            and functional applications, I enjoy learning and applying new
            skills into projects I care about.
          </p>
        </div>
      </div>
    </section>
  );
}

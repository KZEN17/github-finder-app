const About = () => {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href="https://zlatkonikoloski.netlify.app/">
          {" "}
          Zlatko Nikoloski
        </a>{" "}
        portfolio made by
        <strong>
          <a href="https://traversymedia.com"> Zlatko</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Built By:
        <a className="text-white" href="https://twitter.com/Zlatko1412">
          &nbsp;Zlatko Nikoloski
        </a>
      </p>
    </>
  );
};

export default About;

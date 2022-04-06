import "./App.css";
import Education from "./Education";
import Header from "./Header";
import SectionName from "./SectionName";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import experiences from "./data/experiences";

function App() {
  return (
    <div className="">
      <header className="bg-slate-600 text-white">
        <div className="container mx-auto flex gap-10 py-10 relative">
          <div className="w-1/3 relative flex justify-end">
            <img
              src="/images/avatar.jpeg"
              className="rounded-full w-48 h-48 object-cover object-left right-0 shadow-xl print:shadow-none"
            />
          </div>

          <div className="flex-1">
            <Header />
          </div>
        </div>
      </header>

      <div className="container mx-auto flex gap-10 mb-10">
        <div className="w-1/3"></div>

        <div className="flex-1">
          <Skills />
        </div>
      </div>

      <SectionName name="Work Experience" />

      {experiences.map((exp) => {
        return <WorkExperience {...exp} />;
      })}

      <div className="h-20"></div>
      <SectionName name="Education" />

      <Education
        title="Vietnam National Univeristy Ho Chi Minh City - University Of Science"
        desciption="Bachelor of IT"
        logo="/images/university.webp"
        duration="September 2009 - September 2014"
      />

      <div className="h-20"></div>

      <div className="h-20"></div>
    </div>
  );
}

export default App;

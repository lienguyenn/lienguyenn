import './App.css'
import Education from './Education'
import Header from './Header'
import SectionName from './SectionName'
import Skills from './Skills'
import WorkExperience from './WorkExperience'

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

      <WorkExperience
        title="QA Engineer"
        desciption="2359 is an award-winning full-service consultancy that operates at the intersection of Design,
 Technology, Innovation, and Business. As a QA Engineer, I worked on the Mellow project, and am currently working on the NUS Project."
        responsibilities={[
          'Writing automation test scripts for functions of NUS (Web)',
          'Writing performance test for NUS (Web)',
          'Following, testing and reporting bugs for tasks delivered on Pivotal Tracker',
          'Creating missing tasks and discussing with Project Manager to rearrange tasks according to their priority',
          'Reviewing requirements - UI/UX - Workflow, followed by identifying unclear or inconsistent items and communicating with PM/ Designer/ Engineers to clarify these',
          'Writing document details for all functions of NUS /Mellow',
          'Writing acceptance criteria/ description detail for tasks on Pivotal tracker',
          'Writing internal test case and UAT test case',
          'Preparing test scenario for UAT',
          'Conducting regression test/ smoke test before each release cycle',
          'Reporting testing result to the team',
        ]}
        logo="/images/2359.svg"
        location="Singapore"
        duration="March 2021 - Current"
      />
      <WorkExperience
        title="QA Team Leader"
        desciption="As the team leader, I am responsible for recruiting and mentoring new talents."
        responsibilities={[
          'Trained and mentored new member; supported and improved their testing skills',
          'Worked closely with PO, DevOps and technical DEV to figure out what we should do to improve our processes',
        ]}
        logo="/images/7Eleven.png"
        location="Ho Chi Minh City, Vietnam"
        duration="July 2019 - January 2021 (1 year 6 months)"
      />
      <WorkExperience
        title="QA Engineer"
        desciption="Working in a team of 20 members, I have used system like Headquarter (HQ), Store Computer (SC), Point of Sale (where a retail transaction is complete and integrated with Payoo, Grab Moca, Momo, Zalo Pay, AirPay, Smart Pay, Face Pay, etc.), GOT (a website used to order products), HHT (an app used to order check-in, inventory check product), Portal (CDC, Supplier, Logistic), 7-Rewards app and 7-NOW app.        "
        responsibilities={[
          'Reviewed user story and new UI/UX design, followed by identifying unclear or inconsistent items and Q&A to clarify these, as well as created/updated document or make flowchart',
          'Qualified POS functions which connected to SC, HHT, HQ, SAP and 7-Reward App',
          'Performed regression testing/smoke test in every release cycle to the delivery quality application',
          'Wrote and structured test cases to maximize and increase test coverage for the whole system',
          'Wrote basic script to query database to check logs and sync data to test',
          'Automated test cases to reduce testing workload in regression phases',
          'Communicated directly with Product Manager about issues/problems and worked closely with developer team to figure out edge case that helped increase test cases quantity',
          'Prepared testing environment: deployed testing version and restored DB',
          'Wrote test script to automation some main flows and auto create test data (using Open test)',
          'Testing tools used include Jira, Sourcetree, Jenkins, Rancher, Gitlab, Android studio, Kafka, Postman, Jmetter, Open Test (Web), Appium(Android)',
        ]}
        logo="/images/7Eleven.png"
        location="Ho Chi Minh City, Vietnam"
        duration="2016 - July 2019 (3 years 7 months)"
      />
      <WorkExperience
        title="QA Engineer"
        desciption="As the QA Engineer, I had worked on KPI (Key Performance Indicator), an internal web service. It is a measurable value that demonstrates how effectively the company is in achieving key business objectives on all games that had been released. Additionally, I had worked on Stick Chat App, which is an application provider online message that allows the user to interact and creatively express their personal style."
        responsibilities={[
          'For KPI, I helped to write test case, checklist, test script using MongoDB and report bug using RedMine',
          'For Stick Chat App, I helped to write test case, checklist, execute manual testing and report bug',
        ]}
        logo="/images/gntvn.jpeg"
        location="Ho Chi Minh City, Vietnam"
        duration="2015 -2016 (1 year)"
      />

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
  )
}

export default App

import React from 'react'

function Skills() {
  return (
    <section className="py-8">
      <div className="">
        <div className="text-lg font-bold mb-3">Skills</div>

        <div className="flex gap-8 flex-grow">
          <div className="text-center">
            <div className="rounded-lg border w-20 h-20 flex items-center justify-center">
              <img
                src="/images/playwright.svg"
                className="object-fill w-14 grayscale"
              />
            </div>
            <div className="mt-3">Playwright</div>
          </div>
          <div className="text-center">
            <div className="rounded-lg border w-20 h-20 flex items-center justify-center">
              <img
                src="/images/k6.png"
                className="object-fill w-14 grayscale"
              />
            </div>
            <div className="mt-3">K6</div>
          </div>
          <div className="text-center">
            <div className="rounded-lg border w-20 h-20 flex items-center justify-center">
              <img
                src="/images/selenium.png"
                className="object-fill w-14 grayscale"
              />
            </div>
            <div className="mt-3">Selenium</div>
          </div>
          <div className="text-center">
            <div className="rounded-lg border w-20 h-20 flex items-center justify-center">
              <img
                src="/images/appium.webp"
                className="object-fill w-14 grayscale"
              />
            </div>
            <div className="mt-3">Appium</div>
          </div>
          <div className="text-center">
            <div className="rounded-lg border w-20 h-20 flex items-center justify-center">
              <img
                src="/images/opentest.png"
                className="object-fill w-14 grayscale"
              />
            </div>
            <div className="mt-3">OpenTest</div>
          </div>
          <div className="text-center">
            <div className="rounded-lg border w-20 h-20 flex items-center justify-center">
              <img
                src="/images/cypress.png"
                className="object-fill w-14 grayscale"
              />
            </div>
            <div className="mt-3">Cypress</div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="text-lg font-bold mb-3">Tools</div>

        <div className="flex gap-8 flex-grow flex-wrap max-w-2xl">
          <div className="text-center">
            <div className="rounded-lg border w-20 h-20 flex items-center justify-center">
              <img
                src="/images/pivotal.svg"
                className="object-fill w-14 grayscale"
              />
            </div>
            <div className="mt-3">Pivotal</div>
          </div>
          <div className="text-center">
            <div className="rounded-lg border w-20 h-20 flex items-center justify-center">
              <img
                src="/images/rancher.svg"
                className="object-fill w-14 grayscale"
              />
            </div>
            <div className="mt-3">Rancher</div>
          </div>
          <div className="text-center">
            <div className="rounded-lg border w-20 h-20 flex items-center justify-center">
              <img
                src="/images/jmeter.png"
                className="object-fill w-14 grayscale"
              />
            </div>
            <div className="mt-3">JMeter</div>
          </div>
          <div className="text-center">
            <div className="rounded-lg border w-20 h-20 flex items-center justify-center">
              <img
                src="/images/jenkins.png"
                className="object-fill w-14 grayscale"
              />
            </div>
            <div className="mt-3">Jenkins</div>
          </div>
          <div className="text-center">
            <div className="rounded-lg border w-20 h-20 flex items-center justify-center">
              <img
                src="/images/postman.png"
                className="object-fill w-14 grayscale"
              />
            </div>
            <div className="mt-3">Postman</div>
          </div>
          <div className="text-center">
            <div className="rounded-lg border w-20 h-20 flex items-center justify-center">
              <img
                src="/images/sourcetree.svg"
                className="object-fill w-14 grayscale"
              />
            </div>
            <div className="mt-3">Sourcetree</div>
          </div>
          <div className="text-center">
            <div className="rounded-lg border w-20 h-20 flex items-center justify-center">
              <img
                src="/images/jira.png"
                className="object-fill w-14 grayscale"
              />
            </div>
            <div className="mt-3">Jira</div>
          </div>
          <div className="text-center">
            <div className="rounded-lg border w-20 h-20 flex items-center justify-center">
              <img
                src="/images/kafka.png"
                className="object-fill w-14 grayscale"
              />
            </div>
            <div className="mt-3">Kafka</div>
          </div>
          <div className="text-center">
            <div className="rounded-lg border w-20 h-20 flex items-center justify-center">
              <img
                src="/images/visual-studio-team-services.webp"
                className="object-fill w-14 grayscale"
              />
            </div>
            <div className="mt-3 -indent-4">
              VS Team Services
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

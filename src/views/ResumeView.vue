<script lang="ts" setup>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
</script>
<template>
  <pageContainer>
    <NavbarView />
    <main class="px-5 md:px-10 flex flex-col justify-center gap-5">
      <div data-scroll-section class="md:pt-40 pt-32 py-5 flex flex-col gap-5">
        <div class="text-3xl md:text-5xl">Resume</div>
      </div>
      <div data-scroll-section class="flex items-center justify-between py-5">
        <div></div>
        <div class="text-sm opacity-50">Download</div>
      </div>
      <div data-scroll-section>
        <div
          class="dark:bg-zinc-800/10 bg-zinc-400/5 text-xs md:text-sm p-10 aspect-square border border-transparent rounded-sm hover:border-zinc-50/10 transition-all duration-700 hover:scale-[1.01]"
        >
          <div class="flex flex-col gap-2">
            <div class="text-3xl font-bold">Abidemi Ope (Harry)</div>
            <div class="flex items-center gap-x-5 gap-y-2 text-sm flex-wrap">
              <span>Software Engineer</span><span class="opacity-50">|</span>
              <a class="shrink" href="mailto:opeabidemi@gmail.com">opeabidemi@gmail.com</a>
              <span class="opacity-50">|</span
              ><a class="shrink" href="tel:+2349022449670">+2349022449670</a>
              <span class="opacity-50">|</span>
              <a
                href="http://theharryszn.dev"
                target="_blank"
                rel="noopener noreferrer"
                class="shrink"
                >theharryszn.dev</a
              >
            </div>
            <p class="text-zinc-400 py-3">
              I'm a self-taught developer with a passion for creating intuitive and user-friendly
              experiences. I specialise in building fullstack web applications and mobile
              applications with a focus on usabilty and simplicity.
            </p>
            <hr class="my-5 opacity-10" />
          </div>
          <div class="grid grid-cols-2 gap-10 py-3">
            <div class="flex flex-col gap-10">
              <div class="flex flex-col gap-5">
                <div class="text-xl font-bold">Experience</div>
                <div class="flex flex-col gap-5">
                  <div class="flex flex-col gap-3">
                    <div>
                      <div class="font-semibold">Web Development Tutor</div>
                      <div class="text-sm">Capriquota Technologies | 2021</div>
                    </div>
                    <div class="text-zinc-400">
                      I taught students about various web technologies, including HTML, CSS, and
                      JavaScript. I provided remote tutoring and supported students in developing
                      critical thinking skills and effective study habits to improve their grades.
                      <br />
                      I also coordinated lesson plans, created course materials, and prepared
                      discussion questions to enhance the learning experience. Additionally, I
                      reviewed student's classwork and assisted them with their homework to
                      reinforce their understanding of the assignments.
                    </div>
                  </div>
                  <div class="flex flex-col gap-3">
                    <div>
                      <div class="font-semibold">Faculty Member (Intern)</div>
                      <div class="text-sm">Aptech Computer Education | 2021</div>
                    </div>
                    <div class="text-zinc-400">
                      Aligned with system-wide goals and priorities, I developed and executed
                      instructional programs to meet the unique needs of students. My teaching
                      approach focused on fostering critical and computational thinking, promoting
                      digital citizenship, and enhancing technology literacy. <br />
                      I also taught students how to leverage technology for research and homework
                      completion, and provided foundational knowledge on computer science, hardware
                      configuration, and entry-level coding. In addition to classroom instruction, I
                      delivered engaging presentations and lectures on topics related to C#
                      Programming and Android, and provided students with practical instruction in
                      programming language applications such as Kotlin and Java.
                    </div>
                  </div>
                  <div class="flex flex-col gap-3">
                    <div>
                      <div class="font-semibold">Senior Faculty Member</div>
                      <div class="text-sm">Aptech Computer Education | 2022</div>
                    </div>
                    <div class="text-zinc-400">
                      To evaluate students' progress, I graded assignments, papers, and exams. As a
                      laboratory supervisor, I oversaw both basic and advanced activities in both
                      Android and Web Development. <br />
                      I also supported senior students in exploring advanced concepts in Agile
                      Development and mentored those conducting research into specific topics. In
                      order to foster a learning-focused environment, I encouraged active student
                      participation and involvement. Finally, I taught advanced coursework to a
                      cohort of over 50 students each semester.
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-5">
                <div class="text-xl font-bold">Tools</div>
                <ul class="flex gap-2 flex-col">
                  <li>
                    <strong class="font-semibold">Text Editors:</strong
                    ><span class="text-zinc-400"> VS Code</span>
                  </li>
                  <li>
                    <strong class="font-semibold">(IDEs):</strong>
                    <span class="text-zinc-400"> IntelliJ IDEA, Android Studio, XCode </span>
                  </li>
                  <li>
                    <strong class="font-semibold">Version Control Systems:</strong
                    ><span class="text-zinc-400"> Git, GitLab </span>
                  </li>
                  <li>
                    <strong class="font-semibold">Debugging Tools:</strong
                    ><span class="text-zinc-400"> Chrome DevTools, Xcode Debugger </span>
                  </li>
                  <li>
                    <strong class="font-semibold">Package Managers:</strong
                    ><span class="text-zinc-400"> npm, Yarn, Gradle </span>
                  </li>
                  <li>
                    <strong class="font-semibold">Testing Frameworks:</strong
                    ><span class="text-zinc-400"> Jest, Mocha, JUnit </span>
                  </li>
                  <li>
                    <strong class="font-semibold">Database Management:</strong
                    ><span class="text-zinc-400"> MongoDB Compass </span>
                  </li>
                  <li>
                    <strong class="font-semibold">API Development:</strong
                    ><span class="text-zinc-400"> Postman, Apollo Studio </span>
                  </li>
                  <li>
                    <strong class="font-semibold">Cloud Platforms:</strong
                    ><span class="text-zinc-400"> AWS, Google Cloud Platform </span>
                  </li>
                  <li>
                    <strong class="font-semibold">Code Review Tools:</strong
                    ><span class="text-zinc-400"> GitHub, GitLab, Bitbucket </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex flex-col gap-10">
              <div class="flex flex-col gap-5">
                <div class="text-xl font-bold">Education</div>
                <div>
                  <div>
                    <div class="font-semibold">Aptech Computer Education</div>
                    <div class="text-sm">Advanced Diploma in Software Engineering</div>
                    <div class="text-zinc-400 text-sm">2019 - 2021</div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-5">
                <div class="text-xl font-bold">Achievements</div>
                <div>
                  <div>Second Runner Up Techwiz Global Competition</div>
                </div>
              </div>
              <div class="flex flex-col gap-5">
                <div class="text-xl font-bold">Skills</div>
                <ul class="flex gap-2 flex-col">
                  <li>
                    <div class="font-semibold">Mobile App Development:</div>
                    <div class="text-zinc-400 py-2">
                      Experienced in developing native mobile applications for iOS and Android using
                      React Native, Kotlin, and Jetpack Compose.
                    </div>
                  </li>
                  <li>
                    <div class="font-semibold">Backend Development:</div>
                    <div class="text-zinc-400 py-2">
                      Proficient in developing RESTful APIs and backend systems using Node.js, Java,
                      and GraphQL.
                    </div>
                  </li>
                  <li>
                    <div class="font-semibold">Critical Thinking:</div>
                    <div class="text-zinc-400 py-2">
                      Skilled in analyzing complex problems and finding creative solutions to ensure
                      smooth project delivery.
                    </div>
                  </li>
                  <li>
                    <div class="font-semibold">Quality Assurance:</div>
                    <div class="text-zinc-400 py-2">
                      Experienced in implementing automated testing frameworks and manual testing to
                      ensure high-quality code.
                    </div>
                  </li>
                  <li>
                    <div class="font-semibold">Web Development:</div>
                    <div class="text-zinc-400 py-2">
                      Proficient in developing web applications using React, Next.js, TypeScript,
                      and Sass.
                    </div>
                  </li>
                  <li>
                    <div class="font-semibold">Open Source:</div>
                    <div class="text-zinc-400 py-2">
                      Active contributor to various open source projects and experienced in working
                      collaboratively with other developers to deliver high-quality software.
                    </div>
                  </li>
                  <li>
                    <div class="font-semibold">JavaScript and TypeScript:</div>
                    <div class="text-zinc-400 py-2">
                      <ul class="flex flex-col gap-2">
                        <li>
                          Skilled in writing clean and maintainable code using JavaScript and
                          TypeScript.
                        </li>
                        <li>
                          Experienced in working with popular frameworks and libraries such as
                          React, React Native, and Next.js.
                        </li>
                        <li>
                          Proficient in modern JavaScript features such as async/await, Promises,
                          and ES6+ syntax.
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div class="font-semibold">Responsive Web Design:</div>
                    <div class="text-zinc-400 py-2">
                      <ul class="flex flex-col gap-2">
                        <li>
                          Experienced in developing responsive web designs that work well on desktop
                          and mobile devices.
                        </li>
                        <li>
                          Skilled in using CSS and Sass to create visually appealing and
                          user-friendly designs.
                        </li>
                        <li>
                          Proficient in using CSS frameworks such as Bootstrap and Materialize to
                          expedite development.
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div class="font-semibold">Solidity and Web3:</div>
                    <div class="text-zinc-400 py-2">
                      Skilled in developing smart contracts on the Ethereum blockchain using
                      Solidity and working with Web3.js to interact with the blockchain.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-scroll-section class="pt-20 flex flex-col justify-center gap-10">
        <blockquote class="text-3xl pl-5 border-l-4 border-zinc-800/50">
          <!-- <span class="text-5xl font-extrabold leading-[0] opacity-30">{{ `"` }}</span> -->
          Software engineering is the art of creating something out of nothing, and then making it
          available to everyone.
        </blockquote>
        <div class="leading-relaxed">
          As a software engineer, I'm passionate about using my skills to build solutions that make
          a positive impact on society and the environment. Together, let's envision a better future
          by developing innovative software applications that promote sustainability, social
          responsibility, and human well-being. By working collaboratively, we can create a better
          world for ourselves and for generations to come.
        </div>
        <div class="flex gap-10 flex-wrap gap-y-5">
          <a
            href="mailto:opeabidemi@gmail.com"
            class="text-sm opacity-50 hover:opacity-100 shrink"
            rel="noopener noreferrer"
            >EMAIL</a
          >
          <a
            href="https://www.linkedin.com/in/abidemi-ope-1ba99019a"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm opacity-50 hover:opacity-100 shrink"
            >LINKEDIN</a
          >
          <a
            href="https://twitter.com/theharryszn"
            class="text-sm opacity-50 hover:opacity-100 shrink"
            rel="noopener noreferrer"
            target="_blank"
            >TWITTER</a
          >
          <a
            href="https://github.com/theharryszn"
            class="text-sm opacity-50 hover:opacity-100 shrink"
            rel="noopener noreferrer"
            target="_blank"
            >GITHUB</a
          >
          <a
            href="https://instagram.com/theharryszn"
            class="text-sm opacity-50 hover:opacity-100 shrink"
            rel="noopener noreferrer"
            target="_blank"
            >INSTAGRAM</a
          >
          <a
            href="https://snapchat.com/add/theharryszn"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm opacity-50 hover:opacity-100 shrink"
            >SNAPCHAT</a
          >
          <a
            href="https://open.spotify.com/user/31br6djiz7oburebyiscmbr4lqny?si=71fcf51fb70e4ca3"
            rel="noopener noreferrer"
            target="_blank"
            class="text-sm opacity-50 hover:opacity-100 shrink"
            >SPOTIFY</a
          >
        </div>
      </div>
    </main>
    <FooterView />
  </pageContainer>
</template>

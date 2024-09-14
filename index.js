const expandBtn = document.querySelector(".expand i");
const fullSize = document.querySelector(".fullsize");

const openFullsize = () => {
  fullSize.classList.remove("hidden");
  if (!fullSize.classList.contains("hidden")) {
    fullSize.innerHTML = `
        <div class='fullsize_body'>
            <div class="go_back">
                <i class="fa-solid fa-xmark"></i>
             </div>
             <div class="fullsize_info_section">
  <div class="fullsize_info_greeting">
    <span>
      Hello! My name is Eduard, and I’m turning 17 soon. I am passionate about web development and have a strong foundation in JavaScript, React, and other modern technologies. I am a quick learner and can easily adapt to new challenges, which allows me to solve complex tasks and build various projects efficiently.
    </span>
  </div>
  <div class="fullsize_pet-projects">
    <h3>My Pet Projects:</h3>
    <ul>
      <li>
        <strong>To-Do List:</strong> Developed a pet project for task management using Redux and Redux Toolkit. It includes features like adding, editing, deleting tasks, tracking their completion, and maintaining a history log.
      </li>
      <li>
        <strong>Online Marketplace:</strong> Built a platform for posting advertisements related to truck sales. Users can easily create listings, add photos, and manage their offerings.
      </li>
      <li>
        <strong>Desktop Version of Instagram:</strong> Created a desktop application where users can send messages, create posts, like, comment, and follow other users. The project includes modern technologies to provide a smooth user experience and functionality.
      </li>
      <li>
        I’ve also worked on various other projects like this, showcasing different features and expanding my skill set.
      </li>
    </ul>
  </div>
  <div class="fullsize_stack">
    <h3>My Tech Stack:</h3>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Redux</li>
      <li>Redux Toolkit</li>
      <li>Git</li>
      <li>GitHub</li>
      <li>TypeScript (currently learning)</li>
    </ul>
    <span>
      I am always open to new ideas and projects and eager to expand my knowledge and skills. If you have any interesting proposals or questions, feel free to reach out!
    </span>
  </div>
  
</div>

        </div>
        `;
  }

  const goBackBtn = document.querySelector(".go_back");
  goBackBtn.addEventListener("click", () => {
    fullSize.classList.add("hidden");
  });
};

expandBtn.addEventListener("click", openFullsize);

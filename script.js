fetch(`users-data.json`)
  .then((response) => response.json())
  .then((users) => {
    const user1 = users.filter((user) => user.userId == 1);

    // used try and catch for error in user details

    for (x in user1) {
      const {
        userId,
        name,
        title,
        skills,
        location,
        contact,
        edu,
        photos,
        quote,
        memoji,
        project,
        projectGit,
        social,
        inspired,
        website,
        projectUrl,
      } = user1[x];

      function myGenFn(element) {
        for (x in element) {
          try {
            if (element[x] == "") {
              throw new Error(
                "Please wait while host is fixing the error or inform at '+918801717925' or 'anildevulapally45@gmail.com', Thank you!!"
              );
            }
          } catch (err) {
            console.error(err.name);
            alert(err.message);
            console.error(
              (err.message = "Something is undefined in user/array details.")
            );
            console.error(err.stack);
          }
        }
      }

      myGenFn(title);
      myGenFn(skills);
      myGenFn(location);
      myGenFn(contact);
      myGenFn(edu);
      myGenFn(photos);
      myGenFn(memoji);
      myGenFn(project);
      myGenFn(projectGit);
      myGenFn(social);
      myGenFn(projectUrl);

      try {
        if ((userId, name, quote, inspired, website == "")) {
          throw new Error(
            "Please wait while host is fixing the error or inform at '+918801717925' or 'anildevulapally45@gmail.com', Thank you!!"
          );
        }
      } catch (err) {
        console.error(err.name);
        alert(err.message);
        console.error(err.stack);
        console.error(
          (err.message = "Something is undefined in user details.")
        );
      }

      try {
      } catch (err) {
        // console.error(err.name)
        // alert(err.message)
      }
    }

    const rtHeader = document.getElementById("rt-header");
    const hello = document.getElementById("hello");
    // const profileImg = document.getElementById("profile-img");
    const newProfileImg = document.createElement("img");
    const intro = document.getElementById("intro");
    const headerName = document.getElementById("header-name");
    const mainName = document.getElementById("main-name");
    const skillCard1 = document.getElementById("skill-card1");
    const skillCard2 = document.getElementsByClassName("skill-card2");
    const titleText = document.getElementById("mern");
    const myLocation = document.getElementById("location");
    const quoteContainer = document.getElementById("quotes");
    const quoteTxt = document.createElement("div");
    const quoteAuther = document.createElement("div");
    const wImg = document.getElementsByClassName("work-img");
    const firstImg = document.createElement("img");
    const projectImg = document.getElementById("project-img");
    const vGit = document.getElementById("v-git-sub");
    const vGitA = document.createElement("a");
    const aboutRight = document.getElementById("about-rt");
    const aRImg = document.createElement("img");
    const aboutVisit = document.getElementById("about-visit-link");
    const aboutVLink = document.createElement("a");
    const contactBtn = document.getElementById("contact-btn");
    const letsWork = document.getElementById("lets-work");
    const inspire = document.getElementById("insp");
    const inspA = document.createElement("a");
    const ddBtn = document.getElementById("dd-btn");
    const ddCard = document.getElementById("dd-card-id");

    function innerTextFn() {
      rtHeader.classList = "rt-header";
      hello.classList = "hello";
      headerName.innerText = `${user1[0].name}`;
      headerName.href = `${user1[0].website}`;
      mainName.innerText = `${user1[0].name.slice(0, 4)}!`;
      skillCard1.innerText = `${user1[0].skills[0]}`;
      skillCard2[0].innerText = `${user1[0].skills[1]}`;
      titleText.innerText = `${user1[0].title[0]}`;
      myLocation.innerText = `Based in ${user1[0].location[0]}`;
      myLocation.href = `${user1[0].location[1]}`;
      quoteTxt.innerText = `${user1[0].quote.slice(0, 68)}`;
      quoteAuther.innerText = `${user1[0].quote.slice(68, 85)}`;
      firstImg.src = `${user1[0].memoji[0]}`;
      firstImg.alt = `Image`;
      firstImg.classList = "rounded-circle";
      vGitA.href = `${user1[0].social[0]}`;
      vGitA.target = "_blank";
      vGitA.innerText = `View my Git?`;
      aRImg.src = `${user1[0].memoji[5]}`;
      aRImg.alt = "Memoji";
      aRImg.classList = "rounded-circle";
      aboutVLink.href = `${user1[0].social[1]}`;
      aboutVLink.innerText = `Wanna know more? Visit my LinkedIn`;
      aboutVLink.target = "_blank";
      inspA.href = `${user1[0].inspired}`;
      inspA.innerText = `Inspired from Mili Pernia Gonzalez`;
      inspA.target = "_blank";
    }

    function cssFunction() {
      newProfileImg.src = `${user1[0].photos[3]}`;
      newProfileImg.classList = "profile-image rounded-circle";
      intro.style.cssText =
        "display: flex; justify-content: center; text-align: center; margin-top: 70px;";
      quoteTxt.style.cssText = "font-size: 60px;";
      quoteTxt.classList = "quote-txt";
      quoteAuther.style.cssText =
        "font-size: 40px; margin: 20px auto 30px; color: rgba(255, 255, 255, 0.3);";
      quoteAuther.classList = "quote-txt-A";
    }

    function imgOfProject() {
      const listItem = user1[0].project;
      const mainList = user1[0]["projectUrl"];

      for (z in mainList) {
        const mainContainer = document.createElement("div");
        const aContainer = document.createElement("a");
        const pImgSub = document.createElement("img");

        mainContainer.classList = "proj-main";

        aContainer.href = `${mainList[z]}`;
        aContainer.classList = "project-container";
        aContainer.target = "_blank";

        pImgSub.src = `${listItem[z]}`;
        pImgSub.classList = "project-img-sub";
        pImgSub.alt = "Project_Images";

        pImgSub.addEventListener("pointermove", () => {
          pImgSub.style.cssText =
            "transform: skew(-2.5deg, 0deg) translate(0px, -15px); box-shadow: 8px 8px 5px 1px rgba(127, 127, 127, 0.5);transition: all 0.5s;";
        });

        pImgSub.addEventListener("pointerout", () => {
          pImgSub.style.cssText =
            "transform: skew(0deg, 0deg) translate(0px, 0px); box-shadow: none;transition: all 0.5s;";
        });

        aContainer.appendChild(pImgSub);
        mainContainer.appendChild(aContainer);
        projectImg.appendChild(mainContainer);
      }
    }

    contactBtn.addEventListener("pointerover", () => {
      contactBtn.style.cssText =
        "transform: translate(0px, -10px); transition: all 0.5s; background: #009FFF; box-shadow: 0px 10px 10px 2px rgba(255, 255, 255, 0.1);";
    });
    contactBtn.addEventListener("pointerout", () => {
      contactBtn.style.cssText =
        "transform: translate(0px, 0px); transition: all 0.5s; background: #26243b; box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.5);";
    });
    contactBtn.addEventListener("click", (e) => {
      e.preventDefault();
      location.pathname = `/my-card/`;
    });
    letsWork.addEventListener("click", (e) => {
      e.preventDefault();
      location.pathname = `/my-card/`;
    });
    hello.addEventListener("pointerout", () => {
      hello.style.cssText = "transition: all 1s; display: none;";
    });
    hello.addEventListener("click", () => {
      hello.style.cssText = "transition: all 1s; display: none;";
    });
    ddBtn.addEventListener("click", () => {
      ddCard.classList.toggle("dd-card");
    });

    imgOfProject();
    innerTextFn();
    cssFunction();

    profileImg.appendChild(newProfileImg);
    quoteContainer.appendChild(quoteTxt);
    quoteContainer.appendChild(quoteAuther);
    wImg[0].prepend(firstImg);
    vGit.appendChild(vGitA);
    aboutRight.appendChild(aRImg);
    aboutVisit.appendChild(aboutVLink);
    inspire.appendChild(inspA);
  });

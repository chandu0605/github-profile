async function userData() {
    try {
      let username = document.getElementById("inputId").value;
      let displayEle = document.getElementById("showId");
      displayEle.innerHTML = "";

      let url = `https://api.github.com/users/${username}`;
      let res = await fetch(url, {
        headers: {
          'Authorization': `your_github_token_here`, 
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'gitProfile'
        }
      });

      let userdata = await res.json();
      console.log(userdata);

      let cardWrapper = document.createElement("div");
      cardWrapper.className = "card-box text-center";

      // Avatar
      let imageEle = document.createElement("img");
      imageEle.src = userdata.avatar_url;
      imageEle.alt = "User Avatar";

      // List of info
      let ulEle = document.createElement("ul");

      let nameLi = document.createElement("li");
      nameLi.textContent = `Name: ${userdata.name || "Not available"}`;
      ulEle.appendChild(nameLi);

      //Login Id
      let loginLi = document.createElement("li");
      loginLi.textContent = `Username: ${userdata.login}`;
      ulEle.appendChild(loginLi);

      //Bio

      let bioLi = document.createElement("li");
      bioLi.textContent=`Bio: ${userdata.bio}`;
      ulEle.appendChild(bioLi);


      // Account create date
      let dateLi = document.createElement("li");
      const createdDate = new Date(userdata.created_at).toLocaleDateString();
      dateLi.textContent = `Account Created: ${createdDate}`;
      ulEle.appendChild(dateLi);


      // Resporitries
      let reposLi = document.createElement("li");
      reposLi.textContent = `Public Repos: ${userdata.public_repos}`;
      ulEle.appendChild(reposLi);


      //User Id
      let idLi = document.createElement("li");
      idLi.textContent = `User ID: ${userdata.id}`;
      ulEle.appendChild(idLi);


      // Last Update
      let updateLi = document.createElement("li");
      const updateDate = new Date(userdata.updated_at).toLocaleDateString(); 
      updateLi.textContent = `Last Update: ${updateDate}`;
      ulEle.appendChild(updateLi); 


     // Email Id
      let emailLi = document.createElement("li");
      emailLi.textContent = `Email Id: ${userdata.email}`;
      ulEle.appendChild(emailLi);

      cardWrapper.appendChild(imageEle);
      cardWrapper.appendChild(ulEle);
      displayEle.appendChild(cardWrapper);

    } catch (error) {
      console.log(error);
    }
  }
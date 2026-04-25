let dark = false;
const html = document.documentElement;
const iconMoon = document.querySelector("#icon-moon");
const iconSun = document.querySelector("#icon-sun");
const label = document.querySelector("#theme-label");
const themeToggleBtn = document.querySelector("#theme-toggle");

const errorMsg = document.querySelector("#error-msg");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

const avatar = document.querySelector("#avatar");
const userName = document.querySelector("#user-name");
const userLogin = document.querySelector("#user-login");
const campany = document.querySelector("#campany");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");
const repos = document.querySelector("#repos");
const bioMobile = document.querySelector("#bio-mobile");
const bioDesktop = document.querySelector("#bio-desktop");
const userJoined =document.querySelector("#user-joined");
const loc = document.querySelector("#location");
const twitter = document.querySelector("#twitter");
const blog = document.querySelector("#blog");


themeToggleBtn.addEventListener("click", () => {
  // !seni seviyorum
  dark = !dark;
  html.classList.toggle("dark", dark);
  label.textContent = dark ? "LIGHT" : "DARK";
  iconMoon.classList.toggle("hidden", dark);
  iconSun.classList.toggle("hidden", !dark);
});

async function search(username) {
  const res = await fetch(`https://api.github.com/users/${username}`);

  if (!res.ok) {
    errorMsg.classList.remove("hidden");
    return;
  }
  const user = await res.json();
  avatar.src = user.avatar_url;
  userName.textContent = user.name;
  userLogin.textContent = `@${user.login}`;
  company.textContent = user.company ? user.company : "Şirket bulunamadı" ;
  followers.textContent=  user.followers;
  following.textContent = user.following;
  repos.textContent=user.public_repos;
  bioMobile.textContent=user.bio;
  bioDesktop.textContent=user.bio;
  const date = user.created_at;
  
  userJoined.textContent = date.split("T")[0];
  loc.textContent =user.location ? user.location: "Adres bulunamadı ";
  twitter.textContent = user.twitter  ? user.twitter : (user.login === "furkanczay" ? "furkan hoca candır" : "Twitter hesabı bulunamadı");
  blog.textContent = user.blog ? user.blog : "Blog adresi bulunamadı";
  

}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = searchInput.value.trim();

  if (value) search(value);
});
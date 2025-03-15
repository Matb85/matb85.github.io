export function normalise(str: string) {
  return str.toLowerCase().trim().replaceAll(" ", "-");
}

export const email = "mateuszbis85@gmail.com";
export const phone = "+48 575 200 012";
export const LinkeInProfile = "https://www.linkedin.com/in/mateusz-bis-185bb1230/";
export const GithubProfile = "https://github.com/Matb85";

export async function fetchJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "text/plain",
      "User-Agent": "Portfolio (https://github.com/Matb85/portfolio)",
    },
  })
  return await res.text()
}

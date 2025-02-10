async function main() {
  async function handleR(event) {
    event.preventDefault();
    const spinner = document.createElement("div");
    spinner.classList.add("spinner-border");
    document.querySelector("#box").appendChild(spinner);

    const url = "https://melodious-wobbly-zone.glitch.me";
    const formData = new FormData(document.querySelector("#rForm"));
    const text = formData.get("text");
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    //document.querySelector("#box").textContent = JSON.stringify(json);
    spinner.remove();
    const { image, desc } = json;
    const box = document.querySelector("#box");
    box.innerHTML = "";
    const imageTag = document.createElement("img");
    imageTag.classList.add("img-fluid");
    imageTag.src = image;

    const descTag = document.createElement("p");
    descTag.textContent = desc;
    box.appendChild(imageTag);
    box.appendChild(descTag);
  }

  document.querySelector("#rForm").addEventListener("submit", handleR);
}

//화면이 로드되면 이 함수를 실행시키겠다
document.addEventListener("DOMContentLoaded", main);

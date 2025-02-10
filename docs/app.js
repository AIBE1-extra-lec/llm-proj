async function main() {
  async function handleR(event) {
    event.preventDefault();
    const url = "http://127.0.0.1:3000/";
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
    document.querySelector("#box").textContent = JSON.stringify(json);
  }

  document.querySelector("#rForm").addEventListener("submit", handleR, false);
}

//화면이 로드되면 이 함수를 실행시키겠다
document.addEventListener("DOMContentLoaded", main);

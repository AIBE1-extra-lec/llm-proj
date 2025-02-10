async function main() {
  async function handleR() {
    document.querySelector("#box").textContent = await (
      await fetch("http://127.0.0.1:3000/")
    ).text();
  }

  document.querySelector("#rBtn").addEventListener("click", handleR, false);
}

//화면이 로드되면 이 함수를 실행시키겠다
document.addEventListener("DOMContentLoaded", main);

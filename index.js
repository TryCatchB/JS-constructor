const $site = document.querySelector("#site");

const model = [
  { type: "title", value: "Hello World from JS" },
  { type: "text", value: "here we go with some text" },
  { type: "columns", value: ["1111", "2222", "3333"] },
];

model.forEach((block) => {
  let html = "";

  if (block.type === "title") {
    html = title(block);
  } else if (block.type === "text") {
    html = `
        <div class="row">
          <div class="col-sm">
            <p>
              ${block.value}
            </p>
          </div>
        </div>`;
  } else if (block.type === "columns") {
    const arrayValues = block.value;

    arrayValues.forEach((value) => {
      html += `
        <div class="row">
          <div class="col-sm">
              ${value}
          </div>
        </div>`;
    });
  }

  $site.insertAdjacentHTML("beforeend", html);
});

function title(block) {
  return `
        <div class="row">
          <div class="col-sm">
            <h1>${block.value}</h1>
          </div>
        </div>`;
}

function sum(a, b) {
  return a + b;
}

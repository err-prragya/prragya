function downloadText(filename) {
  const blob = new Blob(
    ["\uFEFF" + document.body.innerText],
    { type: "text/plain;charset=utf-8" }
  );

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}

downloadText("page.txt");
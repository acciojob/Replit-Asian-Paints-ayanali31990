const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("reset_button");

changeButton.addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  const blocks = document.querySelectorAll(".grid-item");
  // Reset all first
  blocks.forEach(block => block.style.backgroundColor = "transparent");

  const selectedBlock = document.getElementById(blockId);
  if (selectedBlock) {
    selectedBlock.style.backgroundColor = color;
  }
});

resetButton.addEventListener("click", () => {
  const blocks = document.querySelectorAll(".grid-item");
  blocks.forEach(block => block.style.backgroundColor = "transparent");
});

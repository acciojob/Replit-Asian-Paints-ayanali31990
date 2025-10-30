//your JS code here. If required.
const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");

changeButton.addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // Reset all blocks to transparent first
  const blocks = document.querySelectorAll(".grid-item");
  blocks.forEach(block => block.style.backgroundColor = "transparent");

  // Change color of the selected block
  const selectedBlock = document.getElementById(blockId);
  if (selectedBlock) {
    selectedBlock.style.backgroundColor = color;
  } else {
    alert("Invalid block id! Please enter a number between 1 and 9.");
  }
});

resetButton.addEventListener("click", () => {
  const blocks = document.querySelectorAll(".grid-item");
  blocks.forEach(block => block.style.backgroundColor = "transparent");
});

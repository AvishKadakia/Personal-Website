export default function checkForEmptyTable() {
  let table = document.getElementsByClassName("dataTable")[0];
  if (table !== undefined && table !== null && table !== "") {
    if (table.getElementsByClassName("row-container").length <= 1) {
      if (table.getElementsByClassName("image-container").length <= 0) {
        let node = document.getElementsByClassName("header")[0];
        node.insertAdjacentHTML(
          "afterend",
          '<div class="image-container"><div class="no-data-image"></div><div class="no-data-text">No Data Present</div></div>'
        );
      }
    } else {
      if (document.getElementsByClassName("image-container").length > 0) {
        let node = document.getElementsByClassName("image-container")[0];
        node.parentNode.removeChild(node);
      }
    }
  }
}

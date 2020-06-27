export function TypeValidation(name) {
  let type = document.getElementsByName(name)[0].type;
  let value = document.getElementsByName(name)[0].value;
  if (type === "email") {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(value)) {
      return "Please Enter Valid Email";
    }
  }
  return null;
}
export function CheckIfRequired(feild) {
  if (
    document.getElementsByName(feild)[0].required === true &&
    (document.getElementsByName(feild)[0].value === "" ||
      document.getElementsByName(feild)[0].value === null) &&
    document.getElementsByName(feild)[0].type.toLowerCase() !== "file" &&
    document.getElementsByName(feild)[0].type.toLowerCase() !== "checkbox" &&
    document.getElementsByName(feild)[0].type.toLowerCase() !== "radio"
  ) {
    return "Field Is Required";
  } else {
    //console.log(document.getElementsByName(feild)[0]);
    if (
      document.getElementsByName(feild)[0].required === true &&
      document.getElementsByName(feild)[0].type !== undefined &&
      document.getElementsByName(feild)[0].type.toLowerCase() === "file"
    ) {
      if (
        document.getElementsByName(feild)[0].getAttribute("docsrc") === "" ||
        document.getElementsByName(feild)[0].getAttribute("docsrc") === null
      ) {
        return "Field Is Required";
      }
    }
  }
  if (
    document.getElementsByName(feild)[0].getAttribute("feild-required") ===
    "true"
  ) {
    let doc = document.getElementsByName(feild)[0];
    if (doc.querySelectorAll(".text").length === 0) {
      return "Field Is Required";
    }
  }
  return null;
}
export default function ValidationChecks(name) {
  if (name !== null && name !== undefined && name !== "") {
    if (CheckIfRequired(name) !== null) {
      return CheckIfRequired(name);
    }
    if (TypeValidation(name) !== null) {
      return TypeValidation(name);
    }
  }
  return null;
}

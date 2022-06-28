export function showHide(eye) {
    if (eye.className === "bi bi-eye-fill form-icon") {
        eye.className = "bi bi-eye-slash-fill form-icon"
        eye.parentElement.getElementsByTagName("input")[0].type = "password";
    } else {
        eye.className = "bi bi-eye-fill form-icon"
        eye.parentElement.getElementsByTagName("input")[0].type = "text";
    }
}
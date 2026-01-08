# Simple Form Validation Project

A beginner-friendly registration form built with **HTML5**, **Tailwind CSS**, and **Vanilla JavaScript**. This project demonstrates real-time UI feedback and basic form logic.

## 🚀 Features
* **Tailwind CSS Styling**: Uses a modern, centered layout with a shadow-box container.
* **Floating Fieldsets**: Uses `<fieldset>` and `<legend>` for a professional "swing-in" label effect.
* **Simultaneous Validation**: Checks both Name and Email fields at once before allowing submission.
* **Beginner Friendly**: Uses simple JavaScript logic without complex libraries.

## 🛠️ Technologies Used
* **HTML5**: For the structure.
* **Tailwind CSS**: For the styling (via CDN).
* **JavaScript**: For the validation logic.

## 📝 How it Works
1.  **The Trigger**: When the "Submit" button is clicked, the `onsubmit` event triggers the `checkdata()` function.
2.  **The Clean Slate**: The script clears previous error messages to ensure fresh feedback.
3.  **The Check**: It checks if the `username` or `email` fields are empty (`""`).
4.  **The Status**: A `status` variable tracks if any errors occurred. If even one field is empty, it returns `false`, preventing the form from being sent to the server.

## 📸 Preview
The form features a blue "Submit" button and red error messages that appear directly under the relevant input fields.
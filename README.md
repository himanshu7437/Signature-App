# Signature App

A simple and interactive **Signature App** that allows users to draw their custom signatures, customize its appearance, save it as an image, and retrieve saved signatures, all with an intuitive and user-friendly interface. This project aims to provide an easy solution for digital signature creation.

---

## 🌟 Features

- **Draw Your Signature**: Draw your custom signature using your mouse, touchpad, or touch screen.
- **Customization Options**: Customize your signature with options to select:
  - **Text Color**: Choose the color of your signature lines.
  - **Canvas Background Color**: Select a background color for the signature canvas.
  - **Font Size**: Adjust the thickness of your signature lines.
- **Clear Canvas**: Clear your drawing and start over to create a new signature.
- **Undo Action**: Undo your last drawn action in case of mistakes.
- **Save & Download**: Save your signature as a PNG image and download it to your device.
- **Retrieve Saved Signature**: Automatically retrieve your last saved signature from the browser's localStorage after a page refresh.
  - Your signature is stored in the browser's localStorage upon saving.
  - Upon refreshing the page, your saved signature will be restored on the canvas, allowing you to continue working on it.
- **User-Friendly Interface**: Simple and intuitive controls for drawing and customizing your signature.

---

## 📝 How to Use

1. **Draw Your Signature**: Use your mouse or touch screen to draw your signature in the provided signature area.
2. **Customize Your Signature**:
   - Use the controls to change the **text color**, **background color**, and **font size**.
3. **Save Your Signature**: Once you are satisfied with your signature, click the "Save & Download" button to save it as a PNG image and download it.
4. **Retrieve Saved Signature**: If you have previously saved a signature, you can click the "Retrieve Saved Signature" button to load the saved signature after refreshing the page.
5. **Clear & Undo**: If you need to start over, click the "Clear" button to reset the canvas or use the "Undo" button to remove the last stroke.

---

## 🔄 Retrieve Saved Signature

The **Retrieve Saved Signature** feature works as follows:
1. Draw your signature on the canvas and save it.
2. Once saved, the signature is stored in the browser's **localStorage**.
3. After refreshing the page, your saved signature will be automatically retrieved and displayed on the canvas.
   - The feature restores the canvas with the last saved signature without requiring any additional user interaction.
4. If you want to clear the saved signature, click the "Clear" button. This will remove it from both the canvas and the localStorage.

**Important Notes**:
- This feature is only available as long as the browser's **localStorage** remains intact.
- The saved signature is automatically restored on page reload.
- Use the "Clear" button to delete the saved signature from both the canvas and the storage.

---

## 🛠️ Technologies Used

- **HTML5**: For creating the structure of the app.
- **CSS3**: For styling the application and customizing the layout.
- **JavaScript**: For handling user interactions, drawing on the canvas, and storing/retrieving data.
- **localStorage**: For saving and retrieving the signature data between sessions.

---

## 🤝 Contributing

We welcome contributions from developers of all levels! To contribute to the **Signature App**, follow these steps:

### 1. **Fork the Repository**
   - Fork this repository to your GitHub account to create a personal copy.

### 2. **Clone the Repository**
   - Clone the repository to your local machine using the following command:
     ```bash
     git clone https://github.com/your-username/signature-app.git
     ```

### 3. **Create a New Branch**
   - Create a new branch to work on your changes:
     ```bash
     git checkout -b feature-branch-name
     ```

### 4. **Make Your Changes**
   - Work on your features or fixes. Ensure the app works properly and all new features are well-tested.

### 5. **Commit Your Changes**
   - After making the changes, commit them to your branch:
     ```bash
     git add .
     git commit -m "Description of your changes"
     ```

### 6. **Push Your Changes**
   - Push your changes to your forked repository:
     ```bash
     git push origin feature-branch-name
     ```

### 7. **Create a Pull Request**
   - Once your changes are ready, create a pull request (PR) to merge them into the main repository.

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

For any questions or issues regarding this app, feel free to open an issue on the repository.

# 🧩 Form Builder App

A fully customizable, interactive **form builder** made with **React** and **TypeScript** that allows users to **drag, drop, edit, and save** multiple forms locally. Ideal for surveys, registrations, data collection, and more—without writing a single line of code.

---

## 🚀 Features

### ✅ Optional Field-Based Forms
- Build forms with any number of fields.
- Supports optional/required settings per field.
- Customizable labels, types, and help texts.

### 🛠️ Drag-and-Drop Field Builder
- Intuitive UI to drag and drop fields from the palette into the canvas.
- Field types include:
  - Text (Short Answer, Paragraph, Email, URL, Password)
  - Choice Inputs (Dropdown, Radio Buttons, Yes/No, Rating, Button)
  - Date & Time (Date, Time)
  - Upload & Media (File Upload, Image)
  - Others (Currency)

### ✏️ Edit & Customize Fields
- Real-time field editing on the canvas.
- Change input type, help text, labels, and required flags.
- Field previews update live as you edit.

### 💾 Local Storage Support
- Save your form locally with a custom name.
- Automatically timestamped.
- Reopen forms later for continued editing.

### 📊 Interactive Dashboard
- View all saved forms in one place.
- Edit or delete any saved form instantly.
- Clean and responsive UI.

---

## 📸 Preview

![image](https://github.com/user-attachments/assets/71dbc417-a7fc-46ef-8dd4-628b69189b07)

![image](https://github.com/user-attachments/assets/7f22c325-8399-49b5-9496-15399a3ab9fa)

![image](https://github.com/user-attachments/assets/c93e2e17-02b7-4334-94da-2a58b784a628)

![image](https://github.com/user-attachments/assets/b9386839-cdea-42e9-a9e7-c0a1d8fdd323) ![image](https://github.com/user-attachments/assets/774d6c16-9726-4b88-b553-a0c36de9e1c1) 

---

## ⚙️ Tech Stack

- React + TypeScript
- Tailwind CSS
- Lucide Icons
- Context API
- React Router DOM
- localStorage

---

## 🔧 Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/form-builder.git
cd form-builder

pnpm install
# or
yarn

VITE_LOCAL_STORAGE_KEY=form_data
pnpm run dev
# or
yarn dev

# 🚀 Postman Clone

A powerful Postman-like API testing tool built with **React.js** and **Node.js (Express)** that supports sending multiple API requests in parallel, request history tracking, custom headers, environment variables, and more.

---

## 🧠 Features

- 🔁 **Parallel API Requests**: Test up to 10 requests simultaneously  
- 🧾 **Custom Headers**: Set your own headers as JSON  
- 📤 **Custom Body**: Send POST/PUT bodies  
- 🛠 **Dynamic Input Panels**: Add/Delete input-output pairs  
- ✅ **Success/Failure Indicators**  
- 💾 **Saved Requests**: Save named API calls for later  
- 🧠 **Environment Variables**: Easily switch base URLs  
- 🕒 **Request History**: Track what you’ve tested  
- 🔍 **Line-by-Line Watcher**: Automatically detect and log code changes  
- 🔔 **API Status Logger**: Instantly logs whether API call succeeded or failed  
- 🧠 **Smart Error Counter**: Monitors total API failures and reports instantly  

---

## 🛠️ Tech Stack

| Frontend     | Backend          | Other Utilities          |
|--------------|------------------|---------------------------|
| React.js     | Node.js (Express)| Chokidar (File Watcher)   |
| Material UI  | Axios            | Chalk (Terminal Colors)   |
|              |                  | File-based Logger         |

---

## 📦 Installation

### 1️⃣ Clone the Repository

git clone https://github.com/jayvardhan22/Postman-clone.git
cd Postman-clone

### 2️⃣ Install Backend Dependencies
npm install

### 3️⃣ Install Frontend Dependencies
cd client
npm install

### 4️⃣ Build React for Production
npm run build
cd ..

### 5️⃣ Start the Server and Serve React Frontend
node server.js

Now open http://localhost:5000 in your browser 🚀

### 📁 Project Structure
Postman-clone/
├── client/           # React frontend
│   ├── public/
│   ├── src/
│   └── build/        # Generated after build
├── server.js         # Express backend + API
├── watcher.js        # Watches code file changes
├── logger.js         # Logs API and file activity
├── change-log.txt    # Logs file edits + API events
└── errors.log        # Logs only API failures

### 🧪 API Format
Endpoint: POST /api/calculate
Supported Operations: "add", "subtract"

Sample Request Body:
{
  "operation": "add",
  "num1": 10,
  "num2": 5
}


🧠 Developer Features
🔎 Detects which line and file changed

⚠️ Tracks and logs invalid API calls

📁 Logs all file edits in change-log.txt

❗ Logs API failures in errors.log

🔢 Keeps a live error count in the terminal

🙌 Contributing
Pull requests are welcome!
Feel free to fork this repo and enhance the tool with new features or improvements.

✨ Author
Made with ❤️ by Jay Vardhan Chaudhary



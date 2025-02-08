# HireFlow
# Front-end: Vite + React
# Back-end: Flash (for running JobBERT + XGBoost)
# Database: MySQL

# Set Up the Backend (Flask)
# 1. Create a Virtual Environment & Install Dependencies
cd backend
python -m venv venv
source venv/bin/activate  # (For macOS/Linux)
venv\Scripts\activate   

packages 
pip install flask flask-cors flask-mysql mysql-connector-python requests transformers

# Set Up the MySQL Database
# 1. Install MySQL Server
Go to Command prompt (Run with administrator)
mysql -u root -p
default password: root
If you have a different password, change the value of password in app.py

CREATE DATABASE hireflow;
USE hireflow;

CREATE TABLE applicants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    resume TEXT
);

# Setup the Front-End (Vite + React)
npm install axios react-router-dom

# Run Everything

# 1. Start the MySQL Database
Ensure MySQL is running:
mysql -u root -p

# 2. Start the Flask Backend
cd backend
source venv/bin/activate  # Activate virtual environment
python app.py

# 3. Start the Vite Frontend
If encountering error
> frontend@0.0.0 dev
> vite
'vite' is not recognized as an internal or external command,
operable program or batch file.

Follow these steps: npm install vite -> npm i/install
cd frontend
npm run dev

Run the LLM (Test) Soon 
pip install torch torchvision torchaudio

Verify PyTorch Installation
After installation, run:
python -c "import torch; print(torch.__version__)"

Run
python app.py

Test Backend
curl http://127.0.0.1:5000/


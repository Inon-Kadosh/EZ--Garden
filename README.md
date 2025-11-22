EZ-Garden

A smart garden management system built with Flask + Firebase Firestore, including dashboards, plant monitoring, employee management, maintenance tracking, educational pages, and full web UI.

📌 Images will be added once you upload the files directly here — just drag & drop the screenshots, and I’ll embed them inside the README.

⸻

🌿 Overview

EZ-Garden is a complete management platform for gardens, farms, municipalities, and green companies. It allows administrators and employees to track plant data, manage areas, record issues, analyze efficiency, and access visual dashboards.

⸻

🚀 Features
	•	🔐 Login system (employees + private users)
	•	🌱 Plant database and plant detail pages
	•	📊 Efficiency dashboard (graphs, charts, metrics)
	•	🧪 Water-saving recommendations
	•	🗺️ Map + areas overview
	•	🛠️ Issues reporting & maintenance module
	•	👨‍🏫 Educational content for kids
	•	🗃️ Firestore database integration
	•	📂 File uploads + images

⸻

📸 Screenshots

(Will be inserted after you upload them here.)

⸻

🏗️ Project Structure

EZ-Garden/
│── app.py
│── requirements.txt
│── firebase-key.json   (ignored in git)
│── .gitignore
│
├── templates/
│     ├── *.html
│
├── static/
│     ├── css/
│     ├── js/
│     ├── images/
│
└── __pycache__/


⸻

🔥 Firebase Setup
	1.	Go to Firebase Console → Project Settings → Service Accounts
	2.	Click Generate new private key
	3.	Download the .json file
	4.	Place it in the project root as:

firebase-key.json

	5.	In app.py:

cred = credentials.Certificate("firebase-key.json")
firebase_admin.initialize_app(cred)


⸻

🏃 Running the Project

1. Create venv (Python 3.11 only!)

python3.11 -m venv venv
source venv/bin/activate

2. Install dependencies

pip install -r requirements.txt

3. Run

python3.11 app.py


⸻

🧩 Future Improvements
	•	Add mobile version
	•	Add admin analytics
	•	Improve caching & performance
	•	Add image recognition for plants

⸻

👤 Author

Inon Kadosh

⸻

(נוסיף כאן תיאור מלא, תמונות ומבנה הפרויקט אחרי שתשלח לי את קובץ ה-credentials החדש או כל תמונה שתרצה להכניס.)

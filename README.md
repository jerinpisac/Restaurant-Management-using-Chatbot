# RVRestoBot 🍽️ — AI-Powered Restaurant Reservation Chatbot

**RVRestoBot** is an intelligent, conversational restaurant reservation chatbot built using **BotPress**. It allows users to seamlessly make, view, modify, and cancel reservations, and also provides menu information. The chatbot is deployed on a website using BotPress’s CDN and is integrated with **Make (formerly Integromat)** for sending confirmation emails to users.

---

## 🌟 Features

- 🔐 **Make a Reservation**  
  Users can reserve a table by providing:
  - Email ID  
  - Number of people (party size)  
  - Date and time  

- 📧 **Email Confirmation**  
  Once a reservation is made, an email is sent to the user with a unique **confirmation number** (table row ID).

- 👁️‍🗨️ **View Reservation**  
  Users can view their existing reservation using the confirmation number.

- 🔁 **Modify Reservation**  
  Users can update their reservation details by providing the confirmation number.

- ❌ **Cancel Reservation**  
  Users can cancel a reservation by providing the confirmation number.

- 📖 **Menu Info**  
  Users can ask for the restaurant's menu and get relevant details.

---

## 🧠 Tech Stack

| Technology     | Description |
|----------------|-------------|
| **BotPress**   | Used to create the conversational chatbot logic and flows |
| **Make (Integromat)** | Automates sending confirmation emails to users after a reservation |
| **BotPress Table** | Stores all reservation data including email, party size, date/time |
| **CDN Embed**  | Used to integrate the chatbot into a custom website |

---

## 🌐 Website

This website is made using ReactJS and NodeJs. This is just a one page website, as the main intention was chatbot. It also contains a contact section where you can send an email to the admin of the website (that is you if you are cloning this project). For this, nodemailer is used. So a backend server is also created using express.

- To run the frontend:

``` bash
npm run dev
```

- To run the backend:

``` bash
cd server
npx nodemon
```

---

## 🚀 Botpress Workflow

![Screenshot 2025-05-18 084621](https://github.com/user-attachments/assets/b9ec7a3b-5388-455f-b36c-b08b88ad791a)
![Screenshot 2025-05-18 084601](https://github.com/user-attachments/assets/bf42df6b-c3f2-40e1-9ec2-2959bfa1bba6)

- The content in the autonomous nodes are given in the three text files named Autonomous1.txt, Autonomous2.txt, Autonomous3.txt.
- The standard nodes which contain the execute code card can be generated using Botpress AI.
- You can see any youtube video for integrating botpress and make automation.
- After completing the workflow, publish it, only then you can use it in webchat, whatsapp or telegram.

## 📦 Project Setup

``` bash
git clone https://github.com/jerinpisac/Restaurant-Management-using-Chatbot
cd Restaurant-Management-using-Chatbot
```

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📫 Contact
For queries or suggestions, feel free to reach out:

Author: Jerin P Isac

Email: jerinpisac@gmail.com

GitHub: @jerinpisac


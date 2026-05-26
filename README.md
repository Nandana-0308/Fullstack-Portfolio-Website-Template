# Fullstack Portfolio Website Template

A modern **Fullstack Portfolio Website** built using **React.js, Spring Boot, MySQL, and Docker-ready architecture**.
This project allows users to showcase their portfolio, projects, skills, and contact details through an interactive and responsive UI.

---

# 🚀 Features

* Responsive modern portfolio UI
* Animated sections and smooth scrolling
* Skills showcase section
* Projects section
* Contact form integration
* Backend API using Spring Boot
* MySQL database integration
* Contact messages stored in database
* Email notification support
* Docker-ready backend setup
* Deployed using:

  * Frontend → Netlify
  * Backend → Render
  * Database → Aiven MySQL Cloud

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* JavaScript

## Backend

* Spring Boot
* Spring Data JPA
* Spring Mail
* REST API

## Database

* MySQL (Aiven Cloud)

## Deployment

* Netlify
* Render
* Docker

---

# 📂 Project Structure

```bash
portfolio-template/
│
├── portfolio_frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
├── portfolio_backend/
│   ├── src/
│   ├── pom.xml
│   ├── application.properties
│
└── README.md
```

---

# ⚙️ Frontend Setup

## Clone Repository

```bash
git clone https://github.com/Nandana-0308/Fullstack-Portfolio-Website-Template.git
```

## Navigate to Frontend

```bash
cd portfolio_frontend
```

## Install Dependencies

```bash
npm install
```

## Run Frontend

```bash
npm run dev
```

---

# ⚙️ Backend Setup

## Navigate to Backend

```bash
cd portfolio_backend
```

## Configure Environment Variables

Create `.env` or configure Render Environment Variables:

```env
DATASOURCE_URL=your_mysql_url
DATASOURCE_USERNAME=your_username
DATASOURCE_PASSWORD=your_password

MAIL_USERNAME=your_email
MAIL_PASSWORD=your_app_password

FRONTEND_URL=http://localhost:5173
```

---

# ▶️ Run Backend

Using IntelliJ or:

```bash
./mvnw spring-boot:run
```

---

# 🗄️ Database Configuration

Update `application.properties`:

```properties
spring.datasource.url=${DATASOURCE_URL}
spring.datasource.username=${DATASOURCE_USERNAME}
spring.datasource.password=${DATASOURCE_PASSWORD}

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

---

# 📧 Mail Configuration

```properties
spring.mail.host=smtp.gmail.com
spring.mail.port=465

spring.mail.username=${MAIL_USERNAME}
spring.mail.password=${MAIL_PASSWORD}

spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.ssl.enable=true
```

---

# 🌐 Deployment

## Frontend Deployment

Deployed using Netlify.

## Backend Deployment

Deployed using Render.

## Database

Hosted using Aiven Cloud MySQL.

---

# 🐳 Docker Support

Build Docker Image:

```bash
docker build -t your-image-name .
```

Run Container:

```bash
docker run -p 8080:8080 your-image-name
```

---

# 📌 API Endpoint

## Contact API

```http
POST /api/contact
```

### Request Body

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "message": "Hello"
}
```

---

# 📸 Screenshots

Add project screenshots here.

---

# 📈 Future Enhancements

* Admin dashboard
* Blog integration
* Authentication system
* Resume download analytics
* Dark/Light theme persistence
* Kubernetes deployment

---

# 👨‍💻 Author

**Nandana OR**

GitHub:
[Nandana-0308 GitHub](https://github.com/Nandana-0308?utm_source=chatgpt.com)

Project Repository:
[Fullstack Portfolio Website Template](https://github.com/Nandana-0308/Fullstack-Portfolio-Website-Template?utm_source=chatgpt.com)

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
****

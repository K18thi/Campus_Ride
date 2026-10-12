
# 🚗 CampusRide
### Find your people. Share your ride. Make every commute easier.

CampusRide is a **full-stack campus ride-sharing project developed as an assignment** to explore web application development and DevOps practices. It gives students a simple way to discover rides, offer available seats, and manage ride requests — while bringing together a modern frontend, REST API, containerization, CI, and Kubernetes deployment.

---

## ✨ Take a Look Around

### 🔐 Login
![CampusRide Login](https://github.com/user-attachments/assets/62c4a9cc-54dc-47c9-9cb6-39aa0a72a7ea)

### 🏠 Dashboard
![CampusRide Dashboard](https://github.com/user-attachments/assets/7864b627-4596-47a2-a07a-19249efb54de)

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/e562c630-7cd9-452b-9f96-a834193d9dcd" />

### 🔎 Find Rides
![CampusRide Find Rides](https://github.com/user-attachments/assets/b721ac8f-f614-44ef-b9d7-3601a4f564bb)

### 🚘 My Rides
![CampusRide My Rides](https://github.com/user-attachments/assets/498e5bf6-7948-4dd9-bbb7-cc8510bbf2aa)

## 🌟 What You Can Do

- **Authentication** — Register and sign in with JWT-based authentication and hashed passwords.
- **Find Rides** — Explore rides and filter by route, date, and available seats.
- **Offer a Ride** — Publish trips and make seats available to other students.
- **Manage Requests** — Track requests and pending, accepted, or rejected statuses.
- **My Rides & Profile** — View personal trips and account information.
- **Notifications & Admin Dashboard** — Access ride-related updates and administrative statistics.
- **Responsive Experience** — Form validation, loading states, and toast feedback.

## 🧪 Try the Demo

| | Demo account |
|---|---|
| **Email** | `demo@campusride.com` |
| **Password** | `demo123` |

Use the demo account to explore the application, provided the account is configured in the running version.

## 🛠️ Built With

| Application | DevOps |
|---|---|
| React + Vite | Docker |
| Node.js + Express | Docker Compose |
| Axios + React Router | Jenkins |
| JWT + bcrypt | Kubernetes |

## 🚀 Run Locally

**Prerequisite:** Node.js 20 or later.

```bash
git clone https://github.com/K18thi/Campus_Ride.git
cd Campus_Ride
npm install
npm run install:all
npm run dev
```

Open **http://localhost:5173** to access the frontend. The backend runs on **http://localhost:5000**.

Configure environment variables using `.env.example` where required.

## 🐳 Run with Docker

With Docker Desktop running:

```bash
docker compose up --build
```

Access the application at **http://localhost:8080**, according to the configured port mappings.

To stop the containers:

```bash
docker compose down
```

## ⚙️ CI with Jenkins

The project includes a `Jenkinsfile` for a CI workflow covering:

1. Source checkout
2. Dependency installation
3. Frontend production build
4. Backend syntax validation and tests
5. Docker image build
6. A demonstration deployment stage

The pipeline is designed to demonstrate automated validation and packaging. Actual deployment depends on the configured Jenkins environment.

## ☸️ Kubernetes

The `k8s/` directory contains manifests for the frontend and backend Deployments and Services.

```bash
kubectl apply -f k8s/
kubectl get deployments
kubectl get pods
kubectl get services
```

Ensure the image names, ports, and cluster configuration match your environment before deploying.

## 📁 Project Structure

```text
Campus_Ride/
├── frontend/                  # React + Vite interface
├── backend/
│   ├── controllers/           # Application logic
│   ├── routes/                # REST API routes
│   ├── middleware/            # Authentication middleware
│   ├── data/store.js          # Demo data store
│   └── tests/                 # Backend tests
├── k8s/                       # Kubernetes manifests
├── Dockerfile                 # Backend container
├── docker-compose.yml         # Multi-container setup
├── Jenkinsfile                # CI pipeline
├── package.json
├── .env.example
└── README.md
```

## 🔌 API at a Glance

| Endpoint | Purpose |
|---|---|
| `POST /api/auth/register` | Register |
| `POST /api/auth/login` | Sign in |
| `GET /api/auth/me` | Current user |
| `GET /api/rides` | Browse rides |
| `POST /api/rides` | Offer a ride |
| `POST /api/rides/:id/request` | Request a seat |
| `GET /api/rides/mine` | View personal rides |
| `PUT /api/requests/:id` | Update a request |
| `GET /api/notifications` | View notifications |
| `GET /api/admin/stats` | Admin statistics |

Protected endpoints require a valid bearer token. Refer to the backend route definitions for supported methods and request details.

## 🔭 Future Scope

Persistent database integration, real-time notifications, map-based route discovery, automated image publishing, and deployment to a remote environment are potential enhancements.

---

*Developed by*

**Keerthi K**

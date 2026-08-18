# CampusRide

CampusRide is a polished, beginner-friendly campus ride-sharing platform. Students can discover rides, publish their route, request a seat, and manage their trips. It is designed as a practical DevOps/Jenkins demonstration without requiring paid APIs or a cloud database.

## Features

- JWT login and registration with hashed passwords
- Demo account: `demo@campusride.com` / `demo123`
- Ride search, route/date/seat filtering and sorting
- Offer ride form; newly published rides show up immediately
- Seat request workflow with pending, accepted and rejected states
- Dashboard, My Rides, profile, campus routes and admin dashboard
- Responsive React UI, form validation, loading skeletons and toast feedback
- JSON in-memory demo store so the project works immediately; the controllers/routes are ready to swap to MongoDB models.

## Stack

React + Vite, Axios, React Router, Lucide icons, Express, JWT, bcrypt, and Docker. The API data is held in `backend/data/store.js` for zero-config local demos.

## Folder structure

```text
CampusRide/
├── frontend/                 # React + Vite user interface
│   └── src/                  # pages/components/application styles
├── backend/
│   ├── controllers/          # auth and ride API logic
│   ├── routes/               # REST endpoints
│   ├── middleware/           # JWT guards
│   ├── data/store.js         # realistic demo data fallback
│   └── tests/                # backend smoke test
├── Dockerfile                # API image
├── docker-compose.yml        # API + frontend containers
├── Jenkinsfile               # CI/CD pipeline
└── .env.example
```

## Run locally

Prerequisite: Node.js 20+.

```bash
cd CampusRide
npm install
npm run install:all
npm run dev
```

Open `http://localhost:5173`. The API runs on `http://localhost:5000`.

To use a different API address, copy `.env.example` to `frontend/.env` and set `VITE_API_URL`.

## REST API

`POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me`  
`GET /api/rides`, `GET /api/rides/:id`, `POST /api/rides`  
`POST /api/rides/:id/request`, `GET /api/rides/mine`, `PUT /api/requests/:id`  
`GET /api/notifications`, `GET /api/admin/stats`

Protected routes use `Authorization: Bearer <JWT>`.

## Tests and Docker

```bash
npm test
docker compose up --build
```

Docker exposes the site at `http://localhost:8080` and API at port 5000. For a production deployment, build the frontend with `VITE_API_URL` set to the public API URL.

## Jenkins

Jenkins reads `Jenkinsfile`. Its declarative stages are Checkout, dependency install, frontend build, backend syntax validation, tests, Docker image build, then a deliberately safe demo Deploy stage. Replace that final stage with your college server/registry command when one is available.

## GitHub

```bash
git init
git add .
git commit -m "Initial CampusRide project"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY
git push -u origin main
```

## Future enhancements

MongoDB/Mongoose persistence, real email notifications, image uploads, ratings UI, route maps, and a deployment registry can be added without changing the frontend API contract.

pipeline {
  agent any
  stages {
    stage('Checkout') { steps { checkout scm } }
    stage('Install Dependencies') { steps { sh 'npm install'; sh 'npm run install:all' } }
    stage('Build Frontend') { steps { sh 'npm run build' } }
    stage('Backend Validation') { steps { sh 'node --check backend/server.js' } }
    stage('Run Tests') { steps { sh 'npm test' } }
    stage('Build Docker Image') { steps { sh 'docker build -t campusride:${BUILD_NUMBER} .' } }
    stage('Deploy') { steps { echo 'Demo deployment stage: configure a server or registry for your environment.' } }
  }
}

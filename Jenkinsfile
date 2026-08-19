'''pipeline {
  agent any
  stages {
    stage('Checkout') { steps { checkout scm } }
    stage('Install Dependencies') { steps { bat 'npm install'; bat 'npm run install:all' } }
    stage('Build Frontend') { steps { bat 'npm run build' } }
    stage('Backend Validation') { steps { bat 'node --check backend/server.js' } }
    stage('Run Tests') { steps { bat 'npm test' } }
    stage('Build Docker Image') { steps { bat 'docker build -t campusride:${BUILD_NUMBER} .' } }
    stage('Deploy') { steps { echo 'Demo deployment stage: configure a server or registry for your environment.' } }
  }
}
'''
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                if exist deployment rmdir /s /q deployment
                mkdir deployment
                xcopy dist deployment /E /I /Y
                '''
            }
        }
    }

    post {
        success {
            echo 'Phase 1 CI/CD completed successfully!'
        }

        failure {
            echo 'Phase 1 CI/CD failed!'
        }
    }
}

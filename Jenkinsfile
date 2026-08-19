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
                echo 'Checking out CampusRide from GitHub'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing root dependencies'
                bat 'npm install'

                echo 'Installing frontend dependencies'
                bat 'cd frontend && npm install'
            }
        }

        stage('Build Frontend') {
            steps {
                echo 'Building CampusRide frontend'
                bat 'cd frontend && npm run build'
            }
        }

        stage('Backend Validation') {
            steps {
                echo 'Validating CampusRide backend'
                bat 'node --check backend/server.js'
            }
        }
    }

    post {
        success {
            echo 'CampusRide CI pipeline completed successfully!'
        }

        failure {
            echo 'CampusRide CI pipeline failed. Check the console output.'
        }

        always {
            echo 'Jenkins pipeline execution finished.'
        }
    }
}

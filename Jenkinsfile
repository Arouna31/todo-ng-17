pipeline {
    agent any

    tools {
        nodejs "NodeJS 20.15.1"
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'npm test'
            }
        }
        stage('Build') {
            steps {
                echo 'npm run build --prod'
            }
        }
    }

    post {
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
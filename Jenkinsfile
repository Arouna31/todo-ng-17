pipeline {
    agent any

    tools {
        nodejs 'NodeJs 22' // Nom de l'installation de Node.js configurée dans Jenkins
    }

    environment {
        CI = 'true'
        CREDENTIALS = credentials('global-credentials')
    }

    stages {
        stage('Checkout') {
            steps {
                sh('curl -u ${CREDENTIALS_USR}:${CREDENTIALS_PSW} git https://github.com/Arouna31/todo-ng-17.git')
            }
        }        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Dependencies Audit') {
            steps {
                sh 'npm audit'
            }
        }
        stage('Formatting & Linting') {
            steps {
                sh 'npm run lint'
            }
        }
        stage('Run Units Tests') {
            steps {
                sh 'echo npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'echo npm run build --prod'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo Deploy'
            }
        }
    }

    post {
        success {
            emailext (
                subject: "Build Successful: ${currentBuild.fullDisplayName}",
                body: "Good news, the build was successful.",
                to: 'arounakinda@gmail.com'
            )
        }
        failure {
            emailext (
                subject: "Build Failed: ${currentBuild.fullDisplayName}",
                body: "Something went wrong. Check the Jenkins console for details.",
                to: 'arounakinda@gmail.com'
            )
        }
    }
}

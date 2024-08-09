pipeline {
    agent any

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
                sh 'echo npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'echo npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'echo npm run build --prod'
            }
        }
    }
    post {
        success {
            emailext (
                subject: "Build Successful: ${currentBuild.fullDisplayName}",
                body: "Good news, the build was successful.",
                recipientProviders: [[$class: 'DevelopersRecipientProvider']]
            )
        }
        failure {
            emailext (
                subject: "Build Failed: ${currentBuild.fullDisplayName}",
                body: "Something went wrong. Check the Jenkins console for details.",
                recipientProviders: [[$class: 'DevelopersRecipientProvider']]
            )
        }
    }
}
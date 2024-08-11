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
        stage('Dependencies Audit') {
            steps {
                withNPM(npmrcConfig:'MyNpmrcConfig') {
                    sh 'npm audit'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                withNPM(npmrcConfig:'MyNpmrcConfig') {
                    sh 'npm ci'
                }
            }
        }
        stage('Formatting & Linting') {
            steps {
                sh 'echo Linting & Formatting'
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
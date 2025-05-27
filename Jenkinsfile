pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = "deventia-website-version-02"
        COMPOSE_FILE = "docker-compose.yml"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(
                    branches: [[name: '*/production']],
                    extensions: [],
                    userRemoteConfigs: [[
                        credentialsId: 'abdul_git_repo_credentials',
                        url: 'https://github.com/deventialimited/deventia-website-version-02.git'
                    ]]
                )
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh 'docker-compose down' // stop any running containers (safe restart)
                    sh 'docker-compose build --no-cache'
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                script {
                    sh 'docker-compose up -d'
                }
            }
        }
    }

    post {
        success {
            echo '🚀 Deployment successful via Docker Compose.'
        }
        failure {
            echo '❌ Deployment failed.'
        }
    }
}

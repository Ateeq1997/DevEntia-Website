pipeline {
    agent any

    environment {
        DEPLOY_DIR = "/var/www/devEntiaWebsite"
        COMPOSE_PROJECT_NAME = "deventia-website-version-02"
        COMPOSE_FILE = "${DEPLOY_DIR}/docker-compose.yml"
        BUILD_TAG = "build-${BUILD_NUMBER}" // Automatic image tag per build
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

        stage('Prepare Deployment Directory') {
            steps {
                script {
                    sh """
                        sudo rm -rf $DEPLOY_DIR
                        sudo mkdir -p $DEPLOY_DIR
                        sudo cp -r . $DEPLOY_DIR
                        sudo chown -R \$(whoami):\$(whoami) $DEPLOY_DIR
                    """
                }
            }
        }

        stage('Build Docker Images with Tag') {
            steps {
                script {
                    sh """
                        cd $DEPLOY_DIR
                        docker compose down || true
                        docker compose build --no-cache
                        docker tag deventia-website-version-02-backend deventia-website-version-02-backend:$BUILD_TAG
                        docker tag deventia-website-version-02-frontend deventia-website-version-02-frontend:$BUILD_TAG
                    """
                }
            }
        }

        stage('Clean Old Docker Images') {
            steps {
                script {
                    // Remove untagged and dangling images
                    sh 'docker image prune -af'
                }
            }
        }

        stage('Deploy Services') {
            steps {
                script {
                    sh """
                        cd $DEPLOY_DIR
                        docker compose up -d
                    """
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

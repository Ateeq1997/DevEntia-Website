pipeline {
    agent any

    environment {
        DEPLOY_DIR = "/var/www/devEntiaWebsite"
        COMPOSE_PROJECT_NAME = "deventia-website-version-02"
        COMPOSE_FILE = "${DEPLOY_DIR}/docker-compose.yml"
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

        stage('Copy to Deployment Directory') {
            steps {
                script {
                    // Safely recreate deployment directory
                    sh """
                        sudo rm -rf $DEPLOY_DIR
                        sudo mkdir -p $DEPLOY_DIR
                        sudo cp -r . $DEPLOY_DIR
                        sudo chown -R \$(whoami):\$(whoami) $DEPLOY_DIR
                    """
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh """
                        cd $DEPLOY_DIR
                        docker compose down || true
                        docker compose build
                        docker image prune -f
                    """
                }
            }
        }

        stage('Deploy with Docker Compose') {
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

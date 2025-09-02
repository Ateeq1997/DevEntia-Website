pipeline {
    agent any

    environment {
        // Set environment based on branch
        ENV_NAME = "${env.BRANCH_NAME == 'production' ? 'prod' : 'dev'}"
        DEPLOY_DIR = "${env.BRANCH_NAME == 'production' ? '/var/www/devEntiaWebsite' : '/var/www/devEntiaWebsite-dev'}"
        COMPOSE_PROJECT_NAME = "${env.BRANCH_NAME == 'production' ? 'deventia-website-version-02' : 'deventia-website-dev'}"
        COMPOSE_FILE = "${DEPLOY_DIR}/docker-compose.yml"
        BUILD_TAG = "build-${BUILD_NUMBER}"
        
        // Different ports for each environment
        BACKEND_PORT = "${env.BRANCH_NAME == 'production' ? '4000' : '4001'}"
        FRONTEND_PORT = "${env.BRANCH_NAME == 'production' ? '3000' : '3001'}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(
                    branches: [[name: "*/${env.BRANCH_NAME}"]],
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

        stage('Generate Docker Compose') {
            steps {
                script {
                    sh """
                        cd $DEPLOY_DIR
                        cat > docker-compose.yml << 'EOF'
services:
  backend:
    build:
      context: ./Backend
      dockerfile: Dockerfile
      target: ${ENV_NAME}
      args:
        NODE_ENV: ${ENV_NAME == 'prod' ? 'production' : 'development'}
    container_name: deventia_backend_${ENV_NAME}
    ports:
      - "${BACKEND_PORT}:4000"
    restart: always
    env_file:
      - ${ENV_NAME == 'prod' ? '/home/ubuntu/deventia/.env' : '/home/ubuntu/deventia/.env'}
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:4000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 15s

  frontend:
    build:
      context: ./Frontend
      dockerfile: Dockerfile
      target: ${ENV_NAME}
      args:
        NODE_ENV: ${ENV_NAME == 'prod' ? 'production' : 'development'}
    container_name: deventia_frontend_${ENV_NAME}
    ports:
      - "${FRONTEND_PORT}:3000"
    restart: always
    depends_on:
      backend:
        condition: service_healthy
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 15s
EOF
                    """
                }
            }
        }

        stage('Build Docker Images with Tag') {
            steps {
                script {
                    sh """
                        cd $DEPLOY_DIR
                        docker compose -p $COMPOSE_PROJECT_NAME down || true
                        docker compose -p $COMPOSE_PROJECT_NAME build --no-cache
                        docker tag ${COMPOSE_PROJECT_NAME}-backend ${COMPOSE_PROJECT_NAME}-backend:$BUILD_TAG
                        docker tag ${COMPOSE_PROJECT_NAME}-frontend ${COMPOSE_PROJECT_NAME}-frontend:$BUILD_TAG
                    """
                }
            }
        }

        stage('Clean Old Docker Images') {
            steps {
                script {
                    sh 'docker image prune -af'
                }
            }
        }

        stage('Deploy Services') {
            steps {
                script {
                    sh """
                        cd $DEPLOY_DIR
                        docker compose -p $COMPOSE_PROJECT_NAME up -d
                    """
                }
            }
        }
    }

    post {
        success {
            echo "🚀 ${ENV_NAME} deployment successful via Docker Compose."
        }
        failure {
            echo "❌ ${ENV_NAME} deployment failed."
        }
    }
}
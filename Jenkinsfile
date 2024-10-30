pipeline {
    agent any

    tools {
        gradle 'gradle_version'
        nodejs 'node_version'
    }

    environment {
        JAVA_HOME = tool 'java_version'
        PATH = "${env.PATH}:${env.JAVA_HOME}/bin"
    }

    stages {
        stage('Info') {
            steps {
                script {
                    def currentDir = sh(script: 'pwd', returnStdout: true).trim()
                    echo "Current Directory: ${currentDir}\n" +
                         "Git Branch: ${env.GIT_BRANCH}\n" +
                         "Gradle Version: ${tool 'gradle_version'}\n" +
                         "Node.js Version: ${tool 'node_version'}"
                }
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh './gradlew clean build'
                    sh 'ls build'
                    sh 'ls build/libs'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm ci'
                    sh 'npm run build'
                }
            }
        }

        stage('Copy Build Files') {
            steps {
                script {
                    if (env.GIT_BRANCH == 'origin/main') {
                        echo "Deploying from branch: ${env.GIT_BRANCH}"
                        // dir('backend') {
                        //     sh 'cp build/libs/kenrotaris.dev-*.jar /opt/kenrotaris.dev/'
                        // }
                        dir('frontend') {
                            sh 'rm -rf /opt/kenrotaris.dev/*'  // Clean up the target directory
                            sh 'cp -r dist/* /opt/kenrotaris.dev/'
                            sh 'cp -r dist/assets/images/email /opt/kenrotaris.dev/assets'
                        }
                    } else {
                        echo "Skipping deployment. Current branch is: ${env.GIT_BRANCH}, not 'origin/main'."
                    }
                }
            }
        }

        stage('Docker Compose Build and Deploy') {
            steps {
                script {
                    if (env.GIT_BRANCH == 'origin/main') {
                        def dockerVersion = sh(script: 'docker --version', returnStdout: true).trim()
                        echo "Docker Version: ${dockerVersion}"
                        sh 'docker-compose down'
                        
                        // Ensure we copy the frontend build files
                        sh 'cp -r frontend/dist /usr/share/nginx/html/' 

                        // Rebuild and deploy Docker
                        sh 'docker-compose build'
                        sh 'docker-compose up -d'
                    } else {
                        echo "Skipping Docker Compose operations. Current branch is: ${env.GIT_BRANCH}, not 'origin/main'."
                    }
                }
            }
        }
    }
    
    post {
        always {
            echo 'Cleaning up...'
            cleanWs()
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }

}

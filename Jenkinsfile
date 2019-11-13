pipeline {
  agent any
    tools {nodejs "nodejs v.13.1.0"}
  stages {
    stage('HelloWorld') {
      steps {
        echo 'Hello World Test'
      }
    }
    
    stage('Package and Install') {
      steps {
         bat 'npm install -g grunt-cli'
         bat 'npm install -g karma-cli'
         bat 'npm install --save-dev karma karma-ui5'
         bat'npm install --save-dev karma-chrome-launcher'
         bat' npm install'
      }
    }
    
    stage('Build') {
      steps {
         bat'grunt'
      }
    }
    
    stage('Deloy') {
      steps {
      deploy adapters: [tomcat9(credentialsId: '559d1539-ff3e-4079-917d-2e095ec8699f', path: '', url: 'http://localhost:8081/')], contextPath: 'sample', war: '**/*.war'
      }
    }
    
  }
}
pipeline {
  agent any
    tools {nodejs "nodejs v.13.7.0"}
  stages {
    stage('HelloWorld') {
      steps {
        echo 'Hello World Test'
      }
    }
    
    stage('Package and Install') {
      steps {
         bat 'npm config set @sap:registry https://npm.sap.com'
         bat 'npm install --save-dev @sap/grunt-sapui5-bestpractice-build'
         bat 'npm install -g grunt-cli'
         bat' npm install grunt'
         bat 'npm install grunt-contrib-clean --save-dev'
         bat 'npm install -g karma-cli'
         bat'npm install --save-dev karma-chrome-launcher'
         bat 'npm install --save-dev karma'
         bat 'npm install --save-dev karma-ui5'
        

      }
    }
        stage('Test') {
      steps {
         bat'karma start'
      }
    }
    stage('Build') {
      steps {
         bat'grunt'
      }
    }
    
    stage('Deloy') {
      steps {
      dir("${env.WORKSPACE}/dist"){
       bat 'jar -cvf my_web_app.war *'
       }
      deploy adapters: [tomcat9(credentialsId: '559d1539-ff3e-4079-917d-2e095ec8699f', path: '', url: 'http://localhost:8081/')], contextPath: 'sample', war: '**/*.war'
      }
    }
    
  }
}

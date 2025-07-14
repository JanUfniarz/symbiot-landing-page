Remove-Item .\landing-backend\src\main\resources\static\*

Set-Location .\symbiot-it-landing\
npm run build
Set-Location ..

Copy-Item .\symbiot-it-landing\build\* .\landing-backend\src\main\resources\static\

docker build -t symbiot-landing .\landing-backend

docker save -o ~\Desktop\symbiot-landing.tar symbiot-landing:latest

docker rmi symbiot-landing

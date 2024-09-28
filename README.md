Thank you for checking out my portfolio website project!


This project is productive on [kenrotaris.dev](kenrotaris.dev)
Feel free to contact me: [info@kenrotaris.dev](mailto:info@kenrotaris.dev)

### Run Project:
#### Build the backend
Change directory:
```
cd backend
```

Build the backend:
```
./gradlew build
```

Run the backend :
```
./gradlew bootRun --args='--spring.profiles.active=dev'
```

Or alternatively:
```
java -jar /home/ken/projects/kenrotaris.dev/backend/build/libs/kenrotaris.dev-0.0.1-SNAPSHOT.jar --spring.profiles.active=dev
```


#### Build the frontend
Change directory:
```
cd frontend
```

Install packages with pnpm:
```
pnpm i
```

Build frontend with pnpm:
```
npm run build
```

Run the frontend:
```
npm start
```
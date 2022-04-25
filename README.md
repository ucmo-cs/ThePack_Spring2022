# Software

Download and install the following software to run the application locally:

1. [Node.js](https://nodejs.org/en/download/) Download and install the current LTS version of Node.js (LTS Version 16.14.1).
2. [Git](https://git-scm.com/downloads) Version control software.
3. [PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads) The software to run the database locally.
4. [pgAdmin](https://www.pgadmin.org/download/) A GUI for PostgreSQL.

# Getting Started

1. Clone the repository.
   ```
   git clone https://github.com/cpg55850/WuphfTest.git Wuphf
   ```
2. Install the dependencies.

   ```
   cd Wuphf
   npm install
   ```

3. Rename `.env.example` to `.env` and set environment variables for:

   1. [Google Client Secret](https://console.developers.google.com/apis/credentials/oauthclient/578044382936-9e25sn8rl63jn2hj20p3te6u4s0qvium.apps.googleusercontent.com?project=wuphf-340818)
   2. [Cloudinary](https://cloudinary.com/console/c-e4ff7ac8f9bcfcbc03dd0324aec080)
   3. Your local database URL

4. Create a local database.

   ```bash
   npx prisma migrate reset
   ```

5. Start the server

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Links

1. [GitHub](https://github.com/cpg55850/WuphfTest)
2. [Jira](https://cpg55850.atlassian.net/jira/software/projects/THEP/boards/1)
3. [Cloudinary CMS](https://cloudinary.com/console/c-e4ff7ac8f9bcfcbc03dd0324aec080)
4. [Deployment](https://wuphf-test.vercel.app/)
5. [Figma](https://www.figma.com/file/esvIWUvBkJmtutM1PBGZgb/Wuphf)

# Site Colors

1. #f4f4f3 - White
2. #72d0ed - Light Blue
3. #747378 - Grey
4. #7395b0 - Dark Blue
5. #202e4a - Darkest Blues

![Color Pallete](/asssets/ColorPallete.png)

# References

1. [Git](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)
2. [npm](https://docs.npmjs.com/cli/v7/commands)
3. [Prisma](https://www.figma.com/file/esvIWUvBkJmtutM1PBGZgb/Wuphf)
   - `npx prisma db pull`: Pulls the latest database from the Prisma server.
   - `npx prisma migrate dev `: Runs the latest migration.
   - `npx prisma migrate reset`: Resets the local database.
   - `npx prisma db seed`: Seed the database with dummy data.

# API Manual

## /me

GET | POST | PATCH | DELETE
--- | --- | --- | ---
Get the currently logged in user from session. | ERROR | (N/A) Update the currently logged in user from session. | (N/A) Delete the currently logged in user from session.

## /users
GET | POST | PATCH | DELETE
--- | --- | --- | ---
Get all users. | Create a new user with the given data. | ERROR | ERROR

## /users/[uid]
The uid is the username of the user. Example: /user/johndoe

GET | POST | PATCH | DELETE
--- | --- | --- | ---
Get a user with the given uid. | ERROR | Update a user with the given uid. | Delete a user with the given uid.

## /users/[uid]/wuphfs
GET | POST | PATCH | DELETE
--- | --- | --- | ---
Get all Wuphfs by the given user. | ERROR | ERROR | (N/A) Delete all wuphfs by the given user.

## /users/[uid]/following
GET | POST | PATCH | DELETE
--- | --- | --- | ---
(N/A) Get the users the user with the uid is following. | The current session's user will follow the user with the given [uid]. | ERROR | The current session's user will unfollow the user with the given [uid].

## /users/[uid]/followers
GET | POST | PATCH | DELETE
--- | --- | --- | ---
(N/A) Get the followers of the user with the uid. | ERROR | ERROR | ERROR

## /wuphfs
GET | POST | PATCH | DELETE
--- | --- | --- | ---
Get all wuphfs by all users. | Create a new post with the given data. | ERROR | ERROR

## /wuphfs/[wid]
The wid is an incremented number, i.e. 1, 2, 3...

GET | POST | PATCH | DELETE
--- | --- | --- | ---
Get the wuphf with the given wid. | ERROR | Update a wuphf with the given wid. | Delete a wuphf with the given wid.

## /wuphfs/[wid]/comments
GET | POST | PATCH | DELETE
--- | --- | --- | ---
Get all comments of a specific post. | Create a new comment on a specific post. | ERROR | ERROR

## /wuphfs/[wid]/comments/[cid]
GET | POST | PATCH | DELETE
--- | --- | --- | ---
Get a specific comment on a specific post. | ERROR |  Update a specific comment on a specific post. |  Delete a specific comment on a specific post.

# Getting Started
1. Install the dependencies
    ```bash
    npm install
    ```

2. Rename `.env.example` to `.env` and set variables for:
    1. [Google Client Secret](https://console.developers.google.com/apis/credentials/oauthclient/578044382936-9e25sn8rl63jn2hj20p3te6u4s0qvium.apps.googleusercontent.com?project=wuphf-340818)
    2. [Cloudinary](https://cloudinary.com/console/c-e4ff7ac8f9bcfcbc03dd0324aec080)
    3. Database URL

3. Set up the database
    ```bash
    npx prisma migrate reset
    ```

4. Run the server
    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Site Colors
1. #f4f4f3
2. #72d0ed
3. #747378
4. #7395b0
5. #202e4a

# Prisma Commands

```npx prisma db pull```: Pulls the latest database from the Prisma server.


```npx prisma migrate dev ```: Runs the latest migration.

// @ts-nocheck
export class Constants {
    static PORT = process.env.PORT || 8000;
    static APP_NAME = process.env.APP_NAME || "APP_NAME";
    static EXPIRES_IN = process.env.EXPIRES_IN || "3000s";
    static DATABASE = process.env.DATABASE || "mongodb+srv://rafin:CHoOPq3tTfzNx1DM@cluster0.khgm0kt.mongodb.net/?retryWrites=true&w=majority/serverDeployTest";
    static SECRET = process.env.SECRET || "secretKey";
}
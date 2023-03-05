import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      "mongodb+srv://rafin:CHoOPq3tTfzNx1DM@cluster0.khgm0kt.mongodb.net/test"
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

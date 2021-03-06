import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { GarbageModule } from './garbage/garbage.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/garbage'),
    CategoryModule,
    GarbageModule,
    DashboardModule,
  ],
})
export class AppModule { }

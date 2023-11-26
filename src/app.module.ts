// Import the NestJS core decorator Module for defining a module
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

// Import the NestJS TypeORM module for database ORM integration
import { TypeOrmModule } from '@nestjs/typeorm';
// Import the NestJS GraphQL module for GraphQL API integration
import { GraphQLModule } from '@nestjs/graphql';
// Import ApolloDriver and ApolloDriverConfig for configuring the Apollo GraphQL service
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// Import the application's controller
import { AppController } from './app.controller';
// Import the application's service provider
import { AppService } from './app.service';
// Import the User module, typically containing logic related to user operations
import { UserModule } from './modules/user/user.module';
import { UserKeyModule } from './modules/user_key/user_key.module';
import { StrategyModule } from './modules/strategy/strategy.module';
import { PriceHistoryModule } from './modules/price_history/price_history.module';
// Import the config loading function, for loading settings from environment variables or configuration files
import getConfig from './config';
import { AuthModule } from './modules/auth/auth.module';

// Use the @Module decorator to define the main module of the application
@Module({
  // List all modules required by the application in the imports array
  imports: [
    // Configure the database connection using TypeOrmModule
    TypeOrmModule.forRoot({
      type: 'postgres', // Database type, here using PostgreSQL
      port: parseInt(getConfig('DB_PORT'), 10), // Get the database port from the config and convert to integer
      username: getConfig('DB_USERNAME'), // Get the database username from the config
      password: getConfig('DB_PASSWORD'), // Get the database password from the config
      database: getConfig('DB_NAME'), // Get the database name from the config
      entities: [`${__dirname}/../modules/**/*.entity{.ts,.js}`], // Set the location for entity files for ORM
      logging: true, // Enable logging
      synchronize: true, // Allow automatic synchronization of the database schema (should be disabled in production)
      autoLoadEntities: true, // Automatically load entities
      subscribers: [], // Configure subscribers, typically used for listening to database events
      migrations: [], // Configure database migration files
    }),
    ScheduleModule.forRoot(),
    // Configure GraphQL using the GraphQLModule
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // Set to use Apollo as the GraphQL service driver
      autoSchemaFile: 'schema.gql', // Automatically generate the GraphQL schema file
    }),
    // Import the User module
    UserModule,
    AuthModule,
    UserKeyModule,
    StrategyModule,
    PriceHistoryModule
  ],
  // List all controllers
  controllers: [AppController],
  // List all service providers
  providers: [AppService],
})
// Export AppModule so that it can be included and used in the main application
export class AppModule {}

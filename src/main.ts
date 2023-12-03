// Imports the NestFactory class: core factory class for creating instances of a NestJS application.
import { NestFactory, Reflector } from '@nestjs/core';
// Import the NestFactory class from the NestJS core package.  Including other modules, providers, controllers, etc.
import { AppModule } from './app.module';
import { GqlAuthGuard } from './common/guards/auth.guard';

// Define an asynchronous bootstrap function to set up the application.
async function bootstrap() {
  // Create an instance of the application using the NestFactory and the root module.
  const app = await NestFactory.create(AppModule);
  // Enable Cross-Origin Resource Sharing (CORS) for the application.
  app.enableCors();
  // Global guard
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new GqlAuthGuard(reflector));
  // Tell the application to listen for incoming requests on port 3000.
  await app.listen(3000);
}
// Execute the bootstrap function to start the application.
bootstrap();

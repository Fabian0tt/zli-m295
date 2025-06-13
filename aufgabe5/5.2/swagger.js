import swaggerAutogen from 'swagger-autogen';

// Der Pfad, wo die Swagger-Dokumentation gespeichert werden soll
const outputFile = './swagger.json';

// Der Pfad zu den API-Routen, die dokumentiert werden sollen
const endpointsFiles = ['./lends.js'];

// Swagger-Dokumentation generieren
swaggerAutogen(outputFile, endpointsFiles);
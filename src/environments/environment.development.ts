import { EnvironmentConfiguration } from "../app/model/environment-configuration";

const serverUrl='http://localhost:5090/api';

// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: true,
  apiUrl: serverUrl,
  apiEndpoints: {
    userProfile:'user-profiles'
  },
  adConfig: {
    clientId: '241ae0a9-91d8-48ec-a386-4f771a051c99',
    readScopeUrl: 'api://597779ed-70b6-4e64-8382-2445478f6f09/User.Read',
    writeScopeUrl: 'api://597779ed-70b6-4e64-8382-2445478f6f09/User.Write',
    scopeUrls: [
      'api://597779ed-70b6-4e64-8382-2445478f6f09/User.Read',
      'api://597779ed-70b6-4e64-8382-2445478f6f09/User.Write'
    ],
    apiEndpointUrl: 'http://localhost:5090/api',
    tenantId: "c16ba12f-1c7c-4d93-b000-2cb11f028357"
  },
  cacheTimeInMinutes: 30,
};




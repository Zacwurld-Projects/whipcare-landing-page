const DEV_ADMIN_API_BASE_URL =
  "https://whipcare-admin-dev-954606804258.europe-west1.run.app";
const PROD_ADMIN_API_BASE_URL =
  "https://whipcare-admin-prod-954606804258.europe-west1.run.app";

const DEV_CORE_API_BASE_URL =
  "https://whipcare-core-dev-954606804258.europe-west1.run.app";
const PROD_CORE_API_BASE_URL =
  "https://whipcare-core-prod-954606804258.europe-west1.run.app";

const defaultAdminApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? PROD_ADMIN_API_BASE_URL
    : DEV_ADMIN_API_BASE_URL;

const defaultCoreApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? PROD_CORE_API_BASE_URL
    : DEV_CORE_API_BASE_URL;

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ||
  defaultAdminApiBaseUrl;

export const CORE_API_BASE_URL =
  process.env.NEXT_PUBLIC_CORE_API_BASE_URL?.replace(/\/$/, "") ||
  defaultCoreApiBaseUrl;

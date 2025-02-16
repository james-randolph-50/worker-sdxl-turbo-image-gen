/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_RUNPOD_API_KEY: string;
    readonly VITE_RUNPOD_ENDPOINT_ID: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  
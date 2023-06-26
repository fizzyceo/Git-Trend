
import { ZodIssue } from 'zod'
interface ApiKey  {
  id: string;
  key: string;
  enabled: boolean;
  userId: string;
}
export interface CreateApiData {
  error: string | ZodIssue[] | null
  createdApiKey: ApiKey | null
}

export interface RevokeApiData {
  error: string | ZodIssue[] | null
  success: boolean
}
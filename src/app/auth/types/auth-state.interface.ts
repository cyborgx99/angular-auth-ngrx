import { CurrentUserInterface } from 'src/app/shared/types';
import { BackendErrorResponseInterface } from 'src/app/shared/types/backend-errors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  authToken: string | null;
  error: BackendErrorResponseInterface;
  isLoading: boolean;
  currentUser: CurrentUserInterface | null;
}

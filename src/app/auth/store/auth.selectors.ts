import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInterface } from '../types';

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isSubmitting,
);

export const errorSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.error,
);

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => Boolean(state.authToken),
);

export const authTokenSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.authToken,
);

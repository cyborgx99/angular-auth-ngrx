export enum UserRoleEnum {
  USER = 'USER',
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
}

export interface CurrentUserInterface {
  id: string;
  email: string;
  name: string;
  lastName: string;
  role: UserRoleEnum;
  //TODO: Fix items type
  items: unknown[];
}

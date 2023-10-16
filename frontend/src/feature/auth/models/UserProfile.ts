export interface PermissionApiStructure {
  level: string;
  name: string;
  parentPermissionId?: string;
}

export interface Permission {
  parentPermissionId?: string;
  hasPermission: boolean;
}

export interface IUserProfileData {
  userAliasId: string;
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  emailVerified?: boolean;
  phoneVerified?: boolean;
  department?: string;
  jobTitle?: string;
  kycStatus?: string;
  DeviceName: string;
  userPermissionAndEntityPayload: {
    userId: number;
  };
}

export class UserProfileData {
  authorisationToken = '';
  userData = {} as IUserProfileData;
  permission = {} as Record<string, Record<string, Permission>>;

  constructor(
    authorisationToken: string,
    userData?: IUserProfileData,
    permission?: Record<string, Record<string, Permission>>,
  ) {
    this.authorisationToken = authorisationToken;
    this.userData = userData || ({} as IUserProfileData);
    this.permission = permission || ({} as Record<string, Record<string, Permission>>);
  }
}

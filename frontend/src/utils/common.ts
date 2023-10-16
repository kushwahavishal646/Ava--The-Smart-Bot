import { PermissionApiStructure } from '../feature/auth/models/UserProfile';

export const constructPermission = (permissions?: PermissionApiStructure[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formattedPermission: Record<string, any> = {};
  permissions?.forEach((permission) => {
    if (Object.keys(formattedPermission).includes(permission.level)) {
      formattedPermission[permission.level][permission.name] = {
        parentPermissionId: permission.parentPermissionId,
        hasPermission: true,
      };
    } else {
      formattedPermission[permission.level] = {
        [permission.name]: {
          parentPermissionId: permission.parentPermissionId,
          hasPermission: true,
        },
      };
    }
  });
  return formattedPermission;
};


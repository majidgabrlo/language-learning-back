export const Query = {
  me: (_: any, __: any, { userInfo, prisma }:any) => {
    if (!userInfo) return null;
    return prisma.user.findUnique({
      where: {
        id: userInfo.userId,
      },
    });
  },
};

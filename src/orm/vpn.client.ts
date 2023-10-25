import { PrismaClient, Prisma, VpnLocation } from '@prisma/client';

export class VpnClient {
  private prisma = new PrismaClient();
  public vpnLocation?: VpnLocation[];

  async init() {
    this.vpnLocation = await this.prisma.vpnLocation.findMany();
    // return this.vpnLocation[0];
  }
}

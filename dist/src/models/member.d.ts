import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
interface MemberAttributes {
    id: number;
    name: string;
    description: string;
    contact: string;
    address: string;
    type: string;
}
interface MemberCreationAttributes extends Optional<MemberAttributes, 'id'> {
}
export declare class Member extends Model<MemberAttributes, MemberCreationAttributes> {
    name: string;
    description?: string;
    contact: string;
    address: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
}
export {};
//# sourceMappingURL=member.d.ts.map
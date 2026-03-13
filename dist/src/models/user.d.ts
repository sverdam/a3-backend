import { Model } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Member } from "../models/member";
interface UserAttributes {
    id: number;
    name: string;
    email: string;
    member_id: number;
}
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {
}
export declare class User extends Model<UserAttributes, UserCreationAttributes> {
    name: string;
    email: string;
    member_id: number | null;
    member?: Member | null;
    createdAt: Date;
    updatedAt: Date;
}
export {};
//# sourceMappingURL=user.d.ts.map
import { Model } from "objection"

export default class User extends Model {
  id!: number
  username?: string

  static tableName = "users"

  // --- IF RELATIONS EXSITS ---
  // static relationMappings = {
  //   relRep: {
  //     relation: Model.BelongsToOneRelation,
  //     modelClass: relRep,
  //     join: {
  //       from: "this.relRepId",
  //       to: "relRep.id"
  //     }
  //   }
  // }

  // --- IF "updatedAt" COLUMN EXISTS
  // $beforeUpdate () {
  //   this.updatedAt = new Date()
  // }
}
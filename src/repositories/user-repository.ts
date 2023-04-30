import User from "../models/user"
import Repository from "../base/repository"

export default class NodeRepository extends Repository<User> {
  protected model = User
}
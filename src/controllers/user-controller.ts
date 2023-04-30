import Controller from "../base/controller"
import User from "../models/user"
import UserRepository from "../repositories/user-repository"

export default class UserController extends Controller<User> {
  protected repository = new UserRepository()
}
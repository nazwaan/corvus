import Repository from "./repository"
import { Model } from "objection"
import { DefaultContext } from "koa"

abstract class Controller<T extends Model> {
  protected abstract repository: Repository<T>

  find = async (ctx: DefaultContext) => {
    const id: number = ctx.params.id;
    return await this.repository.find(id);
  }
}

export default Controller
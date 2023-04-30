import { Model } from "objection"

export default abstract class Repository<T extends Model> {
  protected abstract model: typeof Model

  async find (id:number): Promise<T> {
    return (await this.model.query().findById(id)) as T
  }
}
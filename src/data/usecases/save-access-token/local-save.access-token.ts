import { SetStorage } from "@/data/protocols/cache/set-storage"
import { SaveAccessToken } from "@/domain/usecases"

export class LocalSaveAccessToken implements SaveAccessToken {
  constructor (private readonly setStorage: SetStorage) { }
  async save (accessToken): Promise<void> {
    return this.setStorage.set('accessToken', accessToken)
  }
}

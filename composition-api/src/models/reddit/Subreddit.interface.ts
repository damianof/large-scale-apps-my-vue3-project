import { SubredditDataInterface } from './SubredditData.interface'

export interface SubredditInterface {
  kind: string
  name: string
  data: SubredditDataInterface
}

import { User } from '../interfaces'
import { Card } from '../interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { uid: 101, name: 'Alice' },
  { uid: 102, name: 'Bob' },
  { uid: 103, name: 'Caroline' },
  { uid: 104, name: 'Dave' },
]

/** Dummy user data. */
export const sampleCardData: Card[] = [
  { cid: 1, uid: 101, title: '煙 ～ 「一握の砂」より', copyright: 'alice.inc', body: '神有りと言ひ張る友を<br />説きふせし<br />かの路傍の栗の樹の下' },
  { cid: 2, uid: 101, title: 'card 2', copyright: 'alice.inc', body: 'body of card2' },
]
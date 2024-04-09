'use server'

import { db } from '@/lib/db'

export async function getUserById2(id: string) {
  return await db.user.findUnique({
    where: {
      id,
    },
  })
}

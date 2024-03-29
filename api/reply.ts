import type { ReplyDto, UpdateReplyDto } from '~/types'
import { prisma } from './prisma'

export class ReplyApi {
  static async create(id: number, replyDto: ReplyDto) {
    return await prisma.reply.create({
      data: {
        ...replyDto,
        messageId: Number(id)
      }
    })
  }

  static async delete(id: number) {
    return await prisma.reply.delete({
      where: {
        id
      }
    })
  }

  static async update(id: number, updateReplyDto: UpdateReplyDto) {
    return await prisma.reply.update({
      where: {
        id
      },
      data: {
        ...updateReplyDto
      }
    })
  }
}

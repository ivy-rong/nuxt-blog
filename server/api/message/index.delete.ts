import { MessageApi } from '~/api'

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.param?.id) as number
  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'id应该为数字类型'
    })
  }
  try {
    const data = await MessageApi.delete(id)
    return {
      ...data
    }
  } catch (err) {
    return { err }
  }
})

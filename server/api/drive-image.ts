export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const fileId = query.id
  const apiKey = process.env.GOOGLE_API_KEY

  if (!fileId) {
    throw createError({ statusCode: 400, statusMessage: 'Missing File ID' })
  }

  try {
    const imageUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`
    
    // Fetch the raw image buffer from Google Drive
    const imageBuffer: ArrayBuffer = await $fetch(imageUrl, {
      responseType: 'arrayBuffer'
    })

    return imageBuffer
  } catch (err: any) {
    throw createError({ statusCode: 500, statusMessage: 'Failed to load image from Drive' })
  }
})